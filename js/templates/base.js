define(['models/TemplateModel','text!templates/base.html'],function(TemplateModel,HTML){
	
	return TemplateModel.extend({
		template:_.template(HTML)
	});
	
});