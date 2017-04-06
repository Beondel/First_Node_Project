function User(name) {
    this.name = name;
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 5;
        this.life -= 5;
        console.log(this.name + " gave 5 life to " + targetPlayer.name);
    }
}

var Bucky = new User("Bucky");
var Wendy = new User("Wendy");

Bucky.giveLife(Wendy);
console.log("Bucky:" + Bucky.life);
console.log("Wendy:" + Wendy.life);

User.prototype.punch = function punch(targetPlayer) {
    targetPlayer.life -= 10;
    console.log(this.name + " punched " + targetPlayer.name);
}

Wendy.punch(Bucky);
console.log("Bucky:" + Bucky.life);
console.log("Wendy:" + Wendy.life);