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
// This code did not work, it was used to attempt to move the original position of the goomba
// Please refer to the character.js to change spawn location. You guy's got this.
/* size() {
    // Formula for Height should be on constant ratio, using a proportion of 832
    const scaledHeight = GameEnv.innerHeight * (100 / 832);
    // Formula for Width is scaled: scaledWidth/scaledHeight == this.width/this.height
    const scaledWidth = scaledHeight * this.aspect_ratio;
    const enemyX = .60 * GameEnv.innerWidth;
    const enemyY = (GameEnv.bottom - scaledHeight);

    // set variables used in Display and Collision algorithms
    this.bottom = enemyY;
    this.collisionHeight = scaledHeight;
    this.collisionWidth = scaledWidth;

    //this.canvas.width = this.width; 
    //this.canvas.height = this.height;
    this.canvas.style.width = `${scaledWidth}px`;
    this.canvas.style.height = `${scaledHeight}px`;
    this.canvas.style.position = 'absolute';
    this.canvas.style.left = `${enemyX}px`;
    this.canvas.style.top = `${enemyY}px`; 

} */

export default Enemy