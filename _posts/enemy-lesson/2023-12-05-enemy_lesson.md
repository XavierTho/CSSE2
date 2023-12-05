---
layout: post
title: Lesson for Enemy
type: ccc
courses: { csse: {week: 15} }
---

# Lesson - Enemy
In this lesson, we'll be going over the different characteristics in which all enemies need, and how eventually you will add a fully functional enemy into your own game.

## Instructions
Make sure to be following along, so you'll have the best time understanding the content. As we go over the lesson, keep in mind what you'll exactly need to do for in order to make the player work. Here is a brief list of essential things that the enemy must do.
- Ability to move
- Interaction with Player
- Ability to be killed by player
- Must be in OOP

Once we go over how the enemy works, it will be YOUR job implementing int oyour own game. Snippets and this guide will be resources you can use to refer back on how to make your enemy.

## Step 1 - Creating the Enemy
The first step in creating the enemy in the game is creating a new file just for it. The file should be in assets/js/platformer and should called either Enemy.js, Goomba.js or something related. Once you have created the file, we shall now start defining the Enemy class.

```
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
    }
}

export default Enemy
```

This code is essentially the same as the player code with few differences. The Enemy class is being extended to the Character class, and once extended, we can start defining the different properties in which our enemy will have.

Next step would be adding the enemy into the main game.


## Step 2 - 