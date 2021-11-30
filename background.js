var videoOptions = {}
var origin

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.url !== undefined && request.url !== "") {
        videoOptions = {
            url: request.url,
            method: "GET",
            filename: request.file ? request.file : "video.mp4",
          }
        origin = request.origin
    }
})