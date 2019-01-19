<template>
  <div class="bg-primary-lightest mt-4 py-6 px-8">
    <div class="field">
      <label for="min-words">Words</label>
      <input id="min-words" v-model.number="opt.minWords" type="number" min="4">
    </div>

    <div class="field">
      <label for="language">Language</label>
      <select id="language" v-model="opt.activeLanguage">
        <option
          v-for="language in languages"
          :key="language"
          :value="language"
          :selected="language === opt.activeLanguage"
        >{{ language }}</option>
      </select>
    </div>

    <div class="field">
      <label for="separator">Separator</label>
      <input id="separator" v-model="opt.separator" type="text" size="1">
    </div>

    <div class="field cbx">
      <input id="first-upper" v-model="opt.uppercaseFirstLetter" type="checkbox">
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
      opt: {
        uppercaseFirstLetter: false,
        minWords: 4,
        activeLanguage: "English", // TODO: watch this to trigger language change (send event of all and handle in Main)
        separator: " "
      },
      saveOptions: true, // TODO: need to trigger this in/out of localStorage, combo of v-model and watcher
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
  watch: {
    opt: {
      handler() {
        this.optionsChanged();
      },
      deep: true
    }
  },
  mounted() {
    this.getOptions();
  },
  methods: {
    optionsChanged() {
      this.$emit("optionsChange", this.opt);
    },
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

