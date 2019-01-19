<template>
  <div class="h-1 absolute pin">
    <div v-if="!loading" class="bg-primary h-full"></div>
    <div v-else class="bg-grey-dark h-full overflow-hidden">
      <div class="loader-bar h-full"></div>
    </div>
    <!-- <div v-else class="bg-grey-dark h-full loader-container">
      <div class="loader-bar">
        <div class="loader-animation" :class="{loading: loading}"></div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.loader-bar {
  position: relative;
  left: -60%;
  width: 40%;
  background: #3d4852;
  opacity: 0.75;
  will-change: transform;
  animation: loader_bar_loading 1.6s ease infinite;
}

@keyframes loader_bar_loading {
  0% {
    transform: translateX(0%);
  }

  100% {
    // this is relative to original start point and width (50% width and -50% start point; move to 100% is 3x -> 300%)
    transform: translateX(440%);
    // transform: translateX(40%);
  }
}
</style>

