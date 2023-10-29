// Verifies that the passwords match and are at least 8 characters.
function verify() {
    let firstPassword = document.getElementById("first");
    let secondPassword = document.getElementById("second");
    let success = document.getElementById("success");

    success.textContent = "";
    if (firstPassword.value != secondPassword.value) {
        alert("Passwords do not match!");
        return;
    } else if (firstPassword.value.length < 8 || secondPassword.value.length < 8) {
        alert("Password must be at least 8 characters!");
        return;
    }

    success.textContent = "Passwords match!"
    success.style.color = "DarkGreen";
}