title = "Downvote Dodger";
description = `
  To move...
  hold CLICK!
`

characters = [
`
   y
  y y
 y   y
`,`
r   r
 r r
  r 
`,
];

const G = {
  WIDTH: 100,
  HEIGHT: 90,
  ENEMY_MIN_BASE_SPEED: 0.9,
  ENEMY_MAX_BASE_SPEED: 1.3

};

options = {
  theme: "dark"
};

/**
* @typedef {{
* pos: Vector,
* }} Player
*/

/**
* @type { Player }
*/
let player;
let playerDirection = 0;

let bumper;

/**
 * @typedef {{
* pos: Vector
* }} Enemy
*/

/**
* @type { Enemy [] }
*/
let enemies;

/**
* @type { number }
*/
let currentEnemySpeed;

/**
* @type { number }
*/
let waveCount;

  function update() {
  if (!ticks) {
    player = {
      pos: vec(G.WIDTH * 0.5, G.HEIGHT * 0.95)
    };
    bumper = {
        pos: vec(G.WIDTH * 0.3, G.HEIGHT * 0.5)
    };
    enemies = [];

    waveCount = 0;
    currentEnemySpeed = 0;
  }
  if (enemies.length === 0) {
    color("red");
    currentEnemySpeed =
        rnd(G.ENEMY_MIN_BASE_SPEED, G.ENEMY_MAX_BASE_SPEED) * 1;
    for (let i = 0; i < 10; i++) {
        const posX = rnd(0, G.WIDTH);
        const posY = -rnd((i+  G.HEIGHT) * 0.2);
        enemies.push({ pos: vec(posX, posY) })
    }
    console.log("wave complete");
    play("coin");
    addScore(1);
  }

  color("yellow");
  char("a", player.pos);

  remove(enemies, (e) => {
    e.pos.y += currentEnemySpeed;
    color("red");
    char("b", e.pos);
    const isCollidingWithPlayer = char("b", e.pos, {rotation: e.rotation}).isColliding.char.a;

if (isCollidingWithPlayer) {
    end();
    play("explosion"); 
}
    return (e.pos.y > G.HEIGHT);
});

        if (input.isPressed) {

          console.log(player.pos.x);
          if (player.pos.x == 100) {
            playerDirection = 0; // Left
            play("select");
          } else if (player.pos.x == 0) {
            playerDirection = 1; // Right
            play("select");
          }

          if (playerDirection == 0) {
            player.pos.x-=2;
          } else if (playerDirection == 1) {
            player.pos.x+=2;
          }
       
 }
}