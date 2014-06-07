define(['jquery','underscore','backbone','dateFormat'],function($,_,Backbone){
	
	dateFormat.i18n = {
	dayNames: [
		"Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam",
		"Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"
	],
	monthNames: [
		"Janv", "Févr", "Mar", "Avr", "Mai", "Juin", "Juil", "Aout", "Sept", "Oct", "Nov", "Dec",
		"Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"
	]
	};
	
	return Backbone.Model.extend({
		defaults:{
			image:{
				url:'images/splash.png',
				width:1280,
				height:960
			}
		},
		initialize:function(o){
			var model = this;
			var typology = _([]);
			$('#typology :checked').each(function(){
				typology.push({
					label:$(this).parent().text(),
					value:$(this).attr('value')
				});
			});
			this.set('typology',typology);
			//
			$('textarea, :text, input[type=date],  :file').each(function(){
				var id = $(this).attr('id'),
					val = $(this).val();
				switch(id){
					case 'image': 
					//
					if($('#image-filename').val()){
						var p = $(this).parent(),
							image = {};
						$(':hidden',p).each(function(){
							var k = String($(this).attr('id')).split('image-').pop(), v = $(this).val();
							if(k=='undefined')return;
							image[k]=v;
						});
						image.url = image.filepath;
						model.set('image',image);
					}
					//
					case undefined : return;
				}
				//console.log(id,val);
				model.set(id,val);
			});
			this.setup();			
		},
		setup:function(){
			// raccourcis
			this.joinsAttr('title1','title2');
			this.joinsAttr('title1','title2','details');
			this.joinsAttr('title1','details');
			this.joinsAttr('title2','details');
			this.image = this.get('image');
		},
		joinsAttr:function(){
			var n = '', v = '', m = this;
			_(arguments).each(function(k){
				n+=k;
				v+=m.get(k)+' ';
			});
			m.set(n,v)
		},
		fillImageTo:function(w,h){
			var i = this.image, // image shortcut
				sw = i.width, // image width
				sh = i.height, // image height
				sr = sw/sh, // source ratio
				r = w/h; // destination ratio
			if(r<sr){
				i.d = {
					height:h,
					width:h*sr,
					y:0,
					x:(w-h*sr)/2
				};
			}else{
				i.d = {
					height:w/sr,
					width:w,
					x:0,
					y:(h-w/sr)/2
				};
			}
				
		},
		imageHeightInRatio:function(w,h){
		},
		split:function(key,pattern){
			if(_.isUndefined(pattern)){pattern=' '}
			return _(this.get(key).split(pattern));
		},
		date:function(format){
			if(_.isUndefined(format)){format='dd mmmm yyyy'}
			return dateFormat(this.get('date'),format);
		},
        RandomKey:function(a){
            // return a Random Key of an indexed array
            return a[Math.floor(Math.random()*a.length)];
        }
	});
	
});