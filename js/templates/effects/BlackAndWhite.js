define(['models/SVGFilterEffect','text!templates/effects/BlackAndWhite.svg'],function(SVGFilterEffect,SVGTemplate){
	return SVGFilterEffect.extend({
		filterId:'BlackAndWhite',
		filterTemplate:SVGTemplate
	})
});