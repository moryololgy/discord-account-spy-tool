let ison = false

chrome.storage.local.get(['ison'], (res) => {
  ison = res.ison || false
})

chrome.storage.onChanged.addListener((changes) => {
  if (changes.ison) {
    ison = changes.ison.newValue
  }
})

chrome.webRequest.onBeforeRequest.addListener(
  () => {
    return { cancel: ison }
  },
  { urls: ["*://*.discord.com/*/ack"] },
  ["blocking"]
)
