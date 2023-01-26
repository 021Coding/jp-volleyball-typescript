import { Canvas } from "../graphics/canvas";
import { Player } from "./player";

export class Game {
    private canvas: Canvas;

    // The width and height of the canvas 
    private WIDTH: number = 500;
    private HEIGHT: number = 500;

    // Array of players in the game
    private players: Player[] = [];

    // Tick rate of the game
    private TICKRATE: number = 60;

    constructor() {
        this.canvas = new Canvas(this.WIDTH, this.HEIGHT);
    }

    // Handles setup
    public init() {
        this.players.push(new Player(20, 20, 20));

        // Starts running the game
        this.run();
    }

    // Function for updating all assets
    private update() {
        this.players.forEach(player => {
            player.update(this.canvas.getMouseInput());
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