title = "Testing this2";
description = `
  "CLICKer"
`

characters = [
`
  yyy
`,`
  rrr
  ryr
   r
`,
];

const G = {
  WIDTH: 60,
  HEIGHT: 90,
  ENEMY_MIN_BASE_SPEED: 1.0,
  ENEMY_MAX_BASE_SPEED: 2.0

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
      pos: vec(G.WIDTH * 0.5, G.HEIGHT * 0.5)
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
    for (let i = 0; i < 9; i++) {
        const posX = rnd(0, G.WIDTH);
        const posY = -rnd(i * G.HEIGHT * 0.1);
        enemies.push({ pos: vec(posX, posY) })
    }
  }

// Another update loop
// This time, with remove()
remove(enemies, (e) => {
    e.pos.y += currentEnemySpeed;
    color("red");
    char("a", e.pos);

    return (e.pos.y > G.HEIGHT);
});

  color("cyan");
  box(player.pos, 4);
  //box(bumper.pos, 4);
  //color("cyan");
  //box(enemies.pos, 4);
  if (input.isPressed) {
    player.pos.x++;
  }



}
