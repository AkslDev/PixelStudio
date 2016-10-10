class Tool {

	/**
	 * Tool
	 * @param  {string} name      Nom de l'outil
	 * @param  {[type]} icon_file Icone de l'outil
	 */
	constructor(name,icon){
		this. name	=	name;
		this.icon	= 	icon;
	}

	iconfa(){
		let  	icon_fa   = 'fa ';
			icon_fa += this.icon;
			icon_fa += ' fa-2x';
		return(icon_fa);
	}

}