	var firstObject = {name:"stefan", 
				   lastname:"Gorgevik"};

		firstObject.age = "24";
		firstObject.city = "Veles";
		console.log(firstObject);
		delete firstObject.city;

	var array = ["stefan", 1, "Gorgevik"];		

		console.log(firstObject);
		console.log(array);
		console.log(firstObject["name"]); // same
		console.log(firstObject.name);  // same


	var copy = firstObject;
	copy.name = "Stef";
	console.log(copy);
	console.log(firstObject);
	firstObject.name = "StefaNN";
	console.log(copy);
	console.log(firstObject);
	var bb = copy.name;
	console.log(bb);


	var objects = {name:"stefan", 
				   lastname:"Gorgevik"}

	var array1 = [objects.name, objects.lastname];
	console.log(array1);

	var movie = {
		name: "Pulp Fiction",
		year: 1994,
		genre: "Crime",
		awards: ["Palme D'","a"]
	}
	movie.awards.push("Oscar")
	console.log(movie);

	console.log("The name of the movie is " 
		+ movie.name + 
		", the year is " + movie.year + 
		", the award is " + movie.awards[0] + ".");

