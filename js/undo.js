export function UndoCanvas(canvas, context) {
    const history = [];

    function saveState() {
    history.push(canvas.toDataURL());
    console.log("history length:", history.length);
    if (history.length > 10) history.shift();
    }


    function undo() {
        if (history.length === 0) return;

        history.pop();
        const last = history[history.length - 1];

        if (!last) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            return;
        }

        const img = new Image();
        img.onload = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, 0, 0);
        };
        img.src = last;
    }

    return { 
        saveState, 
        undo
    };
}
