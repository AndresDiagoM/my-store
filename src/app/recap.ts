const username: string = 'andres';

//una variable puede ser de 2 tipos
let message: string | number = `username es ${username}`;

const sum = (a: number, b: number) => {
  return a + b;
}

sum(10, 20);
// sum(1, 'qqq') //sale el error, ya que espera un numero

//en angular se usa mucho el patron orientado a objetos
//una forma de crear atributos a una clase es con el constructor:
class Person {
  constructor(
    private name: string,
    private username: string,
    private age: number,
  ) {}

  printAge() {
    console.log(this.age);
    this.setType('Old guy');
  }

  private setType(type: string) {
    console.log(type);
  }
}

//otra forma de crear atributos a una clase es declarandolos en la clase:
class Person2 {
  age: number;
  username: string;

  constructor(age: number, username: string) {
    this.age = age;
    this.username = username;
  }
}

//

const andres = new Person('Andres', 'andres11', 30);
//console.log(andres);

const andres2 = new Person2(30, 'andres11');