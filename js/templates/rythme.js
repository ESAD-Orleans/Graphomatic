define(['models/TemplateModel','text!templates/rythme.html','text!templates/fonts.css','templates/effects/RepeatImage'],function(TemplateModel,HTML,fonts,RepeatImage){
	
	return TemplateModel.extend({
        defaults:{
            'rebaseDocDescription':'Grace à une composition musicale ',
            'applyFontDescription':'avec une typographie dynamique ',
            'applyColorDescription':'et une couleur qui fait du bruit. ',
            'insertGraphicDescription':' ',
            'applyEffectDescription':' '
        },
        afterRebaseDoc:function(){
            var t = $('<style>'+_.template(fonts)({font:'FagoCoLf-ExtraBoldItalicCaps'})+'</style>');
            $('#doc').append(t);
        },
		template:_.template(HTML),
		font:{
            '*':'DINPro-Regular',
            '#title1':'FagoCoLf-ExtraBoldItalicCaps'
        },
		color:{
            '*':'#000',
            '#title1':'#ffff00'
        },
        effect:{
            '#image':RepeatImage
        }
	});
	
});