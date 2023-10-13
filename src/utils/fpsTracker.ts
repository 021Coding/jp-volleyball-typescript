export class FPSTracker {

    private x: number;
    private y: number;

    private fps: number;
    private framecount: number = 0;
    private lastFPStime: any;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.fps = 0;

        this.lastFPStime = performance.now();
    }

    public update() {
        if(performance.now() - this.lastFPStime >= 1000) {
            this.fps = 1000 * this.framecount / (performance.now() - this.lastFPStime);
            this.framecount = 0;
            this.lastFPStime = performance.now();  
        } else {
            this.framecount++;
        }
    }

    public render(context: any) {
        context.fillStyle = 'black';
        context.font = "10px Arial";
        context.fillText("FPS: " + Math.round(this.fps).toString(), this.x, this.y);
    }

}