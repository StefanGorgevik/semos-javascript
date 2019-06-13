	//DAYS ON EARTH CALCULATOR

		// var age = prompt("Enter your age!");
		// var daysInAYear = 365;
		// var daysOnEarth = daysInAYear * age; 
		// alert("You are" + " " + daysOnEarth + " days old!");



	// var a = 8;
	// console.log(a);

	// var b = 3;
	// console.log(b);

	// var inc = a+=1;
	// console.log(inc);
	// console.log(a);

	// var dec = a-=1;
	// console.log(dec);
	// console.log(a);

	// var div = a/b;
	// console.log(div);
	// console.log(a);

	// var mul = a*b;
	// console.log(mul);
	// console.log(a);

	// var add = a+=5;
	// console.log(add);
	// console.log(a);

	// var sub = a-=4;
 // 	console.log(sub);
 // 	console.log(a);



//FACTORIAL function

// function factorial(num) {
// 	var result = 1;
// 	for(var i = 2; i <= num; i++) {
// 		result *= i;
// 	}
// 	return result;
// }


//FACTORIAL version 2

// function factorial(num) {
// 	var result = num;
// 	for(var i = num-1; i >= 1; i--) {
// 		result = result * i;
// 	}
// 	return result;
// }

//FACTORIAL normal

// var num = prompt("Enter a number!")
// var result = 1;
// for (var i = 2; i <= num; i++) {
// 	result *= i;
// }
// alert(result);




//Print all numbers between -10 and 19;

// var num = -10;
// while(num <=19) {
// 	console.log(num);
// 	num++;
// }



//Print all even numbers between 10 and 40

// var a = 10;
// while(a <= 40) {
// 	if(a % 2 == 0) {
// 		console.log(a);
// 	}
// 	a++;
// }

//Print all odd numbers between 300 and 333 

// var b = 300;
// while(b <=333) {
// 	if(b % 2 !== 0) {
// 		console.log(b);
// 	}
// 	b++;
// }

//Print all numbers dividible by 3 and 5 between 10 and 50

// var c = 10;
// while (c < 51) {
// 	if(c % 5 ==0 && c % 3 == 0) {
// 		console.log(c);
// 	}
// 	c++;
// }


// Repeat this pattern 01234 (make it 01234 01234 01234)

// var i = 0;
// var repeat = 1;
// while(i < 5) {
// 	console.log(i);
// 	i++;
// if(i > 4) {
// 	repeat++;
// 	i=0;
// }
// if(repeat > 3) {
// 	break;
// }
// }

// var repeat = 1;
// for(var i = 0; i < 5; i++){
// 	if(i > 4) {
// 		repeat++;
// 		i = 0;
// 	}
// 	if(repeat > 3){
// 		break;
// 	}
// }

//Pattern 111 222 333 444 

// for(var i=1; i<5; i++){
// 	var repeat = 0;
// 	while(repeat<3){
// 		console.log(i);
// 		repeat++;
//     }
//     console.log(" ");



//isEven function


// function isEven(num) {
// 	if(num % 2 === 0) {
// 		console.log(true);
// 	}
// 	else {
// 		console.log(false);
// 	}
// }

// kebabToSnake function 


// function kebabToSnake(str) {
// 	var newStr = str.replace(/-/, "_");
// 	return newStr;
// }


//Create a program where the last 3 digits of a number are added together

var result;
var num = 111;

for(var i = 0; i = num; i++) {
		result = result += i;
	console.log(result);
}
