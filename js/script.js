/*===========================================sign area==============================*/
const canvas = document.getElementById("signature-pad");
const ctx = canvas.getContext("2d");
let drawing = false;

// Set canvas background to white
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);
canvas.addEventListener("mousemove", draw);

// For touch devices
canvas.addEventListener("touchstart", handleTouchStart);
canvas.addEventListener("touchend", handleTouchEnd);
canvas.addEventListener("touchmove", handleTouchMove);

function startDrawing(e) {
    drawing = true;
    draw(e);
}

function stopDrawing() {
    drawing = false;
    ctx.beginPath();
}

function draw(e) {
    if (!drawing) return;
    
    // Get mouse position
    let mouseX, mouseY;
    if (e.type === 'mousemove') {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    } else if (e.type === 'touchmove') {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.touches[0].clientX - rect.left;
        mouseY = e.touches[0].clientY - rect.top;
    }
    
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(mouseX, mouseY);
}

// Touch handlers
function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = {
        offsetX: touch.clientX - canvas.getBoundingClientRect().left,
        offsetY: touch.clientY - canvas.getBoundingClientRect().top
    };
    startDrawing(mouseEvent);
}

function handleTouchEnd(e) {
    e.preventDefault();
    stopDrawing();
}

function handleTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = {
        offsetX: touch.clientX - canvas.getBoundingClientRect().left,
        offsetY: touch.clientY - canvas.getBoundingClientRect().top,
        type: 'touchmove'
    };
    draw(mouseEvent);
}

document.getElementById("clear-button").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Reset background to white
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
});
/*===========================================sign area==============================*/