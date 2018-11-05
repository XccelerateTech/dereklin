class Bird {
   constructor(){
      this.can_swim = false;
      this.can_fly = true;
      this.feed_milk = false;
      this.lay_eggs = true;
   }


}

class Fish {
   constructor(){
      this.can_swim = true;
      this.can_fly = false;
      this.feed_milk = false;
      this.lay_eggs = true;
   }
}

class Bat{
   constructor(){
      this.bird = new Bat();
      this.can_swim = bird.can_swim;
      this.can_fly = bird.can_fly;
      this.feed_milk = true;
      this.lay_eggs = false;
   }
}

class Whale{
   constructor(){
      this.fish = new Fish();
      this.can_swim = fish.can_swim;
      this.can_fly = fish.can_fly;
      this.feed_milk = true;
      this.lay_eggs = false;
   }
}
const fish = new Fish();
const bird = new Bird();
const bat = new Bat();
const whale = new Whale();
console.log(fish.can_swim);