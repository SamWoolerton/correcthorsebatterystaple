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
        <option value="chinese">chinese</option>
        <option value="english" selected="selected">english</option>
        <option value="english-less-obscene">english (less obscene but less secure)</option>
        <option value="french">french</option>
        <option value="german">german</option>
        <option value="italian">italian</option>
        <option value="polish">polish</option>
        <option value="russian">russian</option>
        <option value="spanish">spanish</option>
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
        <strong>Save these options.*</strong>
      </label>
    </div>

    <!--<div class="field cbx">-->
    <!--	<input type="checkbox" id="jargon" />-->
    <!--	<label for="jargon">Add more words to the mix*</label>-->
    <!--</div>-->
  </div>
</template>
