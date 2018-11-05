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

class Bat extends Bird{
   constructor(){
      super();
      this.feed_milk = true;
      this.lay_eggs = false;
   }
}

class Whale extends Fish{
   constructor(){
      super();
      this.feed_milk = true;
      this.lay_eggs = false;
   }
}
const fish = new Fish();
const bird = new Bird();
const bat = new Bat();
const whale = new Whale();
console.log(fish.can_swim);