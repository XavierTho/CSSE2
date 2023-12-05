import Character from './Character.js';

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
    }
    
    death() {
        let currentScale = 1;
        let intervalId = setInterval(() => {
            if (currentScale >= 0) {
                canvas.style.transform = `scale(1, ${currentScale.toFixed(1)})`;
                console.log("Death " + currentScale.toFixed(1));
                currentScale -= 0.1;
            } else {
                clearInterval(intervalId);
            }
        }, 10);
        super.destroy();
    }
}


export default Enemy