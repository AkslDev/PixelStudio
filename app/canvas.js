pixel_studio.canvas = {

	screen: {
		width: 		0,
		height: 		0
	},
	pixel_dimension: 	0,

	nb_pixel_width: 	0,
	/**
	 * Préparation de la zone de dessin
	 * @param  {string}  div_id  			Nom de la div ou le canvas sera placé
	 * @param  {number} width  			Largeur exact en Pixel Ecran
	 * @param  {number} height  			Hauteur max en Pixel Ecran
	 * @param  {number} nb_pixel_width  	Nb de pixel en Largeur
	 */
	init : function(div_id, width, height,nb_pixel_width){
		
		this.div_id 		= 	id
		this.width 		= 	innerWidth();
		this.height 		= 	innerHeight();
		this.nb_pixel_width 	= 	10;



		window.onload = function(){
		    	var 	canvas = document.getElementById('canvas');
		        		if(!canvas){
		            		alert("Impossible de récupérer le canvas");
		            		return;
		        		}

		    	var 	context = canvas.getContext('2d');
		       		if(!context){
		            		alert("Impossible de récupérer le context du canvas");
		            		return;
		        		}
		}
	}

}
