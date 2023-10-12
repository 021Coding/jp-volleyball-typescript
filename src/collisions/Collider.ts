import { Player } from "../game/player";
import { GAME_HEIGHT, GAME_WIDTH } from "../utils/utils";

export class Collider {
    private player: Player;

    constructor(player: Player) {
        this.player = player;
    }

    public update() {
        if(this.player.getX() < 0) {
            this.player.setX(0);
            this.player.resetXVel();
        } else if(this.player.getX() + this.player.getSize() > GAME_WIDTH) {
            this.player.setX(GAME_WIDTH - this.player.getSize());
            this.player.resetXVel();
        }

        if(this.player.getY() < 0) {
            this.player.setY(0);
            this.player.resetYVel();
        } else if(this.player.getY() + this.player.getSize() > GAME_HEIGHT) {
            this.player.setY(GAME_HEIGHT - this.player.getSize());
            this.player.resetYVel();
        } 
    }

}