<template>
  <div class="container">
    <h1 class="display-3 fw-bold mb-0">Άρθρα</h1>
    <hr />
    <br />
    <h2 class="display-6">Ναυτικό</h2>
    <div class="
        row
        row-cols-1
        row-cols-xxl-2
        row-cols-xl-2
        row-cols-lg-1
        row-cols-md-1
        row-cols-sm-1
        g-4
        mb-2
      ">
      <div class="col" v-for="post in navalPosts" :key="post.slug">
        <Card :title="post.title" :description="post.description" :image="post.image.url" :slug="post.slug" />
      </div>
    </div>
    <NuxtLink to="/category/ναυτικο" class="link mt-3">Περισσότερα στην κατηγορία &raquo;</NuxtLink>
    <br />
    <br />
    <br />
    <h2 class="display-6">Αεροπορία</h2>
    <div class="
        row
        row-cols-1
        row-cols-xxl-2
        row-cols-xl-2
        row-cols-lg-1
        row-cols-md-1
        row-cols-sm-1
        g-4
        mb-2
      ">
      <div class="col" v-for="post in airPosts" :key="post.slug">
        <Card :title="post.title" :description="post.description" :image="post.image.url" :slug="post.slug" />
      </div>
    </div>
    <NuxtLink to="/category/αεροπορια" class="link mt-3">Περισσότερα στην κατηγορία &raquo;</NuxtLink>
    <br />
    <br />
    <br />
    <h2 class="display-6">Στρατός Ξηράς</h2>
    <div class="
        row
        row-cols-1
        row-cols-xxl-2
        row-cols-xl-2
        row-cols-lg-1
        row-cols-md-1
        row-cols-sm-1
        g-4
        mb-2
      ">
      <div class="col" v-for="post in landPosts" :key="post.slug">
        <Card :title="post.title" :description="post.description" :image="post.image.url" :slug="post.slug" />
      </div>
    </div>
    <NuxtLink to="/category/πεζικο" class="link mt-3">Περισσότερα στην κατηγορία &raquo;</NuxtLink>
    <br />
    <br />
    <br />
    <h2 class="display-6">Βιομηχανία</h2>
    <div class="
        row
        row-cols-1
        row-cols-xxl-2
        row-cols-xl-2
        row-cols-lg-1
        row-cols-md-1
        row-cols-sm-1
        g-4
        mb-2
      ">
      <div class="col" v-for="post in industryPosts" :key="post.slug">
        <Card :title="post.title" :description="post.description" :image="post.image.url" :slug="post.slug" />
      </div>
    </div>
    <NuxtLink to="/category/βιομηχανια" class="link mt-3">Περισσότερα στην κατηγορία &raquo;</NuxtLink>
    <Telegram margin="true" hr="true" />
  </div>
</template>

<!-- <style scoped>
h2 {
  padding-left: 0.5em;
  margin-bottom: 0.5em;
  font-weight: 600;
}
</style> -->

<style scoped>
h2 {
  padding-left: 0.5em;
  margin-bottom: 0.5em;
  font-weight: 600;
}
</style>


<script setup>
import { GraphQLClient } from 'graphql-request'
const config = useRuntimeConfig()
const client = new GraphQLClient(`https://graphql.contentful.com/content/v1/spaces/${config.public.spaceId}?access_token=${config.public.apiKey}`)

const query = `
  {
  articleCollection(limit: 40) {
    items {
      title
      description
      slug
      image {
        url
      }
      tags
    }
  }
}
`
const data = await client.request(query)

const posts = data.articleCollection.items

console.log(posts);


const navalPosts = posts.filter((post) => {
  return post.tags.includes("ναυτικο");
});
if (navalPosts.length > 4) navalPosts.length = 4;

const airPosts = posts.filter((post) => {
  return post.tags.includes("αεροπορια");
});
if (airPosts.length > 4) airPosts.length = 4;

const landPosts = posts.filter((post) => {
  return post.tags.includes("πεζικο");
});
if (landPosts.length > 4) landPosts.length = 4;

const industryPosts = posts.filter((post) => {
  return post.tags.includes("βιομηχανια");
});
if (industryPosts.length > 4) industryPosts.length = 4;
</script>
