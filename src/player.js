function Player (gameRefInput,
                 spriteInput,
                 xInput,
                 yInput) {
    this.gameRef = gameRefInput;
    this.sprite = this.gameRef.add.sprite(xInput, yInput, spriteInput);
    this.sprite.anchor.set(0.5);
    
    this.gameRef.input.addMoveCallback(this.mouseCallback, this);
    
    this.mouseX = xInput;
    this.mouseY = yInput;
}
 
Player.prototype.update = function(deltaT) {
    
    var speed = 120;
    
    if (this.gameRef.input.keyboard.isDown(Phaser.Keyboard.D))
    {
        this.sprite.x += speed * (deltaT / 1000);
    }
    if (this.gameRef.input.keyboard.isDown(Phaser.Keyboard.A))
    {
        this.sprite.x -= speed * (deltaT / 1000);
    }
    if (this.gameRef.input.keyboard.isDown(Phaser.Keyboard.S))
    {
        this.sprite.y += speed * (deltaT / 1000);
    }
    if (this.gameRef.input.keyboard.isDown(Phaser.Keyboard.W))
    {
        this.sprite.y -= speed * (deltaT / 1000);
    }

    this.sprite.angle = (180/Math.PI) *
                        Math.atan2( this.mouseX-this.sprite.x,
                                    this.sprite.y-this.mouseY);
};

Player.prototype.mouseCallback = function(pointer, x, y) {
    this.mouseX = x;
    this.mouseY = y;
};