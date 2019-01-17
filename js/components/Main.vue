<template>
  <div class="card relative">
    <div class="h-1 bg-blue absolute pin"></div>

    <div class="mb-4">
      <h1>Correct Horse Battery Staple</h1>
      <h4>Secure password generator to help keep you safer online</h4>
    </div>

    <div class="relative">
      <input
        type="text"
        :value="password"
        class="bg-blue-lightest w-full py-4 px-5 border-blue border-2"
      >
      <div
        class="absolute pin-r pin-t block h-full flex items-center pr-4"
      >{{ passwordLength }} characters</div>
    </div>

    <!-- <Info/> -->
    <Options/>

    <div @click="generatePassword" class="button mt-4">Generate new password</div>
    <p>{{ password }}</p>
  </div>
</template>

<script>
import Info from "./Info.vue";
import Options from "./Options.vue";

import passwordGenerator from "../utilities/generator.js";

export default {
  components: { Info, Options },
  data() {
    return {
      password: "placeholder for now"
    };
  },
  computed: {
    passwordLength() {
      return this.password.length;
    }
  },
  methods: {
    generatePassword() {
      alert("about to generate password");
    }
  }
};
</script>
