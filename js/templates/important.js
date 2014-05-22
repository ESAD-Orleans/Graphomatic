define(['models/TemplateModel','text!templates/important.html'],function(TemplateModel,HTML){
	
	return TemplateModel.extend({
		template:_.template(HTML),
		font:'DINPro-Regular',
		color:'#ff0'
	});
	
});