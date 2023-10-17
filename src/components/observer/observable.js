class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(f) {
    this.observers.push(f);
  }

  unsubscribe(f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }

  notify(data) {
    console.log('notify', this.observers)
    this.observers.forEach(observer => observer(data));
  }
}

const observable = new Observable();

export default observable