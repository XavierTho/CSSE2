import Character from './Character.js';
import GameEnv from './GameEnv.js';

export class Enemy extends Character {
    // constructors sets up Character object 
    constructor(canvas, image, speedRatio, enemyData){
        super(canvas, 
            image, 
            speedRatio,
            enemyData.width, 
            enemyData.height, 
        );
        this.destruction = 0;

        // Player Data is required for Animations
        this.enemyData = enemyData;

        this.spriteScale = 1;

        //Initial Position of Goomba
        this.x = .60 * GameEnv.innerWidth;
    }

    update() {
        // Check if the enemy is at the left or right boundary
        if (this.x <= 0 || this.x + this.width >= GameEnv.innerWidth) {
            // Change direction by reversing the speed
            this.speed = -this.speed;
        }

        //Initially get the enemy moving
        this.x += this.speed;
        
        //detect if the goomba is dead
        if (this.destruction === 1) {
            this.destroy();
        }
    }

    /* murder() {
        let i = 1;
        let intervalId = setInterval(() => {
            if (i >= 0) {
                canvas.style.transform = `scale(1, ${i.toFixed(1)})`;
                console.log("Death " + i.toFixed(1));
                i -= 0.1;
            } else {
                clearInterval(intervalId);
            }
        }, 50);
    } */
}


export default Enemy