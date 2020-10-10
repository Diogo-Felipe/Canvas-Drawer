
class Canvas {

    constructor() {
        this.tela = document.getElementById('canvas');
        this.context = this.tela.getContext("2d");

        this.pencil = new Pencil("#cc22cc", 2, this.context);

        this.mouseDown = false;
    }

    clearAll() {
        this.context.clearRect(0, 0, this.tela.width, this.tela.height);
    }
}
