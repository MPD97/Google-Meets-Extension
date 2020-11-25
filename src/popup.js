

document.getElementById("mixBtn").onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "alert.js"});
});