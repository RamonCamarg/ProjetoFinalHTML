document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.querySelector("form");
    loginForm.addEventListener("submit", function(Comprar) {
      event.preventDefault(); 
      window.location.href = "ConfirmacaoIngressos.html";
    });
  });
  