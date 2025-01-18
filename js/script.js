let $ = document
// Variabels
let body = _class("body")
let contextMenu = _class("context-menu")
// Functions 
function _tagName(tagName) {
    return $.querySelector(tagName)
}
function _class(className) {
    return $.querySelector("." + className)
}
function keyBordHandler() {
    contextMenu.setAttribute("style", "display: none;")
}
function contextMenuHandler() {
    event.preventDefault()
    contextMenu.setAttribute("style", "display: block; left: " + event.pageX + "px; top: " + event.pageY + "px;")   
}
// Site Codes
body.addEventListener("click", keyBordHandler)
body.addEventListener("keydown", keyBordHandler)
body.addEventListener("contextmenu", contextMenuHandler)
