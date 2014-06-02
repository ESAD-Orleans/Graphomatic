define(['models/TemplateModel','text!templates/elegant.html'],function(TemplateModel,HTML){
	
	return TemplateModel.extend({
		template:_.template(HTML),
		font:{
			'*':'BaskervilleMTStd-Regular',
			'#title1':'BaskervilleMTStd-BoldIt'
		},
		color:{
			'#titles':'#000'
		},
		graphic:{
		}
	});
	
});