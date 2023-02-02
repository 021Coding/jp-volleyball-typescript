import { MouseInput } from "../input/mouseInput";

export class Player {
    // Location and size of the player
    private x: number;
    private y: number;
    private size: number;

    // Speed on x and y axes
    private xVel: number;
    private yVel: number; 

    constructor(startX: number, startY: number, size: number) {
        this.x = startX;
        this.y = startY;
        this.size = size;

        this.xVel = 0;
        this.yVel = 0;
    }

    public update(mouseInput: MouseInput) {
        // ---- TESTING BOOST METHOD ----------
        if(mouseInput.isLeftClick()) {
            this.boost(mouseInput.getMouseX(), mouseInput.getMouseY());
        }

        // -----------------------------------

        // Change the current location by the corresponding velocity
        this.x += this.xVel;
        this.y += this.yVel;
    }

    public render(ctx: CanvasRenderingContext2D) {
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }

    // Add force towards a location
    private boost(targetX: number, targetY: number) {
        let dX: number = targetX - this.x;
        let dY: number = targetY - this.y;
        let theta: number = Math.atan((dY/dX));

        console.log(dX);
        console.log(dY);
        console.log(theta);
    }

}