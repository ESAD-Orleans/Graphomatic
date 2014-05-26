define(['jquery','underscore','backbone',
		'templates/base',
		
		        // arty				// dynamique				// elegant				// impactant				// important				// joyeux				// rythme				// serieux				// singulier
				// solenel

		
		'templates/arty',
		'templates/dynamique',
		'templates/elegant',
		'templates/impactant',
		'templates/important',
		'templates/joyeux',
		'templates/rythme',
		'templates/serieux',
		'templates/singulier',
		'templates/solenel',

		],
	function($,_,Backbone,
		TemplateBase
		
		        , arty				, dynamique				, elegant				, impactant				, important				, joyeux				, rythme				, serieux				, singulier
				, solenel
		){
	//
	// 
	//
	var TypologyFactory = function(id){
		switch(id){
			case 'arty' : return arty;
			case 'dynamique' : return dynamique;
			case 'elegant' : return elegant;
			case 'impactant' : return impactant;
			case 'important' : return important;
			case 'impactant' : return impactant;
			case 'joyeux' : return joyeux;
			case 'rythme' : return rythme;
			case 'serieux' : return serieux;
			case 'singulier' : return singulier;
			case 'solenel' : return solenel;
			//
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
			//
			//console.log(this.selectedTypologies());
			//
			this.runR('rebaseDoc',content);
			this.runR('insertGraphic',content);
			this.runR('applyFont',content);
			this.runR('applyColor',content);
			this.runR('applyEffect',content);
			var rawHTML = $('#doc').html();
			$('#doc').html('').html(rawHTML);
			

		}
	});
	
});