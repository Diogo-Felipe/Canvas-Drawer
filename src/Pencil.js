
class Pencil {

    constructor(color, lineWidth, context) {
        this.color = color;
        this.lineWidth = lineWidth;
        this.context = context;

        this.atualPosition = {
            x: 0,
            y: 0
        }

        this.previousPosition = {
            x: 0,
            y: 0
        }
    }

    draw(position) {
        this.atualPosition.x = position.x;
        this.atualPosition.y = position.y;

        this.context.beginPath();
        this.context.moveTo(this.previousPosition.x, this.previousPosition.y);
        this.context.lineTo(this.atualPosition.x, this.atualPosition.y);
        this.context.strokeStyle = this.color;
        this.context.lineWidth = this.lineWidth;
        this.context.stroke();
        this.context.closePath();

        this.previousPosition.x = this.atualPosition.x;
        this.previousPosition.y = this.atualPosition.y;
    }

}
