<template>
    <NuxtLink :to="`/authors/${username}`" style="text-decoration: none; color: inherit">
      <div class="search-result mb-4">
        <h4>{{ name }}</h4>
        <NuxtLink :to="`/authors/${username}`" class="link text-decoration-none text-muted">Άρθρα &raquo;</NuxtLink>
      </div>
    </NuxtLink>
  </template>
  
  <script>
  export default {
    name: "AuthorCard",
    props: {
      name: {
        type: String,
      },
      username: {
        type: String,
      },
    },
    data() {
      return {};
    },
  };
  </script>