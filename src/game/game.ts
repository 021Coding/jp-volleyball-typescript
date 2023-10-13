import { Canvas } from "../graphics/canvas";
import { KeyboardInput } from "../input/keyboardInput";
import { MouseInput } from "../input/mouseInput";
import { FPSTracker } from "../utils/fpsTracker";
import { GAME_WIDTH, GAME_HEIGHT } from "../utils/utils";
import { Player } from "./player";

export class Game {
    // Canvas to draw graphics on
    private canvas: Canvas;

    // Mouse input object
    private mouseInput: MouseInput;
    private keyboardInput: KeyboardInput;

    // Track refreshes
    private fpsTracker: FPSTracker;

    // The width and height of the canvas 
    public WIDTH: number = GAME_WIDTH;
    public HEIGHT: number = GAME_HEIGHT;

    // Array of players in the game
    private players: Player[] = [];

    // Tick rate of the game
    private TICKRATE: number = 60;

    constructor() {
        this.canvas = new Canvas(this.WIDTH, this.HEIGHT);
        this.mouseInput = this.canvas.getMouseInput();
        this.keyboardInput = this.canvas.getKeyboardInput();

        this.fpsTracker = new FPSTracker(this.WIDTH - 38, 10);
    }

    // Handles setup
    public init() {
        this.players.push(new Player(20, 20, 20));

        // Starts running the game
        this.run();
    }

    // Function for updating all assets
    private update() {
        this.fpsTracker.update();
        this.players.forEach(player => {
            player.update(this.canvas.getMouseInput(), this.canvas.getKeyboardInput());
        });
    }

    // Function for drawing all assets
    private render(ctx: CanvasRenderingContext2D) {
        // Clear the current canvas
        ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);

        // Draw here
        this.players.forEach(player => {
            player.render(ctx);
        });

        this.fpsTracker.render(ctx);
    }

    public run() {
        // Limit the tick rate
        let delta = 0;
        let startTime = performance.now();
        while(performance.now() - startTime < 1000 / this.TICKRATE) {
            delta = performance.now() - startTime;
        }

        // Update and render
        this.update();
        this.render(this.canvas.getContext());
        
        // Request next frame
        window.requestAnimationFrame(() => this.run());
    }

}