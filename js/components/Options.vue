<template>
  <div class="bg-blue-lightest mt-4 py-6 px-8">
    <div class="field">
      <label for="min-words">Words</label>
      <input type="number" min="4">
    </div>

    <div class="field">
      <label for="language">Language</label>
      <select id="language">
        <option
          v-for="language in languages"
          :key="language"
          :value="language"
          :selected="language === activeLanguage"
        >{{ language }}</option>
      </select>
    </div>

    <div class="field">
      <label for="separator">Separator</label>
      <input type="text" id="separator" v-model="separator" size="1">
    </div>

    <div class="field cbx">
      <input type="checkbox" v-model="uppercaseFirstLetter" id="first-upper">
      <label for="first-upper">Make First Letter Uppercase</label>
    </div>

    <div class="field cbx">
      <input type="checkbox" v-model="saveOptions" id="save-options">
      <label for="save-options">
        <strong>Save these options. *</strong>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uppercaseFirstLetter: true,
      minCharacters: 20,
      minWords: 4,
      activeLanguage: "English (clean)",
      separator: " ",
      saveOptions: true,
      languages: [
        "Chinese",
        "English",
        "English (clean)",
        "French",
        "German",
        "Italian",
        "Polish",
        "Russian",
        "Spanish"
      ]
    };
  },
  methods: {
    setOptions() {
      if (!localStorage) {
        console.log("localStorage not supported");
      }
      localStorage.setItem(this.storageKey, JSON.stringify(this.options));
    },
    getOptions() {
      if (!localStorage) {
        console.log("localStorage not supported");
      }
      try {
        this.options = JSON.parse(localStorage.getItem(this.storageKey));
      } catch (e) {
        console.log("Couldn't parse options");
      }
    }
  },
  mounted() {
    this.getOptions();
  }
};
</script>

