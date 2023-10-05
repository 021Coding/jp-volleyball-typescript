import { Player } from "../player";

export class Collider {
    private player: Player;

    constructor(player: Player) {
        this.player = player;
    }

    public update() {
        if(this.player.getX() < 0) {
            this.player.setX(0);
            this.player.resetXVel();
        } else if(this.player.getX() + this.player.getSize() > 500) {
            this.player.setX(500 - this.player.getSize());
            this.player.resetXVel();
        }

        if(this.player.getY() < 0) {
            this.player.setY(0);
            this.player.resetYVel();
        } else if(this.player.getY() + this.player.getSize() > 500) {
            this.player.setY(500 - this.player.getSize());
            this.player.resetYVel();
        } 
    }

}