let lastUrl = window.location.href
onUrlChange(lastUrl)

new MutationObserver(() => {
  const url = window.location.href
  if (url !== lastUrl) {
    lastUrl = url
    onUrlChange(url)
  }
}).observe(document, {subtree: true, childList: true})

function onUrlChange(url) { 
}