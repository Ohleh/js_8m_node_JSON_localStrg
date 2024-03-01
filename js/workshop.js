const form = document.querySelector(".feedback-form");

form.elements.message.value = localStorage.getItem("input") ?? "";
console.log(localStorage.getItem("input"));
form.addEventListener("input", onInput);

function onInput(e) {
  //   e.preventDefault();
  console.log(e.target.value);
  localStorage.setItem("input", e.target.value);
}
