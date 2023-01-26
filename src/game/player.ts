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

    update(mouseInput: MouseInput) {
        // ----- TEST CODE -----------
        // Adding gravity here for a quick test
        this.yVel += 0.1; 
        //Adding jetpack for test
        if(mouseInput.isLeftClick()) {
            this.yVel -= 0.3
        }
        // ---------------------------
        // Change the current location by the corresponding velocity
        this.x += this.xVel;
        this.y += this.yVel;
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }

}