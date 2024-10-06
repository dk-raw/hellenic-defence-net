<template>
  <ClientOnly>
    <NuxtLink :to="`/articles/${slug}`" style="text-decoration: none; color: inherit">
      <div class="
          row
          align-items-center
          justify-content-between
          mb-5
          border border-white
          m-0
          p-0
          card-display
        ">
        <div class="col-lg p-0">
          <img :src="image" :alt="description" class="img-fluid" />
        </div>
        <div class="col-lg p-3">
          <h2 class="fs-3">{{ title }}</h2>
          <p class="mb-3 text-muted">{{ description }}</p>
          <NuxtLink :to="`/articles/${slug}`" class="btn btn-outline-light">
            Περισσότερα &raquo;
          </NuxtLink>
        </div>
      </div>
    </NuxtLink>
  </ClientOnly>
</template>

<script>
export default {
  name: "DisplayCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
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
