define(['jquery','underscore','backbone',
		'models/TemplateModel',
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
        TemplateModel,
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
	// liste des opérations
    var operations = ['rebaseDoc','insertGraphic','applyFont','applyColor','applyEffect'];
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
			this.el = o.checkbox;
            this.$el = $(this.el);
			this.set('checked',this.$el.is(':checked'));
			//
            console.log(this.$el.val())
			this.id=this.$el.val();
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
		},
		checked : function(){
			return this.get('checked');
		}
	});

	return Backbone.Collection.extend({
		initialize:function(){
			var c = this;
			$('#typology :checkbox').each(function(){
                var checkbox = this,
                    typology = new Typology({checkbox:this});
				c.add(typology);
			});
		},
		selectedTypologies:function(){
			return this.filter(function(t){return t.checked();});
		},
		randomSelectedTypology:function(){
			var copy = this.selectedTypologies();
			copy.sort(function(a,b){return Math.random()<.5 ? 1:-1;});
			return copy.pop();
		},
        randomSelectedTypologies:function(l){
            var a = _([]), rT;
            for(var n=0;n<l;n++){
                rT = this.randomSelectedTypology();
                //console.log(rT.template.get(operations[n]+'Description'))
                a.push(rT);
            }
            return a;
        },
		runR:function(name,content){
			this.randomSelectedTypology().template[name](content);
		},
		run:function(content){
			//
            //console.log('run >>>');
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
                //console.log(printDescription);
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
            content.set('currentTypologies',typologies);
            content.set('printDescription',printDescription);


        }
	});
	
});