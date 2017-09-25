// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x > 505){
      this.x = -101;
    }
    this.x += dt * Math.random() + this.speed;

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 390;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // ****all computers.
    if (this.x < 0) {
       this.x = 0;
   } else if (this.x > 400) {
       this.x = 400;
   } else if ((this.y === 0) || (this.y > 400)){
       this.y = 400;
   } else if (this.y < 0) {
       this.y = 0;
   }
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(movement) {
  switch (movement) {
        case 'left':
            this.x = this.x - 100;
            console.log("left");
            break;
        case 'up':
            this.y = this.y - 85;
            console.log("up");
            break;
        case 'right':
            this.x = this.x + 100;
            console.log("right");
            break;
        case 'down':
            this.y = this.y + 85;
            console.log("down");
            break;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [
  new Enemy(-101, 70, Math.random() * (10-1) + 1),
  new Enemy(-101, 140, Math.random() * (10-1) + 1),
  new Enemy(-101, 210, Math.random() * (10-1) + 1)
];
// Place the player object in a variable called player
var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// define function to hold two rectangles that represent player and enemy position
var Rectangle = function (left, top, width, height) {
	this.left = left;
	this.top = top;
	this.right = this.left + width;
	this.bottom = this.top + height;
	this.width = width;
	this.height = height;
};

// place the player-enemy colision checking in an object checkCollisions
var checkCollisions = function(){
  for (i=0; i < allEnemies.length; i++) {
      if (this.x === allEnemies[i].x && this.y === allEnemies[i].y) {
          player.x = 200;
          player.y = 390;
          return true;
      }else{
        return false;
      }
  }
};
