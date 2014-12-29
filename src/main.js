var game = new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    "outpost",
    {
        preload: preload,
        create: create
    }
);

var this_text;
var counter = 0;
var image;

function preload() {
    game.load.image("marc", "assets/img/marc.png");
}

function create() {
    image = game.add.sprite(game.world.centerX, 0, "marc");
    
    image.inputEnabled = true;
    
    image.anchor.set(0.5);

    
    this_text = game.add.text(0, 0, 'Try Left Clicking!', { fill: '#00ffff' });
    
    image.events.onInputDown.add(listener, this);
    
    game.input.addMoveCallback(move, this);

}

function move(pointer, x, y) {
    image.x = x;
    image.y = y;
}

function listener() {
    counter++;
    this_text.text = "You clicked " + counter + " times!";
}