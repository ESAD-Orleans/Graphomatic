define(['models/TemplateModel','text!templates/joyeux.html','templates/effects/Blur'],function(TemplateModel,HTML,Blur){
	
	return TemplateModel.extend({
		template:_.template(HTML),
		font:'Gravur-Condensed',
		color:{
			'*':'#ccff00',
			'#spaghetti path':'#00ff00'
		},
		effect:{
			'#img':Blur
		}
	});
	
});