<template>
  <div class="container">
    <h1 class="display-3 fw-bold mb-0">{{ route.params.cat.toUpperCase() }}</h1>
    <hr />
    <div>
      <div
        class="
          row
          row-cols-1
          row-cols-xxl-2
          row-cols-xl-2
          row-cols-lg-1
          row-cols-md-1
          row-cols-sm-1
          g-4
          mb-4
        "
      >
        <div class="col" v-for="post in posts" :key="post.slug">
          <Card
            :title="post.title"
            :description="post.description"
            :image="post.image.url"
            :slug="post.slug"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { GraphQLClient } from 'graphql-request'
const route = useRoute();
const config = useRuntimeConfig()
const client = new GraphQLClient(`https://graphql.contentful.com/content/v1/spaces/${config.public.spaceId}?access_token=${config.public.apiKey}`)

const category = ref(route.params.cat)

const query = `
  {
  articleCollection(where: {tags_contains_some: "${category.value}"},limit: 100) {
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
  