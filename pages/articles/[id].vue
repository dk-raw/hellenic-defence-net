<template>
  <div class="container">
    <article>
      <h1 class="display-3 fw-bold mb-1">{{ post.title }}</h1>
      <p class="lead fw-normal text-muted">
        <span v-if="post.author">Γράφει ο <NuxtLink :to="`/authors/${post.author.twitter}`" class="link">{{
          post.author.displayName }}</NuxtLink> στις
        </span>
        {{ date.getDate() }} {{ months[date.getMonth()] }}
        {{ date.getFullYear() }}
      </p>
      <Sharer :title="post.title" :slug="post.slug" />
      <p v-if="post.note" style="font-size: 20px" class="text-muted my-3">
        <i class="fa-solid fa-info"></i> {{ post.note }}
      </p>
      <hr />
      <img :src="post.image.url" :alt="post.description" class="img-fluid mb-2" />
      <Article :content="content" />
      <p style="font-size: 18px">Αναμένουμε τα σχόλιά σας στο <a href="https://x.com/hellenicdefence" target="_blank"
          class="link">Twitter</a>!</p>
      <hr />
      <div class="d-flex flex-row justify-content-between align-items-center">
        <p class="m-0 ff-stratum fw-bold">HDN</p>
        <Sharer :title="post.title" :slug="post.slug" />
      </div>
    </article>
  </div>
</template>

<script setup>
import Article from "~~/components/Article.vue";

const route = useRoute();
import { GraphQLClient } from 'graphql-request'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const content = ref("");

const config = useRuntimeConfig()
const client = new GraphQLClient(`https://graphql.contentful.com/content/v1/spaces/${config.public.spaceId}?access_token=${config.public.apiKey}`)


const query = `
  {
  articleCollection(where: {slug: "${route.params.id}"}, limit: 1) {
    items {
      title
      description
      slug
      image {
        url
      }
      sys {
        firstPublishedAt
      }
      content {
        json
        links {
          assets {
            block {
              url
              sys {
                id
              }
            }
          }
        }
      }
      author {
        displayName
        twitter
      }
    }
  }
}
`
const data = await client.request(query)

const post = data.articleCollection.items[0]

if (!post || Object.keys(post).length === 0) {
  throw createError({
    statusCode: 404
  })
}

const assets = post.content.links.assets.block

const idToUrlMap = assets.reduce((map, item) => {
  map[item.sys.id] = item.url;
  return map;
}, {});

const options = {
  renderNode: {
    'embedded-asset-block': (node) => {
      const { id } = node.data.target.sys
      return `<img src="${idToUrlMap[id]}" class="img-fluid" />`
    },
  },
}

content.value = documentToHtmlString(post.content.json, options)

const months = [
  "Ιανουαρίου",
  "Φεβρουαρίου",
  "Μαρτίου",
  "Απριλίου",
  "Μαίου",
  "Ιουνίου",
  "Ιουλίου",
  "Αυγούστου",
  "Σεπτεμβρίου",
  "Οκτωβρίου",
  "Νοεμβρίου",
  "Δεκεμβρίου",
];

const date = ref(new Date(post.sys.firstPublishedAt));

useHead({
  title: `${post.title} - Hellenic Defence Net`,
  link: [
    {
      rel: "canonical",
      href: `https://hellenicdefence.net/articles/${post.slug}`,
    },
  ],
  meta: [
    {
      name: "description",
      content: post.description,
    },
    {
      name: "author",
      content: post.author ? post.author.displayName : "Hellenic Defence Net",
    },
    {
      property: "og:url",
      content: `https://hellenicdefence.net/articles/${post.slug}`,
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:image",
      content: `${post.image.url}`,
    },
    {
      property: "og:image:alt",
      content: post.description,
    },
    {
      property: "og:title",
      content: `${post.title} - Hellenic Defence Net`,
    },
    {
      property: "og:description",
      content: post.description,
    },
    {
      property: "twitter:title",
      content: `${post.title} - Hellenic Defence Net`,
    },
    {
      property: "twitter:description",
      content: post.description,
    },
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:url",
      content: `https://hellenicdefence.net/articles/${post.slug}`,
    },
    {
      property: "twitter:image",
      content: `${post.image.url}`,
    },
    {
      property: "twitter:image:alt",
      content: post.description,
    },
  ],
});
</script>