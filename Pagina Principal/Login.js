document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.querySelector("form");
    loginForm.addEventListener("submit", function(Login) {
      event.preventDefault(); 
      window.location.href = "paginaPrincipal.html";
    });
  });
  