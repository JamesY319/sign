const translations = {
  zh: {
    "index-title": "請選擇功能",
    "index-sign-btn": "製作電子簽名",
    "index-jpg-btn": "圖片上簽名",

    "sign-title":"製作電子簽名",
    "sign-save-btn":"下載",

    "jpg-title":"上傳圖片並簽名",
    "jpg-next":"前往調整位置與大小",

    "jpg-adjust-title":"調整位置與大小",
    "jpg-adjust-save":"下載",

    "clear-btn":"清除",
    "undo-btn":"復原",

    "img-upload-btn": {default: "上傳圖片",done: "✔ 完成"}
    
  },
  en: {
    "index-title": "Choose a Function",
    "index-sign-btn": "Create Signature",
    "index-jpg-btn": "Upload Image and Sign",

    "sign-title":"Create Signature",
    "sign-save-btn":"Download",

    "jpg-title": "Upload Image and Sign",
    "jpg-next": "Adjust Position and Size",

    "jpg-adjust-title": "Position and Size",
    "jpg-adjust-save": "Download",

    "clear-btn":"Clear",
    "undo-btn":"Undo",

    "img-upload-btn": {default: "Upload Image",done: "✔ Uploaded"}

  }
};

//查字典
export function setLanguage(lang) {
  const translation = translations[lang];
  if (!translation) return;

  // ✅ 處理新版（使用 data-i18n-key + data-i18n-state）
  const i18nElements = document.querySelectorAll("[data-i18n-key]");
  i18nElements.forEach((el) => {
    const key = el.getAttribute("data-i18n-key");
    const state = el.getAttribute("data-i18n-state") || "default";
    const translatedText = translation[key];

    if (typeof translatedText === "string") {
      el.innerText = translatedText; // 若是單純文字
    } else if (typeof translatedText === "object" && translatedText[state]) {
      el.innerText = translatedText[state]; // 狀態對應文字
    }
  });

  // ✅ 處理舊版（根據 id 對應 key）
  for (const key in translation) {
    const value = translation[key];

    // 如果不是物件，代表這是舊版的單一文字（不是帶狀態的）
    if (typeof value === "string") {
      const el = document.getElementById(key);
      if (el) el.innerText = value;
    }
  }
}

//監聽功能
document.addEventListener("DOMContentLoaded", function () {
  const languageSelect = document.getElementById("preferredLanguage");
  const savedLang = localStorage.getItem("selectedLanguage") || "en"; // 預設英文

  // 選單的初始值
  if (languageSelect) {
    languageSelect.value = savedLang;

    // 監聽使用者改變語言
    languageSelect.addEventListener("change", function () {
      const selectedValue = this.value;
      localStorage.setItem("selectedLanguage", selectedValue);
      setLanguage(selectedValue); // 套用語言
    });
  }

  //按鍵狀態改變
  const jpgUploadInput = document.getElementById('jpg-upload');

  if (jpgUploadInput) {
    jpgUploadInput.addEventListener('change', function () {
      const uploadButton = document.getElementById('img-upload-btn');

      if (this.files.length > 0) {
        uploadButton.setAttribute('data-i18n-state', 'done');
        setLanguage(localStorage.getItem("selectedLanguage") || "en");
        uploadButton.style.backgroundColor = '#4CAF50';
      } else {
        uploadButton.setAttribute('data-i18n-state', 'default');
        setLanguage(localStorage.getItem("selectedLanguage") || "en");
      }
    });
  }

  // 不管有沒有選單，都套用語言
  setLanguage(savedLang);
});


