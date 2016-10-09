var pixel_studio = {

	// Fonction Init
	init : function(){
		// Couleur de la Palette
		let colors =[
			new Color('Noir', [22,22,22]),
			new Color('Bleu', [0,153,255]),
			new Color('Vert', [43,173,41]),
			new Color('Jaune', [255,229,0]),
			new Color('Orange', [255,140,0]),
			new Color('Red', [214,32,32])
		];
		this.palette_color.init(colors);

		// Outils de la Palette
		let tools = [
			new Tool ('Crayon', 'pencil'),
			new Tool ('Pipette', 'eyedropper'),
			new Tool ('Gomme', 'eraser'),
			new Tool ('Crayon', 'pencil'),

		];
		this.palette_tool.init(tools);

		console.log('PixelStudio is initiated and ready')
	}
};

console.log("PixelStudio Started");