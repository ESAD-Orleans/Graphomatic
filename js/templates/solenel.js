define(['models/TemplateModel','text!templates/solenel.html','templates/effects/BlackAndWhite'],function(TemplateModel,HTML,BlackAndWhite){
	
	return TemplateModel.extend({
		template:_.template(HTML),
		font:'DINPro-Regular',
		color:'#ddd',
		effect:{
			'#img':BlackAndWhite
		}
	});
	
});