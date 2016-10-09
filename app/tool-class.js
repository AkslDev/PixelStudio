class Tool {

	/**
	 * Tool
	 * @param  {string} name      Nom de l'outil
	 * @param  {[type]} icon_file Icone de l'outil
	 */
	constructor(name,icon_id){
		this. name	=	name;
		this.icon_id	= 	icon_id;
	}

}
	var 	pen 		=  	new Tool('Crayon','#pen');
		paint		=	new Tool('Pot','#paint');
		eraser		=	new Tool('Gomme','#eraser');