// Dark Mode System
const themeToggle = document.getElementById('themeToggle');
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');

function isDark() {
  return document.documentElement.classList.contains('dark');
}

function updateTheme() {
  const darkMode = isDark();
  moonIcon.classList.toggle('hidden', darkMode);
  sunIcon.classList.toggle('hidden', !darkMode);
  document.body.clientWidth;
}

function setTheme(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    document.documentElement.style.setProperty('color-scheme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.style.setProperty('color-scheme', 'light');
    localStorage.setItem('theme', 'light');
  }
  updateTheme();
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;
  setTheme(shouldBeDark);
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches);
    }
  });
}

document.addEventListener('DOMContentLoaded', initTheme);
themeToggle.addEventListener('click', () => setTheme(!isDark()));




// ========================
// Phone Number Lookup Code
// ========================

let inpt = document.getElementById("phoneInput");
let btn = document.getElementById("btn");
let terminal = document.querySelector(".terminal");
let result = document.getElementById("result");
let secretCodeInput = document.getElementById("secretCode"); // new input
let codeError = document.getElementById("codeError");

btn.addEventListener("click", () => {
  const enteredCode = secretCodeInput.value.trim();
  const correctCode = "piyushbhaiop";

  if (enteredCode !== correctCode) {
    codeError.classList.remove("hidden");
    result.innerText = "";
    terminal.style.display = "none";
    return;
  }

  // If code is correct
  codeError.classList.add("hidden");
  terminal.style.display = "inline-block";

  let newvalue = Number(inpt.value);

  if (!isNaN(newvalue) && typeof newvalue === "number") {
    result.innerText = "🌀 Data nikal raha hoon bhai ruk ja...";
    let url = `https://glonova.in/ia/kak.php/?num=${newvalue}`;

    async function data() {
      try {
        let res1 = await fetch(url);
        let res2 = await res1.json();
        console.log(res2);
        result.innerText = JSON.stringify(res2, null, 2);
      } catch (e) {
        console.log(e);
        result.innerText = "⚠️ Arey bhai, kuch to gadbad ho gayi!";
      }
    }

    data();

  } else {
    result.innerText = `😡 TU THODA SA BH*N KA L*DA HAI kYA ...THEEK SE NUMBER DAAL`;
  }
});
