<template>
  <div class="card relative">
    <LoadingBar :loading="loading"/>

    <div class="mt-4 mb-6">
      <h1>Correct Horse Battery Staple</h1>
      <h4 class="mt-1">Secure password generator to help keep you safer online</h4>
    </div>

    <div class="relative my-6">
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

    <button
      class="mt-6"
      :disabled="loading"
      :class="{ disabled: loading }"
      @click="generatePassword"
    >Generate new password</button>
    <button @click="loadListTest">Load list</button>
  </div>
</template>

<script>
import LoadingBar from "./LoadingBar.vue";
// import Info from "./Info.vue";
import Options from "./Options.vue";

import passwordGenerator from "../utilities/generator.js";
import ftch from "../utilities/ftch.js";

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
      passwordGenerator(this.activeList);
    },
    loadList(language) {
      // load list via AJAX request
      fetch(`/word_lists/${language}.txt`)
        .then(res => res.text().split("\n"))
        .then(list => (this.activeList = list));

      // TODO: cache the list in localStorage

      this.generatePassword();
    },
    loadListTest() {
      this.loadList("French");
    }
  },
  mounted() {
    // this.loadList(this.options.language);
  }
};
</script>
