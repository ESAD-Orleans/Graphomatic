define(['models/TemplateModel','text!templates/arty.html','templates/effects/Saturate3'],function(TemplateModel,HTML,Saturate3){
	
	return TemplateModel.extend({
		template:_.template(HTML),
		font:{
            '*':'SambaLTStd-Regular',
            '#title1':'SambaLTStd-Expert'
        },
		color:'#fff',
        effect:{
            '#image':Saturate3
        }
	});
	
});