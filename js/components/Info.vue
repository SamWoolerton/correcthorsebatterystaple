<template>
  <div class="fieldset">
    <legend>Information</legend>
    <h3>Information</h3>
    <h4>Security equivalent to:</h4>
    <ul>
      <li>
        <span id="lcase-password" style="font-family: Monospace"></span>
        (
        <span id="lcase-length"></span> lowercase letters)
      </li>
      <li>
        <span id="alnum-password" style="font-family: Monospace"></span>
        (
        <span id="alnum-length"></span> alphanumeric symbols)
      </li>
      <li>
        <span id="ascii-password" style="font-family: Monospace"></span>
        (
        <span id="ascii-length"></span> printable ASCII symbols)
      </li>
    </ul>
    <h4>Number of words to choose from</h4>
    <span id="wordlist-size"></span>
    <h4>Entropy</h4>
    <span id="display-entropy">0</span>&nbsp;Bits
    <br>The entropy is an indicator of how much randomness the password
    contains and consequently how hard it will be to guess. In this case
    it is assumed that the attacker knows that this tool has been used, so
    the entropy is calculated as
    <span
      style="font-family: Monospace"
    >
      log
      <sub>2</sub>(wordlistSize
      <sup>numberOfWords</sup>)
    </span>.
  </div>
</template>
