define(['models/SVGFilterEffect','text!templates/effects/Saturate3.svg'],function(SVGFilterEffect,SVGTemplate){
	return SVGFilterEffect.extend({
		filterId:'Saturate3',
		filterTemplate:SVGTemplate
	})
});