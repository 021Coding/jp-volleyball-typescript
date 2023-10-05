import { MouseInput } from "../input/mouseInput";
import { Collider } from "./collisions/Collider";

export class Player {
    // Location and size of the player
    private x: number;
    private y: number;
    private size: number;

    private collider: Collider;

    // Speed on x and y axes
    private xVel: number;
    private yVel: number; 

    constructor(startX: number, startY: number, size: number) {
        this.x = startX;
        this.y = startY;
        this.size = size;

        this.collider = new Collider(this);

        this.xVel = 0;
        this.yVel = 0;
    }

    public update(mouseInput: MouseInput) {
        // ---- TESTING BOOST METHOD ----------
        if(mouseInput.isLeftClick()) {
            this.boost(mouseInput.getMouseX(), mouseInput.getMouseY());
        }

        // -----------------------------------

        // Gravity
        this.yVel += 0.1

        // Change the current location by the corresponding velocity
        this.x += this.xVel;
        this.y += this.yVel;

        // Collide with walls 
        this.collider.update();
    }

    public render(ctx: CanvasRenderingContext2D) {
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }

    // Add force towards a location
    private boost(targetX: number, targetY: number) {
        let dX: number = targetX - this.x;
        let dY: number = targetY - this.y;
        let theta: number = Math.atan2(dY, dX);

        console.log(dX);
        console.log(dY);
        console.log(theta);
        this.xVel = Math.cos(theta) * 5;
        this.yVel = Math.sin(theta) * 5;
    }

    public getCollider() {
        return this.collider;
    }

    public getX() {
        return this.x;
    }

    public getY() {
        return this.y;
    }

    public getSize() {
        return this.size;
    }

    public setX(x: number) {
        this.x = x;
    }

    public setY(y: number) {
        this.y = y;
    }

    public resetXVel() {
        this.xVel = 0;
    }

    public resetYVel() {
        this.yVel = 0;
    }

}