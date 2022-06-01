class Bar {
  a: number;

  constructor() {
    this.a = 1;
  }

  // make error
  methodUseThis() {}
}

const bar = new Bar();
console.log(bar);
