export function initSignaturePad(canvasId, undoHandler) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');

    canvas.width = 600;
    canvas.height = 180;

    context.lineWidth = 2;
    context.lineCap = 'round';
    context.strokeStyle = '#000';

    canvas.addEventListener("dragstart", function (e) { // 阻止預設拖曳行為
    e.preventDefault(); 
    });

    let drawing = false;

    canvas.addEventListener('mousedown', e => {
    drawing = true;
    context.beginPath();
    context.moveTo(e.offsetX, e.offsetY);
    });

    canvas.addEventListener('mousemove', e => {
    if (drawing) {
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
    }
    });

    window.addEventListener('mouseup', () => {
    if (drawing) {
        drawing = false;
        undoHandler.saveState(canvas, context);
    }
    });

    canvas.addEventListener('mouseleave', () => {
    if (drawing) {
        drawing = false;
        context.closePath();
        undoHandler.saveState(canvas, context);
    }
    });

    canvas.addEventListener('touchstart', e => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    context.beginPath();
    context.moveTo(touch.clientX - rect.left, touch.clientY - rect.top);
    drawing = true;
    });

    canvas.addEventListener('touchmove', e => {
    e.preventDefault();
    if (!drawing) return;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    context.lineTo(touch.clientX - rect.left, touch.clientY - rect.top);
    context.stroke();
    });

    window.addEventListener('touchend', () => {
    if (drawing) {
        drawing = false;
        undoHandler.saveState(canvas, context);
    }
    });

    return { canvas, context };
}