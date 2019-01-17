export default function generatePassword() {
  alert("about to generate password")
  return "test password"
}

/**
 * Generate a uniformly distributed random integer using
 * the crypto API. It will be a number in the range starting
 * with lower and up to (but without) upper.
 *
 * @param {number} lower The lower bound of the range of numbers.
 * @param {number} upper The upper bound of the range of numbers (not included).
 */
function getUniformRandomInteger(lower, upper) {
  lower = Math.round(lower)
  upper = Math.round(upper)
  const difference = upper - lower

  if (difference <= 0) {
    throw Error("The upper bound is not greater than the lower bound.")
  }

  // get a cryptoObject to access the Crypto-API
  const cryptoObject = window.crypto || window.msCrypto

  if (
    !cryptoObject ||
    typeof cryptoObject.getRandomValues !== "function" ||
    !Uint32Array
  ) {
    const message = "Your browser has no secure source of random numbers."
    alert(message)
    throw Error(message)
  }

  const maxUint32 = Math.pow(2, 32) - 1
  const maxRandomNumber = Math.floor(maxUint32 / difference) * difference
  const randomArray = new Uint32Array(1)

  /*
   * Generate random numbers until they are smaller than
   * maxRandomNumber. This is necessary because if the
   * number is bigger than maxRandomNumber, the modulo
   * operator will introduce a bias.
   */
  do {
    cryptoObject.getRandomValues(randomArray)
  } while (randomArray[0] > maxRandomNumber)

  return lower + (randomArray[0] % difference)
}

/**
 * Retrieve a number of random words from our dataset
 */
function getRandomWords(n, data, options) {
  const getWord = () => data[getUniformRandomInteger(0, data.length)]

  const processWord = word =>
    options.uppercaseFirstLetter
      ? word.charAt(0).toUpperCase() + word.slice(1)
      : word

  return Array(n).fill(processWord(getWord))
}

function joinWordsToPassword(numWords = 4, separator) {
  return getRandomWords(numWords).join(separator)
}
