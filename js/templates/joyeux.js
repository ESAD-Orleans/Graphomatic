define(['models/TemplateModel','text!templates/joyeux.html','templates/effects/YellowWhite'],function(TemplateModel,HTML,YellowWhite){
	
	return TemplateModel.extend({
        defaults:{
            'rebaseDocDescription':'Au travers d’une composition qui vous fait décoller ',
            'applyFontDescription':'avec une typographie sympa ',
            'applyColorDescription':'et une couleur qui met la banane. ',
            'insertGraphicDescription':'Avec une ambiance de fête. ',
            'applyEffectDescription':'0000 '
        },
        template:_.template(HTML),
        afterRebaseDoc:function(c){
        },
		font:{
            '*':'Gravur-CondensedBlack',
            '#title1':'Gravur-CondensedBlack'
        },
		color:{
			'*':'#000',
            '#titles':'rainbow'
		},
		effect:{
			'#image':YellowWhite,
		}
	});
	
});