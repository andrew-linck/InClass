const dog = {
    isSleepy: false,
    isHungry: true,
    sound: 'Woof!',
    name: 'Spot',
    makeSound: function() {
      console.log(this.sound);
    },
    sleep: function() {
      console.log(`${this.name} is going to sleep...`);
      this.isSleepy = false;
      this.isHungry = true;
      console.log(`${this.name} woke up hungry!`);
    },
    feed: function() { 
      console.log(`Feeding ${this.name}...`);
      this.isHungry = false;
      this.isSleepy = true;
      console.log(`${this.name} is sleepy!`);
    }
  };
  dog.makeSound();
  dog.feed();
  dog.sleep();