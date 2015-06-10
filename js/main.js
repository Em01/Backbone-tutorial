var Vehicle = Backbone.Model.extend({
	urlRoot: "/api/vehicles",
	validate: function(attrs){
		if (!attr.registrationNumber)
			return "Registration required.";
	},
	start: function() {
			console.log("Vehicle started")
	},
});


var Car = Vehicle.extend({
  start: function() {
    console.log("Car with registration number " + this.get('registrationNumber') + " started.");
  }
});

var car = new Car({
	registrationNumber: "XLI887",
	color: "Blue"
});

var Vehicle = Backbone.Collection.extend({
	model: Vehicle,
});

var vehicles = new Vehicles([
	new Vehicle({ registrationNumber = "XLI887", color = "Blue"}),
	new Vehicle({ registrationNumber = "ZNP123", color = "Blue"}),
	new Vehicle({ registrationNumber = "XUV456", color = "Gray"})
	));

//find all the blue cols and console log
var blueCars = vehicles.where({ color: "Blue" });
console.log(blueCars);

// Find the car with the registration number XLI887 and log it in the console
var xliCar = vehicles.findWhere({ registrationNumber: "XLI887" });
console.log(xliCar); 

// Remove that car from the collection
vehicles.remove(xliCar);

// Convert the collection to a JSON object and log it in the console
console.log(vehicles.toJSON());

// Iterate through the collection and log each car in the console
vehicles.each(function(vehicle) {
	console.log(vehicle);
});

var Vehicle = Backbone.View.extend({

	tagNAme: "li",

	className: "vehicle",

	attributes: {
		"data-color": "red"
	},

	events: {
		"click button": "onClickDelete"
	},

	onClickDelete: function() {
		this.remove(vehicle);
	},

	render: function() {
		this.$el.html(this.model.get("registrationNumber") + " <button>Delete</button>");

		return this;
	}
});
	
