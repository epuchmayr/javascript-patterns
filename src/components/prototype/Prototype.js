// Prototype
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `${this.name} says Woof!`;
  }
}

const dog1 = new Dog('Daisy');
// const dog2 = new Dog("Max");
// const dog3 = new Dog("Spot");

console.log(Dog.prototype);
console.log(dog1.__proto__);

Dog.prototype.play = () => console.log('Playing now!');

dog1.play();

// proto super

class SuperDog extends Dog {
  fly() {
    return `Flying!`;
  }
}

const dog4 = new SuperDog('Daisy');

console.log(SuperDog.prototype.__proto__);
console.log(dog4.__proto__);

console.log(dog4.bark());
console.log(dog4.fly());

function Prototype() {
  return (
    <>
      <pre>{SuperDog.toString()}</pre>
      <pre>{SuperDog.__proto__.toString()}</pre>
    </>
  );
}


export default Prototype