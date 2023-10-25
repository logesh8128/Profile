function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "user" && password === "password") {
        alert("Login successful! Welcome, " + username + "!");
    } else {
        document.getElementById("error-message").textContent = "Incorrect username or password. Please try again.";
    }
}
