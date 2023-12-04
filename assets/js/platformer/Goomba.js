class Goomba extends GameObject {
    constructor(image) {
        super(canvas, 
            image, 
            speedRatio
        );
        this.position = {
            x: 250,
            y: 245
        };
        this.image = image;
        this.visible = true;
        this.velocity = {
            x: -2,
            y: 0
        }
    }
    draw() {
      if (this.visible === true) {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
      }
    }
    update() {
        this.position.x += this.velocity.x;
        this.draw();
    }
}