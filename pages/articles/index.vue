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
      <div class="col" v-for="post in navalPosts" :key="post.id">
        <Card :title="post.title" :description="post.description" :image="post.cover_image" :slug="post.id" />
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
      <div class="col" v-for="post in airPosts" :key="post.id">
        <Card :title="post.title" :description="post.description" :image="post.cover_image" :slug="post.id" />
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
      <div class="col" v-for="post in landPosts" :key="post.id">
        <Card :title="post.title" :description="post.description" :image="post.cover_image" :slug="post.id" />
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
      <div class="col" v-for="post in industryPosts" :key="post.id">
        <Card :title="post.title" :description="post.description" :image="post.cover_image" :slug="post.id" />
      </div>
    </div>
    <NuxtLink to="/category/βιομηχανια" class="link mt-3">Περισσότερα στην κατηγορία &raquo;</NuxtLink>
    <br />
    <br />
    <br />
    <h2 class="display-6">Ουκρανία</h2>
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
      <div class="col" v-for="post in ukrPosts" :key="post.id">
        <Card :title="post.title" :description="post.description" :image="post.cover_image" :slug="post.id" />
      </div>
    </div>
    <NuxtLink to="/category/ουκρανια" class="link mt-3">Περισσότερα στην κατηγορία &raquo;</NuxtLink>
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

<script setup>
const { getItems } = useDirectusItems();

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

const ukrPosts = posts.filter((post) => {
  return post.tags.includes("ουκρανια");
});
if (ukrPosts.length > 4) ukrPosts.length = 4;
</script>
