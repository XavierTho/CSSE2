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
    }
    
    killGoomba() {
        currentScale = 1;
        enemyCanvas = document.getElementById("enemy")
        intervalId = setInterval(() => {
            if (currentScale >= 0) {
                enemyCanvas.style.transform = `scale(1, ${currentScale.toFixed(1)})`;
                console.log("Death " + currentScale.toFixed(1));
                currentScale -= 0.1;
            } else {
                clearInterval(intervalId);
            }
        }, 50);
    }
}

export default Enemy