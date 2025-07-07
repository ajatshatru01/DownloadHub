function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (email === "" || password === "") {
      document.getElementById("login-error").textContent = "All fields required.";
      return;
    }
  
    localStorage.setItem("user", JSON.stringify({ email }));
    window.location.href = "index.html";
  }
  
  function checkLogin() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      window.location.href = "login.html";
    }
  }
  
  function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
  }
  
