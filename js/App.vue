<template>
  <div class="container my-16">
    <div class="mx-auto max-w-app">
      <Main />
      <Footer />
    </div>
  </div>
</template>

<script>
import Main from "./components/Main.vue"
import Footer from "./components/Footer.vue"

export default {
  components: { Main, Footer },
}
</script>
