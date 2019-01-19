export default {
  get(key = "CHBS") {
    if (!localStorage) {
      console.log("localStorage not supported")
    } else {
      return localStorage.getItem(key)
    }
  },
  getJSON(key) {
    return JSON.parse(this.get(key))
  },
  set(value, key = "CHBS") {
    if (!localStorage) {
      console.log("localStorage not supported")
    } else {
      localStorage.setItem(key, value)
    }
  },
  setJSON(value, key) {
    this.set(JSON.stringify(value), key)
  },
}
