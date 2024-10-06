<template>
  <div class="container">
    <h1 class="display-3 fw-bold mb-0">
      Συντάκτης <i>{{ name }}</i>
    </h1>
    <hr />
    <div>
      <p class="lead text-muted fw-normal" v-if="posts.length == 0">
        Δεν βρέθηκαν άρθρα.
      </p>
      <p class="lead text-muted fw-normal" v-else>
        Σελίδα {{ route.params.page }} - {{ total }} άρθρα σύνολο
      </p>
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
        <li class="page-item" v-if="parseInt(route.params.page) > 1">
          <NuxtLink :to="`/author/${route.params.username}/${parseInt(route.params.page) - 1
            }`" class="page-link">&laquo; Προηγούμενη</NuxtLink>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">{{ route.params.page }}</a>
        </li>
        <li class="page-item" v-if="posts.length == 10">
          <NuxtLink :to="`/author/${username.value}/${parseInt(route.params.page) + 1
            }`" class="page-link">Επόμενη &raquo;</NuxtLink>
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

const page = ref(route.params.page);

const query = `
  {
  articleCollection(where: {author: {twitter: "${username.value}" }}, skip: ${(page.value - 1) * 10}, limit: 10) {
  total  
  items {
    title
    description
    slug
      image {
      url
    }
    author {
    displayName
    }
  }
}
 authorCollection(where: {twitter: "@123"}) {
  items{
  displayName
}
  }
}
`
const data = await client.request(query)

const posts = data.articleCollection.items
const total = data.articleCollection.total
const name = data.authorCollection.items[0].displayName
</script>