class Person {
   constructor(arr){
      this.age = arr.age;
      this.name = arr.name;
   }

   info(){
      console.log("The person is called " + this.name + "and is " + this.age + " years old. ");
   }
}

class Student extends Person{
   constructor(arr){
      super(arr);
      this.gpa = arr.gpa;
   }

   info(){
      console.log("The person is called " + this.name + "and is " + this.age + " years old. " + "He has an overall GPA of " + this.gpa+" in the university.");
   }
}

const person1 = new Person( {age: 44, name: 'Tom' });
person1.info() // The person is called Tom and is 44 years old
const student1 = new Student( {age: 44, name: 'Tom'  , gpa: "4.0"});
student1.info()