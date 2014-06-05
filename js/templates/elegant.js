define(['models/TemplateModel','text!templates/elegant.html','templates/effects/Elegant'],function(TemplateModel,HTML,Elegant){
	
	return TemplateModel.extend({
		template:_.template(HTML),
		font:{
			'*':'BaskervilleMTStd-Regular',
			'#title1':'BaskervilleMTStd-BoldIt'
		},
		color:{
			'#titles':'#000'
		},
        effect:{
            '#signe':Elegant
        }
	});
	
});