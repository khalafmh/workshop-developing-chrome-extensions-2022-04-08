const checkbox = document.getElementById("activated")

chrome.storage.sync.get(["activated"], function(options) {
    if (options.activated) {
        checkbox.checked = true
    }
})

checkbox.addEventListener("change", function(event) {
    chrome.storage.sync.set({activated: event.target.checked})
})