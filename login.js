document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  if (email) {
    localStorage.setItem("usuarioEmail", email);
    window.location.href = "forum.html";
  }
});
