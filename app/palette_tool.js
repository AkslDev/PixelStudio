pixel_studio.palette_tool = {

	tools: [],
	tools_selected: null,
	select_tools: function(tool){

		this.tools_selected = tool ;

		$('#palette-tool a').removeClass('tool-selected')
				.eq(tool.id)
				.addClass('tool-selected')

	},
	init : function(arg){

		this.tools = arg;

		let 	$tools 		= $('#palette-tool');
			$one 		= $tools.children('a').remove();
			console.log($one)

		for (var i = 0; i <= arg.length -1; i++) {
			let  t = $one.clone();
				$one.children().removeClass();	
			var a = arg[i].iconfa();
			console.log(a,i)
				$one.children().addClass(a);
				$('#palette-tool').append(t);
				t.attr('title', arg[i].name);
				arg[i].id	= i;
		}		
		
		//Outils par defaut
		this.select_tools(this.tools[0]);	

		// Gestion des clics
		var self 	= this;
		$('#palette-tool').on('click','a',function(){
			let index = $('#palette-tool a').index(this);
			console.log(self.tools[index]);
			self.select_tools(self.tools[index]);

		});	


	}	
}
