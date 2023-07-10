const loginEl = document.querySelector("#login");
const registerEl = document.getElementById("register");
const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];
const loginForm = document.getElementById("loginForm");

loginEl.addEventListener("click", function() {
  modal.style.display = "block";
});

registerEl.addEventListener("click", function() {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

