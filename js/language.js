export const translations = {
  zh: {
    "index-title": "請選擇功能",
    "index-sign-btn": "簽名並下載透明圖",
    "index-jpg-btn": "上傳圖片並加入簽名",

    "sign-title":"請簽名",
    "sign-save-btn":"下載",

    "jpg-title":"上傳圖片並簽名",
    "jpg-upload":"上傳圖片",
    "jpg-next":"完成，前往調整簽名",

    "jpg-adjust-title":"調整簽名位置與大小",
    "jpg-adjust-save":"下載",

    "clear-btn":"清除",
    "undo-btn":"上一步"
    
  },
  en: {
    "index-title": "Choose a Function",
    "index-sign-btn": "Create Signature",
    "index-jpg-btn": "Upload JPG and Sign",

    "sign-title":"Please Sign",
    "sign-save-btn":"Download",

    "jpg-title": "Upload Image and Sign",
    "jpg-upload": "Upload Image",
    "jpg-next": "Done, Adjust Signature",

    "jpg-adjust-title": "Position and Size",
    "jpg-adjust-save": "Download",

    "clear-btn":"Clear",
    "undo-btn":"Undo"

  }
};

export function setLanguage(lang) {
  const translation = translations[lang];
  if (!translation) return;

  for (const key in translation) {
    const el = document.getElementById(key);
    if (el) el.innerText = translation[key];
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const languageSelect = document.getElementById("preferredLanguage");
  const savedLang = localStorage.getItem("selectedLanguage") || "en"; // 預設為中文

  // 如果下拉選單存在，設定選單的初始值
  if (languageSelect) {
    languageSelect.value = savedLang; // 把選單選項設為已儲存值

    // 監聽使用者改變語言
    languageSelect.addEventListener("change", function () {
      const selectedValue = this.value;
      localStorage.setItem("selectedLanguage", selectedValue);
      setLanguage(selectedValue); // 套用語言（你已經寫好的功能）
    });
  }

  // 不管有沒有選單，都套用語言
  setLanguage(savedLang);
});



