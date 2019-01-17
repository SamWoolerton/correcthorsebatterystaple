<template>
  <div class="bg-blue-lightest mt-4 py-6 px-8">
    <div class="field">
      <label for="min-words">Words</label>
      <select id="min-words" data-option="minWords">
        <option value="4" selected="selected">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="field">
      <label for="language">Language</label>
      <select id="language" data-option="language">
        <option value="chinese">Chinese</option>
        <option value="english" selected="selected">English</option>
        <option value="english-clean">English (clean but less secure)</option>
        <option value="french">French</option>
        <option value="german">German</option>
        <option value="italian">Italian</option>
        <option value="polish">Polish</option>
        <option value="russian">Russian</option>
        <option value="spanish">Spanish</option>
      </select>
    </div>

    <div class="field">
      <label for="separator">Separator</label>
      <input type="text" id="separator" data-option="separator" value=" " size="1">
    </div>

    <div class="field cbx">
      <input type="checkbox" data-option="firstUpper" id="first-upper">
      <label for="first-upper">Make First Letter Uppercase</label>
    </div>

    <div class="field cbx">
      <input type="checkbox" data-option="saveOptions" id="save-options">
      <label for="save-options">
        <strong>Save these options. *</strong>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  // TODO: save options to localStorage
  data() {
    return {
      uppercaseFirstLetter: true,
      minCharacters: 20,
      minWords: 4,
      language: "English",
      separator: " "
    };
  }
};
</script>

