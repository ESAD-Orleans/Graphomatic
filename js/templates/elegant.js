define(['models/TemplateModel','text!templates/elegant.html'],function(TemplateModel,HTML){
	
	return TemplateModel.extend({
		template:_.template(HTML),
		font:{
			'*':'BaskervilleMTStd-Regular',
			'#title1':'BaskervilleMTStd-BoldIt'
		},
		color:{
			//'*':'#ff00ff',
			'#title1':'#338811',
			'#title2':'#00ff00'
		},
		graphic:{
		}
	});
	
});