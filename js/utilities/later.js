/**
 * Generate example passwords:
 *
 * Generates passwords with equivalent strengths to
 * the given number of words.
 */
function generateEquivalentPasswords(words) {
  var possibilities = Math.pow(this.data.length, words)

  // lowercase letters
  var lowercasePassword = []
  var lowercaseLength = Math.floor(Math.log(possibilities) / Math.log(26))
  for (var i = 0; i < lowercaseLength; i++) {
    lowercasePassword.push(this.getUniformRandomInteger(97, 123))
  }

  // alphanumeric
  var alphanumPassword = []
  var alphanumLength = Math.floor(Math.log(possibilities) / Math.log(62))
  for (var i = 0; i < alphanumLength; i++) {
    var character = 91
    while (
      (character >= 91 && character <= 96) ||
      (character >= 58 && character <= 64)
    ) {
      character = this.getUniformRandomInteger(48, 123)
    }
    alphanumPassword.push(character)
  }

  // printable ascii
  var asciiPassword = []
  var asciiLength = Math.floor(Math.log(possibilities) / Math.log(94))
  for (var i = 0; i < asciiLength; i++) {
    asciiPassword.push(this.getUniformRandomInteger(33, 127))
  }
}

function calculateEntropy(words) {
  return Math.floor(Math.log(Math.pow(this.data.length, words)) / Math.log(2))
}
