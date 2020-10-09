let canvas = new Canvas();

let pencil = new Pencil("#cc22cc", 2, canvas.context);

let clearButton = document.getElementById('clear');
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
