let clearButton = document.getElementById('clear');

let eraserButton = document.getElementById('eraser');

let pencilColorInput = document.getElementById('pencil');
pencilColor = pencilColorInput.value;

let canvas = new Canvas();
let pencil = new Pencil(pencilColor, 2, canvas.context);

pencilColorInput.addEventListener('change', () => {
    pencilColor = pencilColorInput.value;
    pencil.color = pencilColor;
});

pencilColorInput.addEventListener('click', () => {
    pencilColor = pencilColorInput.value;
    pencil.color = pencilColor;
});

eraserButton.addEventListener('click', () =>{
    pencil.color = "#fff";
});


clearButton.addEventListener('click', (event) => {
    event.preventDefault();
    canvas.clearAll();
})

canvas.tela.addEventListener('mousedown', (event) => {
    canvas.mouseDown = true;
    pencil.previousPosition.x = event.clientX;
    pencil.previousPosition.y = event.clientY;
    pencil.draw({x:event.clientX, y: event.clientY});
});

canvas.tela.addEventListener('mouseup', () =>{
    canvas.mouseDown = false;
});

canvas.tela.addEventListener('mouseleave', () =>{
    canvas.mouseDown = false;
});

canvas.tela.addEventListener('mousemove', (event) => {
    if(canvas.mouseDown){
        pencil.draw({x:event.clientX, y: event.clientY});
    }
});
