// Dark Mode System
const themeToggle = document.getElementById('themeToggle');
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');

// Enhanced theme check
function isDark() {
  return document.documentElement.classList.contains('dark');
}

// Update all UI elements
function updateTheme() {
  const darkMode = isDark();

  // Update icons
  moonIcon.classList.toggle('hidden', darkMode);
  sunIcon.classList.toggle('hidden', !darkMode);

  // Force repaint for smoother transition
  document.body.clientWidth;
}

// Set theme with all necessary changes
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

// Initialize theme properly
function initTheme() {
  // Check different theme sources
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Default to dark if no preference exists
  const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;

  setTheme(shouldBeDark);

  // Watch for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches);
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initTheme);

// Toggle on button click
themeToggle.addEventListener('click', () => setTheme(!isDark()));








let inpt = document.getElementById("phoneInput")
let btn = document.getElementById("btn")
let terminal = document.querySelector(".terminal")
let result = document.getElementById("result")

btn.addEventListener("click", () => {
  terminal.style.display = "inline-block"

  let newvalue = Number(inpt.value)

  if (!isNaN(newvalue) && typeof newvalue === "number") {
    // Show loading message
    result.innerText = "🌀 Data nikal raha hoon bhai ruk ja...";

    let url = `https://glonova.in/ia/kak.php/?num=${newvalue}`

    async function data() {
      try {
        let res1 = await fetch(url);
        let res2 = await res1.json();

        console.log(res2)

        // Show result after fetch
        result.innerText = JSON.stringify(res2, null, 2);
      } catch (e) {
        console.log(e)
        result.innerText = "⚠️ Arey bhai, kuch to gadbad ho gayi!";
      }
    }

    data()

  } else {
    result.innerText = `😡 TU THODA SA BH*N KA L*DA HAI kYA ...THEEK SE NUMBER DAAL`
  }
})





















