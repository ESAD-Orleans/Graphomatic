define(['jquery','underscore','backbone','models/ContentModel','models/TypologyCollection','dateFormat'], function($,_,Backbone,ContentModel,TypologyCollection) {
	
	console.log('starting Graphomatic');
	
	var Graphomatic = Backbone.View.extend({
		el:'body',
		events:{
			'submit form':'submit',
			'change input,select':'submit'
		},
		initialize:function(){
			$('#date').val((new Date()).format('yyyy-mm-dd'));
			this.submit();
		},
		submit:function(e){
			if(_.isNull($('select#typology').val())){
				$('select#typology').val('base');
			}
			this.contents = new ContentModel();
			this.typologies = new TypologyCollection();
			this.typologies.run(this.contents);
			return false;
		}
	});
	
	return new Graphomatic();
});