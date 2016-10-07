
pixel_studio.palette = {

	colors: [],
	color_selected: null,

	select_color: function(colors){
		this.color_selected = colors;

	},
	// Création de la représentation de la palette
	init_color: function(colors){
		this.colors = colors;
		for (var i = 0; i < colors.length; i++){
			var 	c = $('#color').clone();
				c.css('background-color', colors[i].to_string());
				c.attr('title', colors[i].name);
				$('#palette').append(c);
		}

		//Couleur par defaut
		this.select_color(this.colors[0]);
		console.log('Palette: colors ready');
	}
};

