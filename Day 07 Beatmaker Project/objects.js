function Enemy(life, name, level) {
  this.life = life;
  this.name = name;
  this.level = level;
}

Enemy.prototype.getInfo = function () {
  console.log(this.life, this.name, this.level);
};

Enemy.prototype.attack = function () {
  console.log(`${this.name} has attacked! `);
};

Enemy.prototype.block = function () {
  console.log(`${this.name} has blocked! `);
};

function Dragon(life, name, level, color, spell) {
  Enemy.call(this, life, name, level, color, spell);
  this.color = color;
  this.spell = spell;
}

Dragon.prototype = Object.create(Enemy.prototype);

Dragon.prototype.fireBreath = function () {
  console.log("FIRE BREATHHH!");
};

const newDragon = new Dragon(100, "Viridis Dragon", 25, "Green", "Fire");

newDragon.getInfo();
