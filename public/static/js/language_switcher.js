const englishContent = document.getElementById('english-content');
const chineseContent = document.getElementById('chinese-content');
const languageSwitcher = document.getElementById('language-switcher');

function switchLanguage(language) {
  if (language === 'english') {
    englishContent.style.display = 'block';
    chineseContent.style.display = 'none';
    languageSwitcher.textContent = 'Switch to Chinese';
  } else if (language === 'chinese') {
    englishContent.style.display = 'none';
    chineseContent.style.display = 'block';
    languageSwitcher.textContent = 'Switch to English';
  }
}

// Optional: Detecting the user's preferred language
// You can use navigator.language or navigator.languages to find this.
// If you want to allow a default language, you can set a default here.

// Initial language setting (default English)
switchLanguage('english');

languageSwitcher.addEventListener('click', () => {
  const currentLanguage = languageSwitcher.textContent.toLowerCase();
  const newLanguage = currentLanguage.includes('english') ? 'chinese' : 'english';
  switchLanguage(newLanguage);
});