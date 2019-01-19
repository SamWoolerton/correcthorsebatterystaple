export default {
  get(key = "CHBS") {
    localStorage.getItem(key)
  },
  set(value, key = "CHBS") {
    localStorage.setItem(key, value)
  },
}
