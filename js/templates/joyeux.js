define(['models/TemplateModel','text!templates/joyeux.html','models/SVGFilterEffect'],function(TemplateModel,HTML,SVGFilterEffect){
	
	return TemplateModel.extend({
		template:_.template(HTML),
		font:'Gravur-Condensed',
		color:{
			'*':'#ccff00',
			'#spaghetti path':'#00ff00'
		},
		effect:{
			'#img':SVGFilterEffect
				
		}
	});
	
});