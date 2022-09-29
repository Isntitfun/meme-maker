const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const lineWidth = document.querySelector(".line-width");
const color = document.querySelector(".color");
const colorPick = Array.from(document.querySelectorAll(".color-pick"));
const modeBtn = document.querySelector(".mode-btn");
const resetBtn = document.querySelector(".reset-btn");
const eraserBtn = document.querySelector(".eraser-btn");
const fileInput = document.querySelector(".file");
const textInput = document.querySelector(".text");
const downloadBtn = document.querySelector(".download");

const CANVAS_HEIGHT = 600;
const CANVAS_WIDTH = 600;

canvas.width = 600;
canvas.height = 600;
ctx.linewidth = lineWidth.value;
ctx.linecap = "round";

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
  const drawMode = event.target.querySelector("i:first-child");
  const fillMode = event.target.querySelector("i:last-child");
  console.log(event.target);
  console.log(drawMode);
  console.log(fillMode);
  if (isFilling) {
    isFilling = false;
    fillMode.style.opacity = "0";
    drawMode.style.opacity = "1";
  } else {
    isFilling = true;
    drawMode.style.opacity = "0";
    fillMode.style.opacity = "1";
  }
}

function handleCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, 600, 600);
  }
}

function handleResetBtnClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 600, 600);
}

function handleEraserBtnClick() {
  isFilling = false;
  modeBtn.innerText = "Draw Mode";
  ctx.strokeStyle = "white";
}

function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = document.createElement("img");
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_HEIGHT, CANVAS_WIDTH);
    fileInput.value = null;
  };
}

// function onFileChange(event) {
//   const file = event.target.files[0];
//   const url = URL.createObjectURL(file);
//   const image = new Image();
//   image.src = url;
//   image.onload = function () {
//     ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//     fileInput.value = null;
//   };
// }

// function onFileChange(event) {
//   const file = event.target.files[0];
//   const url = URL.createObjectURL(file);
//   const image = new Image();
//   image.src = url;
//   ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//   file.value = null;
// }

function handleCanvasDbclick(event) {
  const text = textInput.value;
  const x = event.offsetX;
  const y = event.offsetY;
  if (text !== null) {
    ctx.save();
    ctx.linewidth = 1;
    ctx.font = "30px arial";
    ctx.fillText(text, x, y);
    ctx.restore();
  }
}

function handleDownloadBtnClick(event) {
  const url = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = url;
  link.download = "New Drawing";
  link.click();
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
resetBtn.addEventListener("click", handleResetBtnClick);
eraserBtn.addEventListener("click", handleEraserBtnClick);
fileInput.addEventListener("change", onFileChange);
canvas.addEventListener("dblclick", handleCanvasDbclick);
downloadBtn.addEventListener("click", handleDownloadBtnClick);
