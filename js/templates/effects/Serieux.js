define(['jquery','underscore','backbone','models/EffectModel'],function($,_,Backbone,EffectModel){

    return EffectModel.extend({
        filterId:'Serieux',
       setup:function(){},
       run:function(){
           var $el = this.$el;


           function EffectSerieux(){
               var t = $(this), el= t.get(0), w = t.width(), h = t.height(), bb = el.getBBox();
               //
               var ignoreEffect = false;
               //

               switch(this.nodeName.toLowerCase()){
                   case 'use':
                       $(this).attr({'text-decoration':'underline'})
                       break;
               }


               t.children().each(function(a,b){
                   // textPath and tSpan
                   ignoreEffect = true;
                   switch(this.nodeName.toLowerCase()){
                       case 'textpath':
                           var href = $(this).attr('xlink:href'),
                               path = $(href).clone();
                           path.attr({stroke:'#000','stroke-width':'2px',id:'effectCopy-'+(new Date()).getTime()})
                           t.after(path);
                           break;
                       case 'tspan':
                           $(this).attr({'text-decoration':'underline'})
                           break;
                   }
               });
               //
               if(!ignoreEffect){
                   //console.log(bb,w,h);
                   var line = $('<path stroke="#000" stroke-width="2px" d="M'+(bb.x)+','+ (bb.y+h)+'l'+(bb.width)+' 0z"/>');
                   $(this).after(line);
               }
               //
           }

           $('text, use, textpath',this.$el).each(EffectSerieux)
       }
    });

});