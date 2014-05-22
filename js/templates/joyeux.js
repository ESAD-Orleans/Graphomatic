define(['models/TemplateModel','text!templates/joyeux.html'],function(TemplateModel,HTML){
	
	return TemplateModel.extend({
		template:_.template(HTML),
		font:'Gravur-Condensed',
		color:{
			'*':'#ccff00',
			'#spaghetti path':'#00ff00'
		},
		effect:{
			'#image':function(){
				console.log(this);
				//$('#doc svg defs').append($('<filter id="blurFilter"><feGaussianBlur stdDeviation="10 10"/></filter>'));
				//$(this).attr('filter',"url('#blurFilter')");
			}
		}
	});
	
});