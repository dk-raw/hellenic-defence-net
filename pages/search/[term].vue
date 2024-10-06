<template>
  <div class="container">
    <h1 class="display-3 fw-bold mb-0">
      Άρθρα για <i>{{ term }}</i>
    </h1>
    <hr />
    <p class="lead fw-normal text-muted" v-if="posts.length > 0">
      {{ posts.length }} <span v-if="posts.length == 1">αποτέλεσμα</span
      ><span v-else>αποτελέσματα</span>
    </p>
    <p class="lead text-muted fw-normal" v-if="posts.length == 0">
      Δεν βρέθηκαν άρθρα.
    </p>
    <div v-for="post in posts" :key="post.id">
      <SearchResult
        :title="post.title"
        :description="post.description"
        :slug="post.id"
      />
    </div>
  </div>
</template>
    
  <script setup>
const route = useRoute();
const { getItems } = useDirectusItems();

const term = ref(route.params.term);

const posts = await getItems({
  collection: "Articles",
  params: {
    search: decodeURI(term.value),
    filter: {
      visible: {
        _eq: true,
      },
    },
  },
});
</script>
    