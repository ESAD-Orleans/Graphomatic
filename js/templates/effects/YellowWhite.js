define(['models/SVGFilterEffect','text!templates/effects/YellowWhite.svg'],function(SVGFilterEffect,SVGTemplate){
	return SVGFilterEffect.extend({
		filterId:'YellowWhite',
		filterTemplate:SVGTemplate
	})
});