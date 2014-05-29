define(['models/TemplateModel','text!templates/joyeux.html','templates/effects/YellowWhite'],function(TemplateModel,HTML,YellowWhite){
	
	return TemplateModel.extend({
		template:_.template(HTML),
        afterRebaseDoc:function(c){
        },
		font:{
            '*':'Gravur-Condensed',
            '#title1':'Gravur-CondensedBlack'
        },
		color:{
			'*':'#000',
			'#spaghetti path':'#00ff00'
		},
		effect:{
			'#image':YellowWhite
		}
	});
	
});