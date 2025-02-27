chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return { cancel: true };
    },
    { urls: ["*://*.roblox.com/*", "*://*.fortnite.com/*", "*://*.steampowered.com/*"] },
    ["blocking"]
    
);
chrome.runtime.setUninstallURL("uninstall.html");

let blockedSites = [];

// Load blocked sites from JSON file
fetch(chrome.runtime.getURL("blocked_sites.json"))
    .then(response => response.json())
    .then(data => blockedSites = data.blockedSites)
    .catch(error => console.error("Error loading blocked sites:", error));

// Intercept web requests and block if the site is in the list
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        let url = new URL(details.url);
        if (blockedSites.includes(url.hostname.replace("www.", ""))) {
            return { redirectUrl: chrome.runtime.getURL("blocked.html") };
        }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
);

chrome.runtime.setUninstallURL(chrome.runtime.getURL("uninstall.html"));

