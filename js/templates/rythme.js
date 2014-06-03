define(['models/TemplateModel','text!templates/rythme.html','text!templates/fonts.css'],function(TemplateModel,HTML,fonts){
	
	return TemplateModel.extend({
        /*rebaseDoc:function(c){
            TemplateModel.prototype.rebaseDoc(c);
        },*/
        defaults:{
           // 'rebaseDocDescription':'une composition rythmée',
           // 'applyFontDescription':'avec une typographie rythmée'
        },
        afterRebaseDoc:function(){
            var t = $('<style>'+_.template(fonts)({font:'DINPro-Black'})+'</style>');
          $('#doc').append(t);
        },
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