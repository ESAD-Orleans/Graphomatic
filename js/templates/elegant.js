define(['models/TemplateModel','text!templates/elegant.html','templates/effects/Elegant'],function(TemplateModel,HTML,Elegant){
	
	return TemplateModel.extend({
        defaults:{
            'rebaseDocDescription':'Car elle propose une composition qui se distingue par sa simplicité, ',
            'applyFontDescription':'avec une typographie des plus gracieuses, ',
            'applyColorDescription':'en noir pour le sérieux. ',
            'insertGraphicDescription':' ',
            'applyEffectDescription':'Et une image qui se manifeste discrètement tout en finesse. '
        },
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