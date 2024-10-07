<template>
  <div class="container">
    <h1 class="display-3 fw-bold mb-0">
      Συντάκτης <i>{{ name }}</i>
    </h1>
    <hr />
    <div>
      <p class="lead text-muted fw-normal" v-if="hasTwitter">
        Ακολουθήστε τον συντάκτη στο <a :href="`https://x.com/${username}`" target="_blank" class="link"><i
            class="fa-brands fa-x-twitter"></i> Twitter</a>
      </p>
      <p class="lead text-muted fw-normal" v-if="posts.length == 0">
        Δεν βρέθηκαν άρθρα.
      </p>
      <p class="lead text-muted fw-normal" v-else>{{ total }} άρθρα σύνολο</p>
      <div class="
          row
          row-cols-1
          row-cols-xxl-2
          row-cols-xl-2
          row-cols-lg-1
          row-cols-md-1
          row-cols-sm-1
          g-4
          mb-4
        ">
        <div class="col" v-for="post in posts" :key="post.slug">
          <Card :title="post.title" :description="post.description" :image="post.image.url" :slug="post.slug" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item" v-if="posts.length == 10">
          <NuxtLink :to="`/author/${route.params.username}/2`" class="page-link">Επόμενη &raquo;</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>


<script setup>
import { GraphQLClient } from 'graphql-request'
const route = useRoute();
const config = useRuntimeConfig()
const client = new GraphQLClient(`https://graphql.contentful.com/content/v1/spaces/${config.public.spaceId}?access_token=${config.public.apiKey}`)

const username = ref(route.params.username);

const query = `
  {
  articleCollection(where: {author: {twitter: "${username.value}" }}, limit: 10) {
  total
    items {
      title
      description
      slug
      image {
        url
      }
    }
  }
  authorCollection(where: {twitter: "${username.value}"}) {
    items {
      displayName
      hastwitter
    }
  }
}
`
const data = await client.request(query)

const posts = data.articleCollection.items
const total = data.articleCollection.total
if (!posts || Object.keys(posts).length === 0) {
  throw createError({
    statusCode: 404
  })
}
const hasTwitter = data.authorCollection.items[0].hastwitter
const name = data.authorCollection.items[0].displayName
</script>