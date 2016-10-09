
pixel_studio.palette_color = {

	colors: [],
	color_selected: null,

	select_color: function(color){

		this.color_selected = color;

		$('#palette a').removeClass('selected')
				.eq(color.id)
				.addClass('selected')
				console.log(color.id)
	},
	// Création de la représentation de la palette
	init: function(colors){
		this.colors = colors;

		let 	$colors 	= $('#palette'),
			$one 		= $colors.children('a').detach();

		for (var i = 0; i < colors.length; i++){
			let c = $one.clone();
				c.css('background-color', colors[i].to_string());
				c.attr('title', colors[i].name);
				$('#palette').append(c);
				color 	= this.colors[i];
				color.id	= i;		
			}

		//Couleur par defaut
		this.select_color(this.colors[0]);	

		// Gestion des clics
		var self 	= this;
		$('#palette').on('click','a',function(){
			let index = $ ('#palette a').index(this);
			self.select_color(self.colors[index]);
		});
	}
};

