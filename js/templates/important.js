define(['models/TemplateModel','text!templates/important.html'],function(TemplateModel,HTML){
	
	return TemplateModel.extend({
		template:_.template(HTML),
		font:{
            '*':'DINPro-Regular',
            '#title1':'AuthenticStencilCom-Black'
        },
		color:'#ff0'
	});
	
});