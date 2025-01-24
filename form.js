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
  }

});

f.addEventListener("click", () => {
  const butt = f.querySelector("#submit-button");

  butt.addEventListener("click", () => {
    const nameInput = f.querySelector("#name-input");
    const charCounter = f.querySelector("#char-counter");

    if (nameInput.value.length < 24 || nameInput.value.length === 24) {
      alert(`Hello ${nameInput.value}`);
      nameInput.value = "";
      charCounter.textContent = `${nameInput.value.length}/24`;
    } 
  });
});