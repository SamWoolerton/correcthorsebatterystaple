<template>
  <div class="bg-primary-lightest mt-4 py-6 px-8">
    <div class="field">
      <label for="min-words">Words</label>
      <!-- <input id="min-words" v-model="options.minWords" type="number" min="4"> -->
      <input id="min-words" v-model="minWords" type="number" min="4">
    </div>

    <div class="field">
      <label for="language">Language</label>
      <select id="language" v-model="options.activeLanguage">
        <option
          v-for="language in languages"
          :key="language"
          :value="language"
          :selected="language === options.activeLanguage"
        >{{ language }}</option>
      </select>
    </div>

    <div class="field">
      <label for="separator">Separator</label>
      <input id="separator" v-model="options.separator" type="text" size="1">
    </div>

    <div class="field cbx">
      <input id="first-upper" v-model="options.uppercaseFirstLetter" type="checkbox">
      <label for="first-upper">Make First Letter Uppercase</label>
    </div>

    <div class="field cbx">
      <input id="save-options" v-model="saveOptions" type="checkbox">
      <label for="save-options">
        <strong>Save these options. *</strong>
      </label>
    </div>
  </div>
</template>

<script>
import storage from "../utilities/storage.js";

export default {
  data() {
    return {
      minWords: 10,
      options: {
        uppercaseFirstLetter: false,
        minWords: 4,
        activeLanguage: "English",
        separator: " "
      },
      saveOptions: true, // need to trigger this in/out of localStorage, combo of v-model and watcher
      languages: [
        "Chinese",
        "English",
        "French",
        "German",
        "Italian",
        "Polish",
        "Russian",
        "Spanish"
      ]
    };
  },
  mounted() {
    this.getOptions();
  },
  methods: {
    setOptions() {
      storage.setJSON(this.storageKey, this.options);
    },
    getOptions() {
      try {
        this.options = storage.getJSON(this.storageKey);
      } catch (e) {
        console.log("Couldn't parse options");
      }
    }
  }
};
</script>

