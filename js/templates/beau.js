define(['models/TemplateModel','text!templates/beau.html','templates/effects/Venus'],function(TemplateModel,HTML,Venus){
	
	return TemplateModel.extend({
        defaults:{
            'rebaseDocDescription':'Parce qu’elle est belle. ',
            'applyFontDescription':'Parce qu’elle est belle tout simplement. ',
            'applyColorDescription':'Parce qu’elle est belle tout simplement. ',
            'applyEffectDescription':'Parce qu’elle est belle tout simplement. '
        },
		template:_.template(HTML),
		color:'transparent',
		effect:{
			'#image':Venus
		}
	});
	
});