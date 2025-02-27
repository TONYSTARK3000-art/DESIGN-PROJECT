document.getElementById("saveAccount").addEventListener("click", function() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password) {
        chrome.storage.local.set({ 
            userAccount: { username: username, password: password }
        }, function() {
            alert("Account saved!");
            window.location.href = "popup.html"; // Redirects back to the main page
        });
    } else {
        alert("Please fill in all fields.");
    }
});