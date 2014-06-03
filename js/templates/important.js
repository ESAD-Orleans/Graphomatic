define(['models/TemplateModel','text!templates/important.html','text!templates/fonts.css','templates/effects/ExtrudeText'],function(TemplateModel,HTML,fonts,ExtrudeText){
	
	return TemplateModel.extend({
		template:_.template(HTML),
        afterRebaseDoc:function(){
            var t = $('<style>'+_.template(fonts)({font:'AuthenticStencilCom-Black'})+'</style>');
            $('#doc').append(t);
        },
		font:{
            '*':'AuthenticStencilCom-Black'
        },
		color:{
            '#title1':'#ff0'
        },
        effect:{
            '#title1':ExtrudeText
        }
	});
	
});