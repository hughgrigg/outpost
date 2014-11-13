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

function preload() {
    game.load.image("marc", "assets/img/marc.png");
}

function create() {
    game.add.sprite(0, 0, "marc");
}
