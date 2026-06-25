const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.8;

ctx.lineWidth = 3;
ctx.lineCap = "round";

let drawing = false;

canvas.addEventListener("pointerdown", e => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("pointermove", e => {
    if (!drawing) return;

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
});

canvas.addEventListener("pointerup", () => {
    drawing = false;
});
localStorage.setItem(
    "note",
    canvas.toDataURL()
);