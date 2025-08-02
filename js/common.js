//按鍵連結
const buttons = document.querySelectorAll('button[data-route]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-route');
    window.location.href = target;
    });
});

/* 按鈕顏色 */
document.querySelectorAll('.button[data-color]').forEach(button => {
  const color = button.getAttribute('data-color');
  button.style.setProperty('--btn-color', color);
});

/* 標籤顏色 */
document.querySelectorAll('.label[data-color]').forEach(button => {
  const color = button.getAttribute('data-color');
  button.style.setProperty('--lab-color', color);
});