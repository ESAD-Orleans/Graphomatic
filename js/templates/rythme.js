define(['models/TemplateModel','text!templates/rythme.html'],function(TemplateModel,HTML){
	
	return TemplateModel.extend({
        /*rebaseDoc:function(c){
            TemplateModel.prototype.rebaseDoc(c);
        },*/
		template:_.template(HTML),
		font:{
            '*':'DINPro-Regular',
            '#title1':'DINPro-Black'
        },
		color:{
            '*':'#000',
            '#title1':'#ffff00'
        }
	});
	
});