define(['jquery','underscore','backbone','models/EffectModel'],function($,_,Backbone,EffectModel){
	
	return EffectModel.extend({
		run:function(){
		},
		setup:function(){
			var svgDefs = $('#doc svg defs').get(0);
			var filter = document.createElementNS("http://www.w3.org/2000/svg", "filter")
				f = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
			f.attributes.value="10 10";
			filter.appendChild(f);
			ff = f;
			$(svgDefs).append(filter);
			//console.log(svgDefs,filter);
		}
	});
		
})