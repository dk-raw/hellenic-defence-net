<template>
  <div class="container">
    <h1 class="display-3 fw-bold mb-0">
      Άρθρα για <i>{{ term }}</i>
    </h1>
    <hr />
    <p class="lead fw-normal text-muted" v-if="posts.length > 0">
      {{ posts.length }} <span v-if="posts.length == 1">αποτέλεσμα</span><span v-else>αποτελέσματα</span>
    </p>
    <p class="lead text-muted fw-normal" v-if="posts.length == 0">
      Δεν βρέθηκαν άρθρα.
    </p>
    <div v-for="post in posts" :key="post.slug">
      <SearchResult :title="post.title" :description="post.description" :slug="post.slug" />
    </div>
  </div>
</template>

<script setup>
import { GraphQLClient } from 'graphql-request'
const route = useRoute();
const config = useRuntimeConfig()
const client = new GraphQLClient(`https://graphql.contentful.com/content/v1/spaces/${config.public.spaceId}?access_token=${config.public.apiKey}`)

const term = ref(route.params.term)

const query = `
  {
  articleCollection(
    where: {OR: [{title_contains: "${term.value}"}, {description_contains: "${term.value}"}, {content_contains: "${term.value}"}]}
    limit: 100
  ) {
    items {
      title
      description
      slug
    }
  }
}
`
const data = await client.request(query)

const posts = data.articleCollection.items
</script>