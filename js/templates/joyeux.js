define(['models/TemplateModel','text!templates/joyeux.html','templates/effects/YellowWhite'],function(TemplateModel,HTML,YellowWhite){
	
	return TemplateModel.extend({
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