import { MouseInput } from "../input/mouseInput";
import { Collider } from "../collisions/Collider";
import { KeyboardInput } from "../input/keyboardInput";
import { GAME_HEIGHT, GAME_WIDTH } from "../utils/utils";

export class Player {
    // Location and size of the player
    private x: number;
    private y: number;
    private size: number;

    private collider: Collider;

    // Speed on x and y axes
    private xVel: number;
    private yVel: number; 

    // Vairables for movement
    private canJump: boolean;
    private canBoost: boolean;

    constructor(startX: number, startY: number, size: number) {
        this.x = startX;
        this.y = startY;
        this.size = size;

        this.collider = new Collider(this);

        this.xVel = 0;
        this.yVel = 0;

        this.canJump = false;
        this.canBoost = false;
    }

    public update(mouseInput: MouseInput, keyboardInput: KeyboardInput) {
        // ---- TESTING BOOST METHOD ----------
        if(mouseInput.isLeftClick()) {
            this.boost(mouseInput.getMouseX(), mouseInput.getMouseY());
        }

        if(keyboardInput.leftPressed() && !keyboardInput.rightPressed()) {
            this.xVel -= 0.1;
        } else if(keyboardInput.rightPressed() && !keyboardInput.leftPressed()) {
            this.xVel += 0.1;
        }
        if(keyboardInput.jumpPressed()) {
            this.jump();
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

    // Jump
    private jump() {
        if(this.canJump) {
            if(this.y >= GAME_HEIGHT - this.size) {
                this.yVel -= 5;
            } else if(this.x <= 0) {
                this.xVel += 5;
            } else if(this.x >= GAME_WIDTH - this.size) {
                this.xVel -= 5;
            } else if(this.y <= 0) {
                this.yVel += 5;
            } else {
                this.yVel = -5;
            }

            this.canJump = false;
        }
    }

    // Add force towards a location
    private boost(targetX: number, targetY: number) {
        if(this.canBoost && !this.canJump) {
            let dX: number = targetX - this.x;
            let dY: number = targetY - this.y;
            let theta: number = Math.atan2(dY, dX);

            this.xVel += Math.cos(theta) * 10;
            this.yVel += Math.sin(theta) * 10;

            this.canBoost = false;
        }
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

    public resetJump() {
        this.canJump = true;
        this.canBoost = true;
    }

}