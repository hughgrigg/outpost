var game = new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    "outpost",
    {
        preload: preload,
        create: create,
        update: update
    }
);

var t0 = Date.now();
var player;

function preload() {
    game.load.image("playerSprite", "assets/img/protagonist.png");
}

function create() {
    
    player = new Player(game,
                        "playerSprite",
                        400,
                        300);

}

function update() {
    var deltaT = Date.now() - t0;
    t0 = Date.now();
    player.update(deltaT);
}