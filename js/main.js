// var Vehicle = Backbone.Model.extend({
// 	urlRoot: "/api/vehicles",
// 	validate: function(attrs){
// 		if (!attr.registrationNumber)
// 			return "Registration required.";
// 	},
// 	start: function() {
// 			console.log("Vehicle started")
// 	},
// });


// var Car = Vehicle.extend({
//   start: function() {
//     console.log("Car with registration number " + this.get('registrationNumber') + " started.");
//   }
// });

// var car = new Car({
// 	registrationNumber: "XLI887",
// 	color: "Blue"
// });


var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
	model: Song
});

var songs = new Songs();

songs.add(new Song({ title: "Song 1", genre: "Jazz", downloads: 110}), { at: 0});

songs.push(new Song({ title: "Song 2", genre: "Jazz", downloads: 90}));

var jazzSongs = songs.where({ genre: "Jazz" });

var firstJazzSong = songs.findWhere({ genre: "Jazz" });
