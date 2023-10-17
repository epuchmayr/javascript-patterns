
class Dog {
  constructor(name) {
    this.name = name;
  }
}

const animalFunctionality = {
  walk: () => console.log("Walking!"),
  sleep: () => console.log("Sleeping!"),
};

const dogFunctionality = {
  bark: () => console.log('Woof!'),
  wagTail: () => console.log('Wagging my tail!'),
  play: () => console.log('Playing!'),
  // walk() {
  //   super.walk();
  // },
  // sleep() {
  //   super.sleep();
  // },
}

const dog1 = new Dog('Rex')

Object.assign(dogFunctionality, animalFunctionality)
Object.assign(Dog.prototype, dogFunctionality)

function MixinSection() {
  return (
    <>
      <pre>{dog1.name}</pre>
      <pre>{dog1.bark.toString()}</pre>
      <pre>{dog1.wagTail.toString()}</pre>
      <pre>{dog1.play.toString()}</pre>
      <pre>{Object.keys(dog1)}</pre>
      <pre>{dog1.walk.toString()}</pre>
      <pre>{dog1.sleep.toString()}</pre>
    </>
  );
}


export default MixinSection