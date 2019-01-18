<template>
  <div class="h-1 absolute pin">
    <div v-if="!loading" class="bg-primary h-full"></div>
    <div v-else class="bg-grey-dark h-full"></div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: String,
      required: true
    }
  }
};
</script>
