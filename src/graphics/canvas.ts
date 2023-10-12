import { KeyboardInput } from "../input/keyboardInput";
import { MouseInput } from "../input/mouseInput";

export class Canvas {
    private width: number;
    private height: number;

    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    // Inputs added to canvas to listen for events
    private mouseInput: MouseInput;
    private keyboardInput: KeyboardInput;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;

        // Create canvas element
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.style.border = "3px solid";
        document.body.appendChild(this.canvas);
        this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;

        // Create a mouse listener
        this.mouseInput = new MouseInput(this.canvas);
        this.keyboardInput = new KeyboardInput(this.canvas);
    }

    public getContext(): CanvasRenderingContext2D {
        return this.context;
    }

    public getMouseInput(): MouseInput {
        return this.mouseInput;
    }

    public getKeyboardInput(): KeyboardInput {
        return this.keyboardInput;
    }

}