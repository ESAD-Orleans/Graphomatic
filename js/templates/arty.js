define(['models/TemplateModel','text!templates/arty.html','templates/effects/Arty'],function(TemplateModel,HTML,Arty){
	
	return TemplateModel.extend({
        defaults:{
            'rebaseDocDescription':'arty c’est cool'
        },
		template:_.template(HTML),
		font:{
            '*':'SambaLTStd-Regular',
            '#title1':'SambaLTStd-Expert'
        },
		color:'#fff',
        effect:{
            '#image':Arty
        }
	});
	
});