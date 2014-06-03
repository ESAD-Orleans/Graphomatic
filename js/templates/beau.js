define(['models/TemplateModel','text!templates/beau.html','templates/effects/Venus'],function(TemplateModel,HTML,Venus){
	
	return TemplateModel.extend({
        defaults:{
            //  'rebaseDocDescription':'une image simple'
        },
		template:_.template(HTML),
		color:'transparent',
		effect:{
			'#image':Venus
		}
	});
	
});