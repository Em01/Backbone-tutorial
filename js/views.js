// var SongView = Backbone.View.extend({
// 	render: function(){  //where we implement the rendering logic
// 		this.$el.html("Hello World"); //case jquery object that contains the views DOM element

// 		return this;
// 	}
// });

// var SongView = new SongView({ el: "#container" }); //specifying which view the dom should attach to-responsible in this case for that of the container
// songView.render();

var SongView = Backbone.View.extend({

	tagName: "span",

	className: "song",

	id: "1234",

	attributes: {
		"data-genre": "Jazz"
	},

	render: function(){
		this.$el.html("Hello World");

		return this;
	}
});

var songView = new SongView();
songView.render();

$("#container").html(songView.$el);