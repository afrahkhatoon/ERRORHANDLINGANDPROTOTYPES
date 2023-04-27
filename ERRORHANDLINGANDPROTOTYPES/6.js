/*
8. Adding a Method to a Prototype.
Create a prototype object called Student with a property name. Add a method called printDetails to the
prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the
name "Mithun" and call the printDetails method.
*/


class calculator {
    static add(num1, num2){
        return num1 + num2;
    }
}

const result = calculator.add(10, 20);
console.log(result);