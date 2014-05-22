define(['jquery','underscore','backbone',
		'templates/base',
		'templates/serieux',
		'templates/joyeux',
		'templates/important',
		'templates/elegant'
		],
	function($,_,Backbone,
		TemplateBase,
		TemplateSerieux,
		TemplateJoyeux,
		TemplateImportant,
		TemplateElegant
		){
	//
	// 
	//
	var TypologyFactory = function(id){
		switch(id){
			case 'serieux' : return TemplateSerieux;
			case 'joyeux' : return TemplateJoyeux;
			case 'elegant' : return TemplateElegant;
			case 'important' : return TemplateImportant;
			case 'base' : default : return TemplateBase;
		}
	}
	//
	//
	//
	var Typology = Backbone.Model.extend({
		initialize:function(o){
			var typology = this;
			this.el = o;
			_(o.attributes).each(function(v){
				var val = v.nodeName, name = v.nodeValue;
				switch(val){
					case 'selected': case 'disabled': 
						typology.set(val,true);
					break;
					default : 
						typology.set(name,val);
					break;
				}
			});
			//
			this.id=this.get('value');
			this.template = new (TypologyFactory(this.id))();
		},
		code : function(){
			return $(this.el).attr('value');
		},
		name : function(){
			return $(this.el).attr('label');
		},
		selected : function(){
			return this.get('selected');
		}
	});

	return Backbone.Collection.extend({
		initialize:function(){
			var c = this;
			$('select#typology option').each(function(){
				c.add(new Typology(this));
			});
		},
		selectedTypologies:function(){
			return this.filter(function(t){return t.selected();});
		},
		randomSelectedTypology:function(){
			var copy = this.selectedTypologies();
			copy.sort(function(a,b){return Math.random()<.5 ? 1:-1;});
			return copy.pop();
		},
		runR:function(name,content){
			this.randomSelectedTypology().template[name](content);
		},
		run:function(content){
			console.log(this.selectedTypologies());
			this.runR('rebaseDoc',content);
			this.runR('insertGraphic',content);
			this.runR('applyFont',content);
			this.runR('applyColor',content);
			this.runR('applyEffect',content);

		}
	});
	
});