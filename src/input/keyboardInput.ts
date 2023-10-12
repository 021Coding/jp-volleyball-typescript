export class KeyboardInput {
    // Boolean for if move left or right or jump is pressed
    private left: boolean;
    private right: boolean;
    private jump: boolean;

    constructor (canvas: HTMLCanvasElement) {
        this.left = false;
        this.right = false;
        this.jump = false;

        window.addEventListener('keydown', (keydown) => {
            if(keydown.key == 'a') {
                this.left = true;
                console.log("Left pressed");
            }

            if(keydown.key == 'd') {
                this.right = true;
                console.log("Right pressed");
            }

            if(keydown.key == ' ') {
                this.jump = true;
                console.log("Jump pressed");
            }
            
        })

        window.addEventListener('keyup', (keyup) => {
            if(keyup.key == 'a') {
                this.left = false;
                console.log("Left released");
            }

            if(keyup.key == 'd') {
                this.right = false;
                console.log("Right released");
            }

            if(keyup.key == ' ') {
                this.jump = false;
                console.log("Jump released");
            }
        })
    }

    public leftPressed(): boolean {
        return this.left;
    }

    public rightPressed(): boolean {
        return this.right;
    }

    public jumpPressed(): boolean {
        return this.jump;
    }

}