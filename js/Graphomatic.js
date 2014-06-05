define(['jquery','underscore','backbone','jquery.form','color-thief',
		'models/ContentModel',
		'models/TypologyCollection',
		'text!templates/printfile.html',
		'dateFormat'], function($,_,Backbone,jqueryForm,colorThief,ContentModel,TypologyCollection,printfile) {
	
	console.log('starting Graphomatic');

    var router = new Backbone.Router();
    Backbone.history.start();
	
	var Graphomatic = Backbone.View.extend({
		el:'body',
		events:{
			'change input,select':'forceSubmitForm',
            'click button#print':'print'
		},
		initialize:function(){
			//
			var view = this;
			$('#date').val((new Date()).format('yyyy-mm-dd'));
			//
			$('form').ajaxForm({
				dataType:'json',
				//
				beforeSubmit:function(){if($('input#image').val()==''){view.submit(); return false;}},
				//
				complete:function(data){
					var response = data.responseJSON;
					if(response.error){
						alert(response.error);
					}else if(response.success){
						var imageLabel = $('input#image').parent();
						$('input:hidden, img, .palette',imageLabel).remove();
						// ajoute tous les champs en cachés.
						_(response).each(function(v,k){
							imageLabel.append('<input type="hidden" id="image-'+k+'" value="'+v+'" />');
						});
						$('input#image').val('');
						view.loadImage(response['filepath']);
						view.submit();
					}
				}
			});
            //
            //
			//
			//this.submit();
            this.contents = new ContentModel();
			//
			this.loadImage(this.contents.get('image').url);
            //
            $('option[disabled').remove();
            //
            $('body').addClass('ready');
		},
		forceSubmitForm:function(){
			$('form').submit();
		},
		loadImage:function(path){
			var image = new Image();
			$(image).load(function(){
				var cT = new ColorThief(),
				 cTColor = cT.getColor(image),
				 cTPalette = cT.getPalette(image,6),
				 imageInput = $('input#image');
				_(cTPalette).each(function(v,k){
					rgb = v[0]+','+v[1]+','+v[2];
					imageInput.after(
					'<div class="palette" style="background:rgb('+rgb+')"></div>'+
					'<input type="hidden" id="image-palette-'+k+'" />'
					);
				});
				var rgb = cTColor[0]+','+cTColor[1]+','+cTColor[2];
				imageInput.after('<div class="palette main" style="background:rgb('+rgb+')"></div>');
				//imageInput.after($('<img class="preview" src="'+path+'" />'));
			});
			image.src= path;
		},
		submit:function(e){
			if(_.isNull($('select#typology').val())){
				$('select#typology').val('base');
			}
			this.contents = new ContentModel();
			this.typologies = new TypologyCollection();
            if(this.typologies.selectedTypologies().length==0){alert('veuillez selectionner au moins un qualificatif'); return false;}
			//
            this.typologies.run(this.contents);
            //
            var hash = "";
            this.contents.get('currentTypologies').each(function(t,i){
                if(i>0){hash+="/"}
                hash+= t.id;
            })
            //router.navigate(hash);
            //
			$('#printfile').html(_.template(printfile)(this.contents));
			return false;
		},
        print:function(e){
            e.preventDefault();
            e.stopPropagation();
            window.print();
        }
	});
	
	return new Graphomatic();
});