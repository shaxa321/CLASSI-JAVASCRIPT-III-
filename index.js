class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  generateReport() {
    const arrayReport = "NOME: " + this.name + " COGNOME: " + this.age;
    return arrayReport;
  }
  compare(otherPerson) {
    let result = {};
    if (this.age === otherPerson.age) {
      result = otherPerson.name + " ha la stessa età di " + this.name;
    } else if (this.age <= otherPerson.age) {
      result = "è piu grande " + otherPerson.name;
    } else {
      result = "è piu grande " + this.name;
    }
    return result;
  }
}

const Person1 = new Person("Giovanni", 22);
const Person2 = new Person("Carlo", 23);

console.log(Person1.generateReport());
console.log(Person2.generateReport());
console.log(Person1.compare(Person2));
