const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // context is like a brush
const lineWidth = document.getElementById("line-width");

// ============= css
canvas.width = 1080;
canvas.height = 720;

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

// ============ init
lineWidth.value= 5;
ctx.lineWidth = lineWidth.value;

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
  };
const stopPainting = () => {
  isPainting = false;
  ctx.beginPath();
};

const onLineWidthChange = (event)=>{
    ctx.lineWidth = event.currentTarget.value;
}

// ============= Event Listner

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
lineWidth.addEventListener("click",onLineWidthChange);










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
