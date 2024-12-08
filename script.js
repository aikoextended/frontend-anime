function routeToContentRegister() {
  // Redirect to the content register page
  window.location.href = './content/index.html';
}

function routeToContentLogin() {
  // Redirect to the content login page
  window.location.href = './content/index.html';
}

// Switch between login and register views
document.getElementById("switch-to-login").addEventListener("click", () => {
  document.getElementById("register").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
});

document.getElementById("switch-to-register").addEventListener("click", () => {
  document.getElementById("login").classList.add("hidden");
  document.getElementById("register").classList.remove("hidden");
});
