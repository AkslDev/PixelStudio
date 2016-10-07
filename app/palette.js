
pixel_studio.palette = {

	init_color: function(colors){
		for (var i = 0; i < colors.length; i++){
			var 	c = $('#color').clone();
				c.css('background-color', colors[i].to_string());
				c.attr('title', colors[i].name);
				$('#palette').append(c);
				$(colors).eq(0);
		}
	}
};
