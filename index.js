let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");

const lineWidth = 2;
const strokeStyle = 1;

let atualPosition = {
    x: 0,
    y: 0
}

let previousPosition = {
    x:0,
    y:0
}

let mouseDown = false;

canvas.addEventListener('mousedown', (event) => {
    mouseDown = true;
    previousPosition.x = event.clientX;
    previousPosition.y = event.clientY;
    draw(event);
});

canvas.addEventListener('mouseup', () =>{
    mouseDown = false;
});

canvas.addEventListener('mouseleave', () =>{
    mouseDown = false;
});

canvas.addEventListener('mousemove', (event) => {
    if(mouseDown){
        draw(event);
    }
});

function draw(event){
    atualPosition.x = event.clientX;
    atualPosition.y = event.clientY;

    context.beginPath();
    context.moveTo(previousPosition.x, previousPosition.y);
    context.lineTo(atualPosition.x, atualPosition.y);
    context.strokeStyle = strokeStyle;
    context.lineWidth = lineWidth;
    context.stroke();
    context.closePath();

    previousPosition.x = atualPosition.x;
    previousPosition.y = atualPosition.y;
}
