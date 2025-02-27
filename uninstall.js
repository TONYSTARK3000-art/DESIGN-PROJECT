document.getElementById("confirmUninstall").addEventListener("click", function() {
    let enteredPassword = document.getElementById("verifyPassword").value;

    chrome.storage.local.get("userPassword", function(data) {
        if (enteredPassword === data.userPassword) {
            alert("Password verified! You can uninstall now.");
        } else {
            alert("Incorrect password! You cannot uninstall.");
        }
    });
});
