define(['models/TemplateModel','text!templates/dynamique.html'],function(TemplateModel,HTML){
	
	return TemplateModel.extend({
		template:_.template(HTML),
		font:'DINPro-Regular',
		color:'#444'
	});
	
});