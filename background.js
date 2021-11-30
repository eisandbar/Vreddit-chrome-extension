var videoOptions = {} // The data needed to download the video
var origin // Making sure that we are downloading from the same page where the video is located

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

var contextMenuItem = {
    "id": "videoDownload",
    "title": "Download vreddit video",
    "contexts": ["all"] // Can't use video as reddit videos hide behind a div == aren't clickable
}

chrome.contextMenus.create(contextMenuItem)

chrome.contextMenus.onClicked.addListener(function (OnClickData) {
    if (videoOptions.url !== undefined && videoOptions.url !== "" && OnClickData.pageUrl == origin) {
        chrome.downloads.download(
            options=videoOptions
        )
    }
})