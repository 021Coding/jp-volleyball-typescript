import { Canvas } from "../graphics/canvas";

export class Game {
    private canvas: Canvas;

    constructor() {
        this.canvas = new Canvas(500, 500);

        this.drawPlayer();
    }

    // Test method to draw a player on the canvas
    public drawPlayer() {
        let ctx: CanvasRenderingContext2D = this.canvas.getContext();

        ctx.fillRect(20, 20, 20, 20);
    }

}