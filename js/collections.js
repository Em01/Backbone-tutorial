// Sample collection methods
var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
	model: Song
});

var songs = new Songs();

songs.add(new Song({ title: "Song 1", genre: "Jazz", downloads: 110 }), { at: 0 }); //can specify index

songs.push( new Song({ title: "Song 2", gnere: "Jazz", downloads: 90 }));

var jazzSongs = songs.where({ genre: "Jazz" });

var firstJazzSong = songs.findWhere({ genre: "Jazz" });  //only first instance

console.log("Jazz Songs", jazzSongs);

console.lof("First Jazz Song", firstJazzSong);

//underscore provides methods

var filteredSongs = songs.where({ genre: "Jazz", title: "Song 2" });
console.log("Filtered Songs", filteredSongs); //multiple filters

//filter methods

var topDownloads = songs.filter(function(song){
	return song.get("downloads") > 100;
});

console.log("Top Downloads", topDownloads);

//each method
songs.each(function(song){
	console.log(song);
});

//connecting to a server

var Songs = Backbone.Collection.extend{(
	model: Song
	url: "/api/songs"
)};

var songs = new Songs();
songs.fetch();
