import { ClearCanvas } from './clear.js';
import { UndoCanvas } from './undo.js';
import { setLanguage } from './language.js';
import { initSignaturePad } from './signaturePad.js'

const clearBtn = document.getElementById('clear-btn');
const undoBtn = document.getElementById('undo-btn');
const canvas = document.getElementById('signature-Pad');
const context = canvas.getContext('2d');
const undoHandler = UndoCanvas(canvas, context);

// 清除
clearBtn.addEventListener('click', () => {
  ClearCanvas(canvas,context); 
});
//clearBtn.addEventListener('click', (ClearCanvas(canvas, context))); 這會馬上執行，上面才是點擊後執行

//上一步
undoBtn.addEventListener('click', () => {
  undoHandler.undo(canvas, context); 
});

//畫布
document.addEventListener('DOMContentLoaded', () => {
  initSignaturePad('signature-Pad', undoHandler);
});



