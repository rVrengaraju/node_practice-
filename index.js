var rect = require("./rectangle");



function solveRect(l,b){
	if(l<0 || b<0){
		console.log("Values must be 0 or greater");
		console.log("Length =" + l + "Width =" + b );
	}
	else{
		console.log("perimeter: " + rect.perimeter(l,b) + " inches");
		console.log("area: " + rect.area(l,b) + " inches");
	}
}

solveRect(1,2);
