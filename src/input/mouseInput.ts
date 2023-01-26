import { Canvas } from "../graphics/canvas";

export class MouseInput {
    // Boolean telling if left mouse button is pressed
    private leftClick: boolean;

    constructor(canvas: HTMLCanvasElement) {
        this.leftClick = false;

        canvas.addEventListener('mousedown', (mousedown) => {
            this.leftClickPressed();
        }); 

        canvas.addEventListener('mouseup', (mouseup) => {
            this.leftClickReleased();
        }); 
    }

    public leftClickPressed() {
        this.leftClick = true;
        console.log("Mousedown");
    }

    public leftClickReleased() {
        this.leftClick = false;
        console.log("Mouseup");
    }

    public isLeftClick(): boolean {
        if(this.leftClick == true) {
            return true;
        }

        return false;
    }

}