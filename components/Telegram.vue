<template>
  <div>
    <div v-if="JSON.parse(margin)">
      <br />
      <br />
      <br />
    </div>
    <hr v-if="JSON.parse(hr)" />
    <h2 class="display-5 fw-bold mb-0">
      <i class="fa-brands fa-telegram"></i> Εγγραφείτε στο κανάλι μας στο
      Telegram
    </h2>
    <p class="lead text-muted">
      Όπου ποστάρουμε όλα τα καινούργια άρθρα ώστε να μην χάνετε κανένα
    </p>
    <a href="https://t.me/hellenicdefence" target="_blank" class="btn btn-telegram btn-lg w-100">@hellenicdefence</a>
  </div>
</template>

<script>
export default {
  name: "Newsletter",
  props: {
    margin: {
      type: String,
    },
    hr: {
      type: String,
    },
  },
};
</script>