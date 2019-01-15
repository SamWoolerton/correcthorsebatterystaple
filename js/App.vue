<template>
  <div class="container my-16">
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Main, Footer }
};
</script>
