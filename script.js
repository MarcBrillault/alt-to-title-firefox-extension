function updateAltTags() {
    let imgs = document.getElementsByTagName('img')

    for(var i = 0; i < imgs.length; i++) {
        let alt = imgs[i].getAttribute('alt')
        if (alt != "") {
            imgs[i].setAttribute('title', alt)
        }
    }
}

updateAltTags()

let observer = new MutationObserver(mutations => {
    updateAltTags()
});
observer.observe(document, { childList: true, subtree: true });