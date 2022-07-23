const saveBtn = document.getElementById("save-btn");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // context is like a brush
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const modeBtn = document.getElementById("fill-btn");
const modeName = document.getElementById("mode-name");
const clearBtn = document.getElementById("clear-btn");
const EraserBtn = document.getElementById("eraser-btn");

const fileInput = document.getElementById("file");
const textInput = document.getElementById("text");

// ============= const
const CANVAS_WIDTH = 720;
const CANVAS_HEIGHT = 480;

// ============= css
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const colors = [
  "#55efc4",
  "#81ecec",
  "#74b9ff",
  "#a29bfe",
  "#dfe6e9",
  "#fdcb6e",
  "#e17055",
  "#d63031",
  "#e84393",
  "#2d3436",
];

let isPainting = false;
let isFilling = false;
let eraserColor = "";

// ============ init

lineWidth.value = 5;
ctx.lineWidth = lineWidth.value;
color.value = "black";
eraserColor = "white";
ctx.lineCap = "round";

// ============ handle Function

const onMove = (event) => {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
};

const startPainting = () => {
  isPainting = true;

  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    eraserColor = ctx.fillStyle;
  }
};
const stopPainting = () => {
  isPainting = false;
  ctx.beginPath();
};

const onLineWidthChange = (event) => {
  ctx.lineWidth = event.currentTarget.value;
};

const onColorChange = (event) => {
  ctx.strokeStyle = event.currentTarget.value;
  ctx.fillStyle = event.currentTarget.value;
};

const onColorClick = (event) => {
  const currentColor = event.target.dataset.color;
  ctx.strokeStyle = currentColor;
  ctx.fillStyle = currentColor;
  color.value = currentColor;
};

const onModeClick = () => {
  isFilling = !isFilling;

  isFilling
    ? ((modeBtn.innerHTML = "Draw"), (modeName.innerHTML = "Mode : Fill"))
    : ((modeBtn.innerHTML = "Fill"), (modeName.innerHTML = "Mode : Draw"));
};

const onClearClick = () => {
  ctx.fillStyle = "white";
  eraserColor = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
};

const onEraseClick = () => {
  ctx.strokeStyle = eraserColor;
  isFilling = false;
  modeBtn.innerHTML = "Fill";

  console.log(canvas);
};

const onFileChange = (event) => {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = () => {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = "";
  };
};

const onDoubleClick = (event) => {
  const text = textInput.value;
  if(text !== ""){
    ctx.save();
  
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.font = "48px serif";
    ctx.strokeText(text, event.offsetX, event.offsetY);
    ctx.restore();
  }
 
};

const onSaveClick = ()=>{
  const url = canvas.toDataURL();
  const a =document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
}

// ============= Event Listner

canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach((color) => {
  color.addEventListener("click", onColorClick);
});

modeBtn.addEventListener("click", onModeClick);
clearBtn.addEventListener("click", onClearClick);
EraserBtn.addEventListener("click", onEraseClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);

const startTopLeft = (event) => {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
};
const startCenter = (event) => {
  ctx.beginPath();
  ctx.moveTo(400, 400);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
};
const attackEyes = (event) => {
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
};

// addEventListener("mousemove", startTopLeft);
// addEventListener("mousemove", startCenter);
// addEventListener("mousemove", attackEyes);

// ctx.moveTo(50,50);
// ctx.lineTo(100,50);
// ctx.lineTo(100,100);
// ctx.lineTo(50,100);
// ctx.lineTo(50,50);
// ctx.stroke();
// ctx.fill();

// ctx.fillRect(200,200, 50, 200);
// ctx.fillRect(400,200, 50, 200);
// ctx.lineWidth = 2;
// ctx.strokeRect(300,300, 50, 100);
// ctx.fillRect(200,200, 200, 20);

// ctx.moveTo(200,200);
// ctx.lineTo(325,100);
// ctx.lineTo(450,200);
// ctx.stroke();
// ctx.fill();

// ============== Man

// ctx.fillRect(210, 200, 15, 100);
// ctx.fillRect(350, 200, 15, 100);
// ctx.fillRect(260, 200, 60, 200);

// ctx.arc(290, 130, 50, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle = "pink";
// ctx.arc(310, 120, 10, Math.PI, 2 * Math.PI);
// ctx.arc(270, 120, 10, Math.PI, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
