const ParolaEl = document.getElementById("parola");
const CopyEl = document.getElementById("copy");
const LenEl = document.getElementById("len");
const UpperEl = document.getElementById("upper");
const LowerEl = document.getElementById("lower");
const NumberEl = document.getElementById("number");
const SimbolEl = document.getElementById("simbol");
const GenEl = document.getElementById("gen");
const copyText = document.getElementById("myInput");

const UpperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const Symbols = "!@#$%^&*()_+={}";

function getUppercase() {
  return UpperLetters[Math.floor(Math.random() * UpperLetters.length)];
}
function getLowercase() {
  return LowerCaseLetters[Math.floor(Math.random() * LowerCaseLetters.length)];
}
function getNumber() {
  return Numbers[Math.floor(Math.random() * Numbers.length)];
}
function getSymbol() {
  return Symbols[Math.floor(Math.random() * Symbols.length)];
}

function GeneratePassword() {
  const len = LenEl.value;

  let password = "";
  for (let i = 1; i <= len; ++i) {
    const y = GenerateY();
    password += y;
  }
  ParolaEl.innerText = password;
}
function GenerateY() {
  const ys = [];
  if (UpperEl.checked) {
    ys.push(getUppercase());
  }
  if (LowerEl.checked) {
    ys.push(getLowercase());
  }
  if (NumberEl.checked) {
    ys.push(getNumber());
  }
  if (SimbolEl.checked) {
    ys.push(getSymbol());
  }
  if (ys.length === 0) return "";

  return ys[Math.floor(Math.random() * ys.length)];
}

GenEl.addEventListener("click", GeneratePassword);

function myFunction() {
  navigator.clipboard.writeText(ParolaEl.innerText);

  alert("Copied the text: " + ParolaEl.innerText);
}
CopyEl.addEventListener("click", myFunction);
