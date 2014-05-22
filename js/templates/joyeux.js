define(['models/TemplateModel','text!templates/joyeux.html'],function(TemplateModel,HTML){
	
	return TemplateModel.extend({
		template:_.template(HTML),
		font:'Gravur-Condensed',
		color:'#ff0000'
	});
	
});