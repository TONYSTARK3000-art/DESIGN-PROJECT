document.getElementById("toggleBlock").addEventListener("click", function() {
    chrome.storage.local.get(["blockEnabled"], function(result) {
        let newStatus = !result.blockEnabled;
        chrome.storage.local.set({ blockEnabled: newStatus });
        alert("Blocking is now " + (newStatus ? "ENABLED" : "DISABLED"));
    });
});
