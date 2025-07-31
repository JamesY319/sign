// 語言
const translations = {
  zh: {
    "index-title": "請選擇功能",
    "index-sign-btn": "簽名並下載透明圖",
    "index-jpg-btn": "上傳圖片並加入簽名",

    "sign-title":"請簽名",
    "sign-clear-btn":"清除",
    "sign-undo-btn":"上一步",
    "sign-save-btn":"下載",

    "jpg-title":"上傳圖片並簽名",
    "jpg-upload":"上傳圖片",
    "jpg-next":"完成，前往調整簽名",
    "jpg-clear":"清除",

    "jpg-adjust-title":"調整簽名位置與大小",
    "jpg-adjust-save":"下載"
    
  },
  en: {
    "index-title": "Choose a Function",
    "index-sign-btn": "Create Signature",
    "index-jpg-btn": "Upload JPG and Sign",

    "sign-title":"Please Sign",
    "sign-clear-btn":"Clear",
    "sign-undo-btn":"Undo",
    "sign-save-btn":"Download",

    "jpg-title": "Upload Image and Sign",
    "jpg-upload": "Upload Image",
    "jpg-next": "Done, Adjust Signature",
    "jpg-clear": "Clear",

    "jpg-adjust-title": "Position and Size",
    "jpg-adjust-save": "Download"

  }
};

function setLanguage(lang) {
  const translation = translations[lang];
  if (!translation) return;

  for (const key in translation) {
    const el = document.getElementById(key);
    if (el) el.innerText = translation[key];
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem("preferredLanguage") || "zh";
  setLanguage(savedLang);

  const langSelector = document.getElementById("preferredLanguage");

  if (langSelector) {
    langSelector.value = savedLang; 
    langSelector.addEventListener("change", function () {
      const newLang = this.value;
      localStorage.setItem("preferredLanguage", newLang);
      setLanguage(newLang);
    });
  }
});



//按鍵連結
const buttons = document.querySelectorAll('button[data-route]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-route');
    window.location.href = target;
    });
});

//畫布


//清除




/* 按鈕顏色 */
document.querySelectorAll('.button[data-color]').forEach(button => {
  const color = button.getAttribute('data-color');
  button.style.setProperty('--btn-color', color);
});