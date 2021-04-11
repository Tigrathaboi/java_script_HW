class Car { 
    static getSpecs(car) {
       console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
   }

   constructor(price, maxSpeed) {
       this.speed = 0;
       this.price = price;
       this.maxSpeed = maxSpeed;
       this.isOn = false;
       this.distance = 0;
   }

   setPrice(value) {
       return this.price = value;
   }
   
   getPrice() {
       return this.price;
   }

   turnOn() {
       return this.isOn = true;
   }

   turnOff() {
       return this.isOn = false;
   }

   accelerate(value) {
       if(this.speed + value <= this.maxSpeed) {
           return this.speed += value;
       } else {
           return `Max speed...`;
       }
   }

   decelerate(value) {
       if(this.speed - value >= 0) {
           return this.speed -= value;
        } else {
           return `Min speed...`;
        }
   }

   drive(hours) {
       if(this.isOn === true) {
           return this.distance += this.speed * hours;
       } else {
           return `Car is off...`;
       }
   }
}

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
const mustang = new Car(2000, 200);

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000