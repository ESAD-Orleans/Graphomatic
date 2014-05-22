define(['models/TemplateModel','text!templates/serieux.html'],function(TemplateModel,HTML){
	
	return TemplateModel.extend({
		template:_.template(HTML),
		font:'DINPro-Regular',
		color:'#ff0'
	});
	
});