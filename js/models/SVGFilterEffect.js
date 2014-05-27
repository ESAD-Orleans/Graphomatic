define(['jquery','underscore','backbone','models/EffectModel'],function($,_,Backbone,EffectModel){
	
	return EffectModel.extend({
		filterId : 'defaultFilter',
		filterTemplate : '',
		run:function(){
			var g = $('<g class="filter" filter="url(#'+this.filterId+')"></g>');
			this.$el.wrap(g);
		},
		setup:function(){
			var svgTags = _.template(this.filterTemplate)();
			console.log(svgTags);
			$('#doc svg defs').append($(svgTags));
		}
	});
		
})