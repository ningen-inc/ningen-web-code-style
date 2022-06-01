class Foo {
  constructor() {
    this.a = 1;
  }

  // make error
  methodUseThis() {}
}

const foo = new Foo();
console.log(foo);
