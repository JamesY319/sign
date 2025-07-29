const translations = {
  zh: {
    title: "請選擇功能",
    button1: "簽名並下載透明圖",
    button2: "上傳圖片並加入簽名"
  },
  en: {
    title: "Choose a Function",
    button1: "Create Signature",
    button2: "Upload JPG with Signature"
  }
};

function setLanguage(lang) {
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("button1").innerText = translations[lang].button1;
  document.getElementById("button2").innerText = translations[lang].button2;
}

document.getElementById("langSelector").addEventListener("change", function () {
  setLanguage(this.value);
});

// 預設語言
setLanguage("zh");

document.addEventListener("DOMContentLoaded", function () {
  // 綁定所有含有 data-route 的按鈕點擊事件
  const buttons = document.querySelectorAll('button[data-route]');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-route');
      window.location.href = target;
    });
  });
});

