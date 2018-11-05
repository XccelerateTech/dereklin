class Monster {
   constructor(name){
      this.health = 100;
      this.name = name;
   }

   wound(damage){
      //Here is where you can damage the monster
      this.health -= damage;
      console.log("monster health is : " + this.health);
      if (this.health <= 0 ){
         console.log("monster dead");
      }
   }
   get Health(){
      return this.health;
   }

}
var monster1 = new Monster("mon1");
while(monster1.Health >= 0){
   monster1.wound(Math.floor(Math.random() * (20 - 5 + 1)) + 5);
}


