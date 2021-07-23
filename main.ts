sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let bird: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 3 . . . . . . . . . . . . . . 
    . 3 3 3 . . . . . . . . . . . . 
    . 3 3 3 3 . . . 3 3 . . . . . . 
    . . . . 3 . . 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 . . 3 . . . 3 . 
    . . . . . . . . . . 3 3 3 3 3 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
info.setLife(3)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    bird = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 8 8 8 . . . . . . . . . . 
        . . . 8 8 8 8 . . . 8 8 8 8 . . 
        . . . . . 8 8 8 . . 8 1 f 8 . . 
        . . 8 8 . 8 8 8 . 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . . . . 8 8 8 8 8 8 8 . . . . 
        . . . . . . . 4 . . . 4 . . . . 
        . . . . . . . 4 . . . 4 . . . . 
        . . . . . . . 4 . . . 4 . . . . 
        . . . . . . 4 4 4 . 4 4 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(bird, value)
    tiles.setTileAt(value, assets.tile`myTile0`)
    bird.setVelocity(randint(-75, 75), randint(-75, 75))
    bird.setBounceOnWall(true)
}
forever(function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
game.onUpdateInterval(500, function () {
    info.changeScoreBy(1)
})
