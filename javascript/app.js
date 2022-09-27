const canvas1 = document.querySelector(".canvas1");
const canvas2 = document.querySelector(".canvas2");
const canvas = document.querySelector(".canvas");
const ctx1 = canvas1.getContext("2d");
const ctx2 = canvas2.getContext("2d");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector(".line-width");
const color = document.querySelector(".color");
const colorPick = Array.from(document.querySelectorAll(".color-pick"));
const modeBtn = document.querySelector(".mode-btn");

canvas1.width = 800;
canvas1.height = 800;

ctx1.rect(100, 100, 300, 100);
ctx1.rect(100, 230, 100, 300);
ctx1.rect(230, 330, 500, 47);
ctx1.fill();
ctx1.fillStyle = "black";

ctx1.beginPath();

ctx1.rect(280, 260, 100, 400);
ctx1.fillStyle = "tomato";
ctx1.fill();

ctx1.beginPath();

ctx1.rect(430, 100, 40, 610);
ctx1.rect(490, 670, 240, 40);
ctx1.fillStyle = "seagreen";
ctx1.fill();
ctx1.beginPath();

ctx1.moveTo(720, 100);
ctx1.lineTo(640, 150);
ctx1.lineTo(720, 200);
ctx1.lineTo(720, 100);
ctx1.fillStyle = "black";
ctx1.fill();

ctx1.beginPath();

ctx1.fillRect(100, 670, 100, 50);
ctx1.fillRect(170, 725, 100, 50);
ctx1.fillStyle = "tomato";
ctx1.fillRect(480, 390, 40, 80);
ctx1.moveTo(490, 660);
ctx1.lineTo(530, 610);
ctx1.lineTo(570, 660);
ctx1.lineTo(490, 660);
ctx1.fillStyle = "black";
ctx1.fill();

// -------------------------------------------------------------------------

canvas2.width = 800;
canvas2.height = 800;

ctx2.fillRect(80, 150, 70, 550);
ctx2.fillRect(170, 375, 35, 325);
ctx2.fillRect(170 + 35 + 15, 425, 22, 275);
ctx2.fillRect(250, 460, 17, 240);
ctx2.fillRect(280, 410, 30, 290);
ctx2.fillRect(320, 300, 20, 400);
ctx2.fillRect(360, 500, 35, 200);
ctx2.fillRect(400, 450, 25, 250);
ctx2.fillRect(440, 360, 40, 340);

ctx2.beginPath();
ctx2.arc(500 + 150, 550 - 350, 100, 0, 2 * Math.PI);
ctx2.fillStyle = "seagreen";
ctx2.fill();

ctx2.beginPath();
ctx2.arc(530 + 150, 550 - 350, 85, 0, 2 * Math.PI);
ctx2.fillStyle = "white";
ctx2.fill();

// -------------------------------------------------------------------------

canvas.width = 600;
canvas.height = 600;
ctx.linewidth = lineWidth.value;

const colors = [
  "#E6B0AA",
  "#B03A2E",
  "#AF7AC5",
  "#A9CCE3",
  "#1B4F72",
  "#117864",
  "#D0ECE7",
  "#D4EFDF",
  "#F7DC6F",
  "#FAD7A0",
  "#F0B27A",
  "#D0D3D4",
  "#95A5A6",
  "##34495E",
];

let isPainting = false;
let isFilling = false;

function handleMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (isPainting === true) {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
  //   ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function startPainting() {
  isPainting = true;
}

function stopPainting() {
  isPainting = false;
}

function lineWidthChange() {
  ctx.lineWidth = lineWidth.value;
}

function handleColorChange(event) {
  const colorValue = color.value;
  ctx.strokeStyle = `${colorValue}`;
  ctx.fillStyle = `${colorValue}`;
}

function handleColorPickClick(event) {
  const pickedColor = event.target.dataset.color;
  ctx.strokeStyle = `${pickedColor}`;
  ctx.fillStyle = `${pickedColor}`;
  color.value = pickedColor;
}
function handleModeBtnClick(event) {
  if (isFilling) {
    isFilling = false;
    event.target.innerText = "Draw Mode";
  } else {
    isFilling = true;
    event.target.innerText = "Fill Mode";
  }
}

function handleCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, 600, 600);
  }
}

canvas.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);

lineWidth.addEventListener("change", lineWidthChange);
color.addEventListener("change", handleColorChange);
colorPick.forEach((item) =>
  item.addEventListener("click", handleColorPickClick)
);
modeBtn.addEventListener("click", handleModeBtnClick);
canvas.addEventListener("click", handleCanvasClick);
