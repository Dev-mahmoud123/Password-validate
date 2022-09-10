/// display password text or no
let passwrd = document.getElementById("passwrd");
let toggleBtn = document.getElementById("toggleBtn");

toggleBtn.onclick = function () {
  if (passwrd.type === "password") {
    passwrd.setAttribute("type", "text");
    toggleBtn.classList.add("hide");
  } else {
    passwrd.setAttribute("type", "password");
    toggleBtn.classList.remove("hide");
  }
};

/// ckeck valid password
let lowerCase = document.getElementById("lower");
let upperCase = document.getElementById("upper");
let speicalChar = document.getElementById("special");
let digit = document.getElementById("number");
let lengthPass = document.getElementById("length");

function checkPassword(data) {
  const lower = new RegExp("(?=.*[a-z])");
  const upper = new RegExp("(?=.*[A-Z])");
  let speical = new RegExp("(?=.*[!@#$^&*])");
  let number = new RegExp("(?=.*[0-9])");
  let length = new RegExp("(?=.{8,})");

  ///  check lower characters
  if (lower.test(data)) {
    lowerCase.classList.add("valid");
  } else {
    lowerCase.classList.remove("valid");
  }
  // check upper characters
  if (upper.test(data)) {
    upperCase.classList.add("valid");
  } else {
    upperCase.classList.remove("valid");
  }
  // check special characters
  if (speical.test(data)) {
    speicalChar.classList.add("valid");
  } else {
    speicalChar.classList.remove("valid");
  }
  // chekc numbers
  if (number.test(data)) {
    digit.classList.add("valid");
  } else {
    digit.classList.remove("valid");
  }
  // check length of password
  if (length.test(data)) {
    lengthPass.classList.add("valid");
  } else {
    lengthPass.classList.remove("valid");
  }
}

passwrd.onkeyup = function () {
  checkPassword(passwrd.value);
};
