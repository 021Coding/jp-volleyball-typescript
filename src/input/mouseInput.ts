export class MouseInput {
    // Boolean telling if left mouse button is pressed
    private leftClick: boolean;
    private mouseX: number = 0;
    private mouseY: number = 0;

    constructor(canvas: HTMLCanvasElement) {
        this.leftClick = false;

        canvas.addEventListener('mousedown', (mousedown) => {
            this.mouseX = mousedown.offsetX;
            this.mouseY = mousedown.offsetY;
            this.leftClickPressed();
        }); 

        canvas.addEventListener('mouseup', (mouseup) => {
            this.leftClickReleased();
        }); 
    }

    public leftClickPressed() {
        this.leftClick = true;
        console.log("Mousedown @ " + this.mouseX + ", " + this.mouseY);
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

    public getMouseX(): number {
        return this.mouseX;
    }

    public getMouseY(): number {
        return this.mouseY;
    }

}