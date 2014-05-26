define(['models/TemplateModel','text!templates/impactant.html'],function(TemplateModel,HTML){
	
	return TemplateModel.extend({
		template:_.template(HTML),
		font:'DINPro-Regular',
		color:'#000'
	});
	
});