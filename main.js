let lastUrl = window.location.href
onUrlChange(lastUrl)

new MutationObserver(() => {
    // This observer will check for changes in the document and call function onUrlChange when the page url changes
    const url = window.location.href
    if (url !== lastUrl) {
        lastUrl = url
        onUrlChange(url)
    }
}).observe(document, {subtree: true, childList: true})

function onUrlChange(url) {
    // Creating a GET request to see if the reddit page contains a video
    const req = new XMLHttpRequest()
    req.responseType = 'json';
    req.open("GET", url+'.json')
    req.send()
    req.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log("Got page json data")
            try {
            const video = this.response[0].data.children[0].data.secure_media.reddit_video.fallback_url
            console.log(video)
            } catch {
            console.log("No videos here")
            }
            
        }
    }
}