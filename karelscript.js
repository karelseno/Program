const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Sample credentials
      if (username === "admin" && password === "123") {
        window.location.href = "main.html"; // dito pupunta
      } else {
        errorMessage.textContent = "Incorrect username or password.";
      }
    });