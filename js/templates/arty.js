define(['models/TemplateModel','text!templates/arty.html','templates/effects/Arty'],function(TemplateModel,HTML,Arty){
	
	return TemplateModel.extend({
        defaults:{
            'rebaseDocDescription':'Par le biais d’une composition qui nous rappelle les méandres de l’inconscient ',
            'applyFontDescription':'avec une typographie ornementale des plus fantaisistes, ',
            'applyColorDescription':'en blanc tout simplement. ',
            'insertGraphicDescription':'La trace du geste fougueux de l’artiste s’y inscrit aussi. ',
            'applyEffectDescription':'Et enfin, un traitement appliqué à l’image qui saura la rendre mystérieuse et singulière. '
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