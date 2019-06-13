// function areaRectangle (length,width) {
// 	return length * width;
// }

// function areaTriangle(base, height) {
// 	return (base * height) /2;
// }

// var p;
// function areaCircle(p, radius) {
// 	p = 3.14;
// 	var rad = radius * radius;
// 	console.log(rad);
// 	return rad * p;
// }



// var name = prompt("Enter your name!");
 
// var prva = name.charAt(name.length-1.5);
// console.log(prva);
// var posledna = name.charAt(name.length-1);
// console.log(posledna);

// or 

// var ime = prompt("Enter your name");
// console.log(ime[0]);
// console.log(ime[ime.length-1]);


// function secretNum() {
// var secretNumber = 7;

// for(var i = 0; i < 3; i++) {
// var ask = prompt("Try to guess the secret number!");
// ask = parseInt(ask);

// if(ask !== secretNumber) {
// 	var b = ask + " is correct!";
// 	alert(b);
// 	break;
// }

// else {
// 	alert("You are wrong!");
// }
// }
// return b;
// }
// secretNum();


// function secretNum() {
// var secretNumber = 7;

// for(var i = 0; i < 3; i++) {
// var ask = prompt("Try to guess the secret number!");
// ask = parseInt(ask);

// if(ask === secretNumber) {
// 	var b = ask + " is correct!";
// 	alert(b);
// 	break;
// }

// else {
// 	alert("You are wrong!Try again!");

// }
// }
// return b;
// }
// secretNum();

// class Male {
//                constructor(name,age) {
//                    this.name = prompt("Enter name!");
//                    this.age = prompt("Enter age!");
//                }

//                printInfo() {
//                    console.log("The name is " + this.name + " and the age is " + this.age)
//                }
//            }

//            class Female extends Male{
//              constructor(name,age){
//              	super(name,age)

//              }
//            }

//            class Date {
//                constructor(male = new Male(),female = new Female() ) {
//                    this.male = male;
//                    this.female = female;

//                }
//                compare() {
//                    if(Math.abs(this.male.age - this.female.age)<= 5) {
//                        alert(this.male.name + " is "+ this.male.age + ", " + this.female.name + " is " + this.female.age + ", They can date!");
//                        // console.log("They can date!");
//                    }
//                    else {
//                    alert(this.male.name + " is "+ this.male.age + ", " +this.female.name +" is " + this.female.age + ", They can't date!")
//                    // console.log("They can't date!")
//                    }
//                }
//            }
//            var sredba = new Date();
//            sredba.compare()
