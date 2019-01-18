<template>
  <div class="card relative">
    <LoadingBar :loading="loading"/>

    <div class="mb-4">
      <h1>Correct Horse Battery Staple</h1>
      <h4>Secure password generator to help keep you safer online</h4>
    </div>

    <div class="relative">
      <input
        v-model="password"
        type="text"
        class="bg-primary-lightest w-full py-4 px-5 border-primary border-2"
      >
      <div
        class="absolute pin-r pin-t block h-full flex items-center pr-4"
      >{{ passwordLength }} characters</div>
    </div>

    <!-- <Info/> -->
    <Options/>

    <div
      class="button mt-4"
      :disabled="loading"
      :class="{ disabled: loading }"
      @click="generatePassword"
    >Generate new password</div>
  </div>
</template>

<script>
import LoadingBar from "./LoadingBar.vue";
// import Info from "./Info.vue";
import Options from "./Options.vue";

import passwordGenerator from "../utilities/generator.js";

export default {
  components: { LoadingBar, Options },
  // components: { LoadingBar, Info, Options },
  data() {
    return {
      password: "placeholder for now",
      storageKey: "CHBSOptions",
      options: {},
      wordLists: {},
      activeList: [],
      loading: false
    };
  },
  computed: {
    passwordLength() {
      return this.password.length;
    }
  },
  methods: {
    generatePassword() {
      // alert("about to generate password");
    },
    loadList() {
      // load list via AJAX request
      // will need a dev server to pull this off

      this.generatePassword();
    }
  },
  mounted() {
    this.loadList();
  }
};
</script>
