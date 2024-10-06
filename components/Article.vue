<template>
  <div v-html="content" class="content"></div>
</template>
    
    <script>
export default {
  name: "Article",
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
    