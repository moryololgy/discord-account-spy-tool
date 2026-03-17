let tgl = document.getElementById('tgl')

chrome.storage.local.get(['ison'], (res) => {
  tgl.checked = res.ison || false
})

tgl.addEventListener('change', (e) => {
  chrome.storage.local.set({ ison: e.target.checked })
})
