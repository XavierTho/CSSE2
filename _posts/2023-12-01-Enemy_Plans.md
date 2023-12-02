---
layout: post
title: Plans for Enemy
type: ccc
courses: { csse: {week: 14} }
---

# Parts of an Enemy (Possible Lesson Topics)
The following is a plan to create an enemy in Mario and the different characteristics in which this enemy should have.

## Collisions
The first & most important aspect for our enemy will be applying collisions to it as to allow it to interact with the player. There are two types of collision code in which will be necessary to implement. The first would be allowing the player to kill the Goomba if the player so happens to jump on top of the Goomba, and the next would be allowing the Goomba to kill the player if the player is anywhere but the top of the Goomba. The code for this is outlined as the following.

```
      //If Player Jumps on Goomba, Kill Goomba
      if(
            player.position.y + player.height <= goomba.position.y &&
            player.position.y + player.height + player.velocity.y >= goomba.position.y &&
            player.position.x + player.width >= goomba.position.x &&
            player.position.x <= goomba.position.x + goomba.width
        )
        {
            // Player Should Bounce on the Goomba's Head
            // Goomba should shrink and then finally disappear
        }
        //If Goomba Touches Player, Player Dies
        if(
            player.position.y < goomba.position.y + goomba.height &&
            player.position.y + player.height > goomba.position.y &&
            player.position.x < goomba.position.x + goomba.width &&
            player.position.x + player.width > goomba.position.x
        )
        {
            // Game should be paused & Game Over Screen Appears
            // Button or prompt should appear allowing for the game to be reset
        }
```

As you can see the code to detect the different type of interactions between the player and enemy have already been outlined. The exact effects of these interactions are still be planned in their implementation but comments are provided to provide a general sense in which the effect of these collisions will have in the final product.

## Movement
In the game, we plan to have multiple games which in their own respect will defend their own part of the map. Different Goombas will be specified to occupy certain areas. For example, We have a 400x400 canvas. Goomba 1 continually guards 0-200x, while Goomba 2 continually guards 201-400x. This creates a very simple method in which we can use to move the Goombas around. The exact way such will be implemented is still be decided.

# Homework
As students, it's expected that you implement at the minimum, collision code for the Goomba and make sure it moves back and forth across the map.