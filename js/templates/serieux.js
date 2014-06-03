define(['models/TemplateModel','text!templates/serieux.html','templates/effects/BlackAndWhite'],function(TemplateModel,HTML,BlackAndWhite){
	
	return TemplateModel.extend({
		template:_.template(HTML),
		font:{
            '*':'DINPro-Regular',
            '#title1':'DINPro-Bold'
        },
		color:'#000',
        effect:{
            '#img':BlackAndWhite
        }
	});
	
});