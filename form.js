"use strict";

const f = document.querySelector(".form");

f.addEventListener("input", () => {
  const nameInput = f.querySelector("#name-input");
  const charCounter = f.querySelector("#char-counter");

  charCounter.textContent = `${nameInput.value.length}/24`; 

  if (nameInput.value.length === 24) {
    alert("Too many characters!");
    return;
  }

  if (/[A-Z]/.test(nameInput.value)) {
    alert("Only lowercase letters!");
    nameInput.value = nameInput.value.replace(/[A-Z]/g, "");
    charCounter.textContent = `${nameInput.value.length}/24`;
  }

});

f.addEventListener("click", (e) => {
  e.preventDefault();

  const butt = f.querySelector("#submit-button");

  butt.addEventListener("click", () => {
    const nameInput = f.querySelector("#name-input");
    const charCounter = f.querySelector("#char-counter");
    const resultField = f.querySelector("#result-field");

    if (nameInput.value.length > 0) {
      resultField.textContent = `Hello, ${nameInput.value}!`;
      nameInput.value = "";
      charCounter.textContent = `${nameInput.value.length}/24`;
    } else {
      resultField.textContent = "Please enter a valid name.";
    }
  });
});