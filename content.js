const element = document.querySelector('img[alt="Google"]')

chrome.storage.sync.get(["activated"], function(options) {
    if (options.activated) {
        element.outerHTML = `
            <h1>Mahdi Search</h1>
        `
    }
})