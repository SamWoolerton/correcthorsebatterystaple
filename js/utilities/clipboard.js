// original from https://stackoverflow.com/a/30810322/7170445
export default function copyToClipboard(text) {
  const textArea = document.createElement("textarea")
  textArea.value = text
  textArea.style.position = "fixed" //avoid scrolling to bottom
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    document.execCommand("copy")
  } catch (err) {
    console.warn("Copy to clipboard failed", err)
  }

  document.body.removeChild(textArea)
}
