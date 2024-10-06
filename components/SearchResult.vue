<template>
  <NuxtLink
    :to="`/articles/${slug}`"
    style="text-decoration: none; color: inherit"
  >
    <div class="search-result mb-4">
      <h4>{{ title }}</h4>
      <p class="text-muted">{{ description }}.</p>
      <NuxtLink
        :to="`/articles/${slug}`"
        class="link text-decoration-none text-muted"
        >Περισσότερα &raquo;</NuxtLink
      >
    </div>
  </NuxtLink>
</template>

<style>
.search-result {
  padding: 1.5em;
  border: 1px solid hsl(0, 0%, 29%);
}
.search-result:hover h4,
.search-result:focus h4,
.search-result:hover .link,
.search-result:focus .link {
  text-decoration: underline !important;
}
</style>
  
  <script>
export default {
  name: "SearchResult",
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
  