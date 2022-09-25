const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.rect(100, 100, 300, 100);
ctx.rect(100, 230, 100, 300);
ctx.rect(230, 330, 500, 47);
ctx.fill();
ctx.fillStyle = "black";

ctx.beginPath();

ctx.rect(280, 260, 100, 400);
ctx.fillStyle = "tomato";
ctx.fill();

ctx.beginPath();

ctx.rect(430, 100, 40, 610);
ctx.rect(490, 670, 240, 40);
ctx.fillStyle = "seagreen";
ctx.fill();
ctx.beginPath();

ctx.moveTo(720, 100);
ctx.lineTo(640, 150);
ctx.lineTo(720, 200);
ctx.lineTo(720, 100);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();

ctx.fillRect(100, 670, 100, 50);
ctx.fillRect(170, 725, 100, 50);
ctx.fillStyle = "tomato";
ctx.fillRect(480, 390, 40, 80);
ctx.moveTo(490, 660);
ctx.lineTo(530, 610);
ctx.lineTo(570, 660);
ctx.lineTo(490, 660);
ctx.fillStyle = "black";
ctx.fill();
