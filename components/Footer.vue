<template>
  <footer class="footer w-100 bg-dark p-5">
    <div class="container mt-0 text-center">
      <div class="row">
        <div class="col-md text-muted">
          <p class="mb-0">&#169;{{ year }} Hellenic Defence Net</p>
          <NuxtLink to="/contact" class="link">επικοινωνία</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
