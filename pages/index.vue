<template>
  <div>
    <div class="header d-flex flex-row align-items-center">
      <div class="container my-0">
        <h1 class="display-1 fw-bold mb-0 index-title">Hellenic Defence Net</h1>
        <p class="lead fw-medium text-orange">
          Αμυντικά Νέα, Εθνικά Θέματα, Αναλύσεις, Απόψεις
        </p>
      </div>
    </div>
    <div class="container mt-5">
      <h2 class="my-4 display-6" style="padding-left: 0.5em; font-weight: 600">
        Πρόσφατα
      </h2>
      <DisplayCard v-for="post in posts" :key="post.slug" :title="post.title" :description="post.description"
        :image="post.image.url" :slug="post.slug" />
      <NuxtLink to="/articles" class="btn btn-outline-primary w-100">ΑΝΑ ΚΑΤΗΓΟΡΙΑ &raquo;</NuxtLink>
      <Telegram margin="true" hr="true" />
    </div>
  </div>
</template>

<script setup>
import { GraphQLClient } from 'graphql-request'
const config = useRuntimeConfig()
const client = new GraphQLClient(`https://graphql.contentful.com/content/v1/spaces/${config.public.spaceId}?access_token=${config.public.apiKey}`)

const query = `
  {
  articleCollection(limit: 5) {
    items {
      title
      description
      slug
      image {
        url
      }
    }
  }
}
`
const data = await client.request(query)

const posts = data.articleCollection.items


</script>