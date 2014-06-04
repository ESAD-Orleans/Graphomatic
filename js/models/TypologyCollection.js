define(['jquery','underscore','backbone',
		'templates/base',
		
		        // arty
				// dynamique
				// elegant
				// impactant
				// important
				// joyeux
				// rythme
				// serieux
				// singulier
				// solenel

		
		'templates/arty',
		'templates/beau',
		'templates/dynamique',
		'templates/elegant',
		'templates/impactant',
		'templates/important',
		'templates/joyeux',
		'templates/rythme',
		'templates/serieux',
		'templates/singulier'

		],
	function($,_,Backbone,
		TemplateBase
		
		        , arty
				, beau
				, dynamique
				, elegant
				, impactant
				, important
				, joyeux
				, rythme
				, serieux
				, singulier
		){
	//
	// 
	//
	var TypologyFactory = function(id){
		switch(id){
			case 'arty' : return arty;
			case 'beau' : return beau;
			case 'dynamique' : return dynamique;
			case 'elegant' : return elegant;
			case 'impactant' : return impactant;
			case 'important' : return important;
			case 'impactant' : return impactant;
			case 'joyeux' : return joyeux;
			case 'rythme' : return rythme;
			case 'serieux' : return serieux;
			case 'singulier' : return singulier;
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
        randomSelectedTypologies:function(l){
            var a = _([]);
            for(var n=0;n<l;n++){
                a.push(this.randomSelectedTypology());
            }
            return a;
        },
		runR:function(name,content){
			this.randomSelectedTypology().template[name](content);
		},
		run:function(content){
			//
            console.log('run >>>');
            var operations = ['rebaseDoc','insertGraphic','applyFont','applyColor','applyEffect'];
			var typologies = this.randomSelectedTypologies(operations.length);
            //
            var printDescription = "";
            //
            function _Run(id){
                //
                var t = typologies.value()[id].template,
                    description = t.get(operations[id]+'Description');
                description = description ? description:(typologies.value()[id].id +' ('+operations[id]+')');
                printDescription += description+" \n";
                console.log(printDescription);
                //id+' : '+typologies.value()[id].id + ' : '+description );//+template.get('descriptions')[]);
                t[operations[id]](content);
            }
            //
            for(var n=0; n<typologies.size(); n++){
                _Run(n);
            }
			var rawHTML = $('#doc').html();
			$('#doc').html('').html(rawHTML);
            $('.spinner').stop().delay(200).fadeOut(100,function(){$(this).remove()});
            $('.spinner .gif').fadeIn(50);
            //
            content.set('operations',operations);
            content.set('printDescription',printDescription);


        }
	});
	
});