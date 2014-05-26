define(['models/SVGFilterEffect','text!templates/effects/Blur.svg'],function(SVGFilterEffect,SVGTemplate){
	return SVGFilterEffect.extend({
		filterId:'BlurFilter',
		filterTemplate:SVGTemplate
	})
});