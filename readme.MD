[![Coverage Status](https://coveralls.io/repos/github/DenisCodes/Calculator2/badge.svg?branch=master)](https://coveralls.io/github/DenisCodes/Calculator2?branch=master)
[![Build Status](https://travis-ci.com/DenisCodes/Calculator2.svg?branch=master)](https://travis-ci.com/DenisCodes/Calculator2)
OOP (Object-Oriented Programming) is based on 4 pillars:

1- Abstraction:

The idea of simplifying objects by making other objects, so an object uses other objects to complete it's objective.
For example take a bike. you don't want to just make one object bike. You want to braeak it down into smaller objects 
that use each other. Like a wheele is used by a chain that is changed by a gear system which is spun by pedals. Instead 
of just a bike.

2- Encapsulation

Multiple object can server a similar purpose, but are not identical. Inheritance suggests that you can make that similar 
object a child of the other. This allows for multiple objects to be reuse code that is written for other objects, but 
still add their own unique differences.

4- Polymorphism:

Polymorphism means “many shapes” in Greek. This is the idea that you might want to add a function to a parent class, and 
you want the child class to use it the same way. Using polymorphism you can make the child classes use the function like 
the parent class. While maintaining all the child calss's initial functions.

S.O.L.I.D.

1- S – Single Responsibility Principle:

the idea that each funstion has only 1 goal. It can be hard to determin, but it is very important and useful to make 
your code more simple and understandable. Instead of having function that will subtract or multiple based on input. 
Make seprate functions like.

function add(a,b){return a+b}
function subtract(a,b){return a-b}

2- O – Open-Closed Principle:

The idea that your finished code should not be changed for others  to use. That you functions should be universal and 
not rely on hard coded data. That your code is plug and play.

3- L – Liskov Substitution Principle:

this principle only applies to statically typed languages like java. Liskov Substitution Principle allows replacing part 
of the parent class with a child class

```
class Calculator{
calculations = []
    function constructor(a,b){
    }
    function subtract(){
        return this.a - this.b;
    }
} class CoolCalculator extends Calculator {
    constructor (x,y) {
        super(x, y);
    }
}
```

4- I – Interface Segregation Principle:

The idea that if your code is used then it should be the bare essentials. Put unnecessary functions and calls into other 
function to simplify the amount of calls. That way your code is easy and simple to use by others.

5- D – Dependency Inversion Principle:

Your code should be simple with simple implementation. Meaning that if someone wants to refactor part of your code it 
should be very easy and hassle free.

OOP Design Patterns:

Creational patterns:

Prototype:
As far as prototyping is concerned for small projects it is basically just a copy. This allows for the removal of all 
statics parts in Calculator.js. I implemented it using the copy function bellow.
```
Copy(){
    let newCalc = new Calculator();
    newCalc.Calculations = this.Calculations;
    return newCalc;
}
```

Structural patterns:

Facade:
The idea of simplifying code for the user by hiding all complex parts behind simple function calls. Bellow we see in our 
test the only thing the user calls is Calculation(1,2,op).
```
test('Test Get results for Sum function', () => {
    let op = Sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(3);
});
```
Behind that one line the complex code bellow is hidden. 
```
class Calculation {
    constructor(a, b, op) {
        this.a = a;
        this.b = b;
        this.op = op;
    }
    GetResults() {
        return this.op(this.a,this.b)
    }
}
function Sum(a,b){
    return a+b;
}
class Calculator {
    static Calculations = []
    static Sum(a,b) {
        let calculation = new Calculation(a,b,Sum);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
```

Behavioral Patterns:

Strategy:
The idea that instead opf having one function do all operation, you break up the operations and call the needed one. As 
seen bellow in the calculation class, we have it set up so any operation can be used.

```
class Calculation {
    constructor(a, b, op) {
        this.a = a;
        this.b = b;
        this.op = op;
    }
    GetResults() {
        return this.op(this.a,this.b)
    }
}
```
You can split up the operations to their own individual functions. As seen bellow, we broke sum out of the calculation 
class.
```
function Sum(a,b){
    return a+b;
}
```
Bellow we put all the parts together to actually function.
```
class Calculator {
    static Calculations = []
    static Sum(a,b) {
        let calculation = new Calculation(a,b,Sum);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
```