define(['models/TemplateModel','text!templates/serieux.html','templates/effects/BlackAndWhite','templates/effects/Serieux'],
    function(TemplateModel,HTML,BlackAndWhite,Serieux){
	
	return TemplateModel.extend({
		template:_.template(HTML),
		font:{
            '*':'DINPro-Regular',
            '#title1':'DINPro-Bold'
        },
		color:'#000',
        effect:{
            '#image':BlackAndWhite,
            '#title1':Serieux
        }
	});
	
});