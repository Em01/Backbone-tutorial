// // var SongView = Backbone.View.extend({
// // 	render: function(){  //where we implement the rendering logic
// // 		this.$el.html("Hello World"); //case jquery object that contains the views DOM element

// // 		return this;
// // 	}
// // });

// // var SongView = new SongView({ el: "#container" }); //specifying which view the dom should attach to-responsible in this case for that of the container
// // songView.render();

// var SongView = Backbone.View.extend({

// 	tagName: "span",

// 	className: "song",

// 	id: "1234",

// 	attributes: {
// 		"data-genre": "Jazz"
// 	},

// 	render: function(){
// 		this.$el.html("Hello World");

// 		return this;
// 	}
// });

// var songView = new SongView();
// songView.render();

// $("#container").html(songView.$el);





//passing data to views
// var Song = Backbone.Model.extend();

// var Songs = Backbone.Collection.extend({
// 	model: Song
// });

// var SongView = Backbone.View.extend({

// 	render: function() {
// 		this.$el.html(this.model.get("title"));

// 		return this;
// 	}
// });

// var SongsView = Backbone.View.extend({
// 	render: function(){
// 		var self = this;

// 		this.model.each(function(song){
// 			var songView = new SongView({ model: song });
// 			self.$el.apprend(songView.render().$el);
// 		});

// 	}
// });

// var songs = new Songs([
// 	new Song({ title: "Blue in Green" }),
// 	new Song({ title: "Title 2"}),
// 	new Song({ title: "All blues"})
// 	]);

// var songsView = new SongsView({ el: "#songs", model: songs });
// songsView


//Handling DOM events

// var Song = Backbone.Model.extend();

// var SongView = Backbone.View.extend({
// 	events: {
// 		"click": "onClick",
// 		"click .bookmark": "onClickBookmark",
// 	},

// 	onClick: function(){
// 		console.log("Listen Clicked");
// 	},

// 	onClickBookmark: function(e){
// 		e.stopPropagation();

// 		console.log("Bookmark Clicked");
// 	},

// 	render: function() {
// 		this.$el.html(this.model.get("title") + " <button>Listen</button> <button class='bookmark</button>");

// 		return this;
// 	}
// });

// var song = new Song({ title: "Blue in Green" });

// var SongView = new SongView({ el: "#container", model: song });
// songsView.render();



//Handling Model Events
// var Song = Backbone.Model.extend({
// 	defaults: {
// 		listeners: 0
// 	}
// });

// var SongView = Backbone.View.extend({
// 	initialize: function(){
// 		this.model.on("change", this.render, this);
// 	},

// 	render: function(){
// 		this.$el.html(this.model.get("title") + " -listeners: " + this.model.get("listeners"));

// 		return this;
// 	}
// });

// var song = new Song({ title: "Blue in green" });

// var songView = new SongView({ el: "#container", model: song });
// songView.render();






//Templating

var Song = Backbone.Model.extend();

var SongView = Baclbone.View.extend({
	render: function (){
		var template = _.template($("#songTemplate").html());
		var html = template(this.model.toJSON());
		this.$el.html(html);

		return this;
	}
});

var song = new Song({ title: "Blue in Green" });

var songView = new SongView({ el: "#container", model: song, plays: 1110 });
songView.render();