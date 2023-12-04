import GameEnv from './GameEnv.js';
import Character from './Character.js';

export class Enemy extends Character {
    constructor (canvas, image, speedRatio, enemyData) {
        super(canvas, 
            image,
            speedRatio,
            enemyData.width,
            enemyData.height,
            );
        this.enemyData = enemyData;
    }
}
