<template>
  <div class="d-flex flex-row align-items-center">
    <span style="margin-right: 0.5em">Share</span>
    <div class="btn-group" role="group">
      <a :href="`https://twitter.com/intent/tweet?text=${title} @hellenicdefence&url=https://hellenicdefence.net/articles/${slug}`"
        target="_blank" class="btn btn-outline-primary" title="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
      <a :href="`https://www.facebook.com/sharer/sharer.php?u=https://hellenicdefence.net/articles/${slug}`"
        target="_blank" class="btn btn-outline-primary" title="Facebook"><i class="fa-brands fa-facebook"></i></a>
      <!-- <a
        :href="`https://www.linkedin.com/sharing/share-offsite/?url=https://hellenicdefence.net/articles/${slug}`"
        target="_blank"
        class="btn btn-outline-primary"
        title="LinkedIn"
        ><i class="fa-brands fa-linkedin"></i
      ></a> -->
      <a :href="`https://t.me/share/url?url=https://hellenicdefence.net/articles/${slug}`" target="_blank"
        class="btn btn-outline-primary" title="Telegram"><i class="fa-brands fa-telegram"></i></a>
      <button @click="copyUrl" class="btn btn-outline-primary" title="Copy Link">
        <i :class="iconClass" />
      </button>
      <!-- <a
        :href="`mailto:?subject=${title}&body=https://hellenicdefence.net/articles/${slug}`"
        target="_blank"
        class="btn btn-outline-primary"
        title="Email"
        ><i class="fa-solid fa-envelope"></i
      ></a> -->
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  name: "Sharer",
  props: {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      iconClass: "fa-solid fa-link",
    };
  },
  methods: {
    async copyUrl() {
      try {
        await navigator.clipboard.writeText(
          `https://hellenicdefence.net/articles/${this.slug}`
        );
        this.iconClass = "fa-solid fa-check";
      } catch (error) {
        console.error(error);
        this.iconClass = "fa-solid fa-circle-exclamation";
      }
      setTimeout(() => {
        this.iconClass = "fa-solid fa-link";
      }, 3000);
    },
  },
};
</script>