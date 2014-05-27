define(['jquery','underscore','backbone'],function($,_,Backbone,fonts){
		
	return Backbone.Model.extend({
		initialize:function($el){
			this.$el = $el;
			this.setup();
			$el.each($.proxy(this.run,this));
		},
		setup:function(){console.log('setup effect');},
		run:function(){console.log('run effect');}
	});
	
});