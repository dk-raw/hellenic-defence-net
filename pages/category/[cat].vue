<template>
  <div class="container">
    <h1 class="display-3 fw-bold mb-0">{{ cat.toUpperCase() }}</h1>
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
        <div class="col" v-for="post in filtered" :key="post.id">
          <Card
            :title="post.title"
            :description="post.description"
            :image="post.cover_image"
            :slug="post.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
const route = useRoute();
const { getItems } = useDirectusItems();

const categories = ["ναυτικο", "αεροπορια", "βιομηχανια", "πεζικο"];

const cat = ref(route.params.cat);

const posts = await getItems({
  collection: "Articles",
  params: {
    filter: {
      visible: {
        _eq: true,
      },
    },
    sort: "-created_at",
  },
});

const filtered = posts.filter((post) => {
  return post.tags.includes(route.params.cat);
});
</script>
  