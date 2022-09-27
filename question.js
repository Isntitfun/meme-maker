// Nico's Code
const fileInput = document.getElementById("file");

function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
}

fileInput.addEventListener("change", onFileChange);

// THIS CODE WORKS!!

// My code #1 (image constant is differnt)
const fileInput = document.getElementById("file");

function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = document.createElement("img");
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, 600, 600);
  };
}

fileInput.addEventListener("change", onFileChange);

// THIS CODE WORKS!!

// My code #2 (code without event-listener)

const fileInput = document.getElementById("file");

function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  fileInput.value = null;
}

fileInput.addEventListener("change", onFileChange);

// THIS CODE DOESN'T WORK.............
