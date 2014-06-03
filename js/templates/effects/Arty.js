define(['models/SVGFilterEffect','text!templates/effects/Arty.svg'],function(SVGFilterEffect,SVGTemplate){
	return SVGFilterEffect.extend({
		filterId:'Arty',
		filterTemplate:SVGTemplate,
        afterRun:function(){
            var g= $('<g transform="translate(210,300) rotate(180) translate(-210,-300)"></g>');
            $('#image').wrap(g);
        }
	})
});