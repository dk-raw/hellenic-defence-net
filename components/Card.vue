<template>
  <NuxtLink :to="`/articles/${slug}`" style="text-decoration: none; color: inherit">
    <div class="card bg-dark text-white card-img-bg">
      <img :src="image" class="card-img" :alt="description" />
      <div class="card-img-overlay">
        <h4 class="card-title fs-lg-6 fs-4">{{ title }}</h4>
        <p class="card-text">
          <span class="d-none d-lg-block">{{ description }}</span>
          <NuxtLink :to="`/articles/${slug}`" class="btn btn-outline-light mt-2 d-none d-lg-inline-block">
            Περισσότερα &raquo;
          </NuxtLink>
          <NuxtLink :to="`/articles/${slug}`" class="link d-block d-lg-none">Περισσότερα &raquo;</NuxtLink>
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      required: true,
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
