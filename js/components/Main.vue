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
        class="bg-primary-lightest w-full py-4 px-5 border-primary border-2 text-grey-darkest leading-normal"
      >
      <div
        class="w-full text-right mt-1 text-grey-dark md:absolute md:pin-r md:pin-t md:block md:h-full md:flex md:items-center md:pr-4 md:w-auto md:mt-0"
      >{{ passwordLength }} characters</div>
    </div>

    <!-- <Info/> -->
    <Options @optionsChange="optionsChange"/>

    <button class="mt-6" :disabled="loading" @click="generatePassword">Generate new password</button>
  </div>
</template>

<script>
import LoadingBar from "./LoadingBar.vue";
// import Info from "./Info.vue";
import Options from "./Options.vue";

import passwordGenerator from "../utilities/generator.js";
import storage from "../utilities/storage.js";

export default {
  components: { LoadingBar, Options },
  // components: { LoadingBar, Info, Options },
  data() {
    return {
      password: "",
      options: {
        uppercaseFirstLetter: false,
        minWords: 4,
        activeLanguage: "English",
        separator: " "
      },
      wordLists: {},
      activeList: [],
      loading: false
    };
  },
  computed: {
    passwordLength() {
      return this.password.length;
    },
    activeListStorageKey() {
      return `CHBS_List_${this.options.activeLanguage}`;
    }
  },
  mounted() {
    this.loadList(this.options.activeLanguage);
  },
  methods: {
    generatePassword() {
      this.password = passwordGenerator(this.activeList, this.options);
    },
    loadList(language) {
      // check if list is already in storage
      const storedList = storage.getJSON(this.activeListStorageKey);
      if (storedList) {
        this.activeList = storedList;
        this.generatePassword();
      } else {
        this.loading = true;
        // load list via AJAX request if not in storage
        fetch(`/word_lists/${language}.txt`)
          .then(res => res.text())
          .then(text => text.split("\n"))
          .then(list => {
            this.activeList = list;
            storage.setJSON(list, this.activeListStorageKey);
            this.generatePassword();
          })
          .finally(() => (this.loading = false));
      }
    },
    optionsChange(opt) {
      const currentLang = this.options.activeLanguage;
      this.options = { ...opt };

      if (opt.activeLanguage !== currentLang) {
        this.loadList(opt.activeLanguage);
      } else {
        this.generatePassword();
      }
    }
  }
};
</script>
