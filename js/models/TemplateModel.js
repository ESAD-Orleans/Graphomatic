define(['jquery','underscore','backbone','text!templates/fonts.css'],function($,_,Backbone,fonts){
		
	return Backbone.Model.extend({
		initialize:function(){
			this.setup();
		},
		
		template:_.template(''), // default template
		font:null, // default font
		color:null, // default color
		
		setup:function(){},
		rebaseDoc:function(c){
			var innerHTML = this.template(c);
			$('#doc').html(innerHTML);
		},
		applyOption:function(optionType){
			var option = this[optionType], model = this;
			if(option){
				var typeOfOption = typeof(option);
				switch(typeOfOption){
					case 'string' :
					this.applySingleOption(optionType,option,'*');
					break;
					case 'object' :
					_(option).each(function(v,k){
						model.applySingleOption(optionType,v,k)
					});
					break;
				}
			}
		},
		applySingleOption:function(optionType,option,filter){
			//
			var doc = $('#doc'),
				elTarget = filter;
			//
			switch(optionType){
				//
				case 'font' :
				// load font
				if($('style#css-'+option).length==0){
					doc.append($('<style id="css-'+option+'">'+_.template(fonts)({font:option})+'</style>'));
				}
				if(filter=='*'){
					$('.doc,svg',doc).css({fontFamily:option});
				}else{
					$('g'+filter+' text, text'+filter,doc).attr({'font-family':option});
				}
				
				
				break;
				//
				case 'color' :
				if(filter=='*'){
					$('.doc',doc).css({color:option});
					$('text',doc).attr({fill:option});
				}else{
					$(filter).find('span,div,h1,h2,h3,h4,h5,h6,p').css({color:option});
					$('g'+filter+' text, text'+filter,doc).attr({fill:option});
				}
				break;
			}
		},
		applyFont:function(){
			this.applyOption('font');
		},
		applyColor:function(){
			this.applyOption('color');
		}
		
	});
	
});