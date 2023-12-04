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

            //The game could alternatively automatically reset
        }
```

As you can see the code to detect the different type of interactions between the player and enemy have already been outlined. The exact effects of these interactions are still be planned in their implementation but comments are provided to provide a general sense in which the effect of these collisions will have in the final product.

## Movement
In the game, we plan to have multiple games which in their own respect will defend their own part of the map. Different Goombas will be specified to occupy certain areas. For example, We have a 400x400 canvas. Goomba 1 continually guards 0-200x, while Goomba 2 continually guards 201-400x. This creates a very simple method in which we can use to move the Goombas around. The exact way such will be implemented is still be decided.

## Death Animation 
We need a visually appealing and an effective means of "killing" the Goomba and removing it from the game. How this will be done is simple. When the player jumps on the Goomba, the goomba will begin shrinking into itself till it no longer can be seen. Here's an example on how this could be done:
```
function murder() {
        let i = 1;
        let intervalId = setInterval(() => {
            if (i >= 0) {
                canvas.style.transform = `scale(1, ${i.toFixed(1)})`;
                i -= 0.1;
            } else {
                clearInterval(intervalId);
            }
        }, 100);
    }
```

Using the collision code we went over above, we can run the murder function when mario so happens to jump on the Goomba. The murder function will shrink the Goomba into oblivion, effectively removing it from the game. Even while the Goomba sprite still technically exists is dimensions are that of 0, meaning it cannot collide with the player once it has died.

# Homework
As students, it's expected that you implement at the minimum, collision code for the Goomba and make sure it moves back and forth across the map.