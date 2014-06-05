define(['jquery','underscore','backbone','models/EffectModel'],function($,_,Backbone,EffectModel){

    return EffectModel.extend({
        filterId:'Elegant',
       setup:function(){},
       run:function(){
            /*var firstLetter = $('input#title1').val().trim().charAt(0).toUpperCase();
           var g = $('<g transform="translate(0 0)" width="420" height="420"></g>'),
               text = $('<text x="180" y="400" font-size="400" fill="url(#image_pattern)" font-style="italic" text-anchor="middle">'+firstLetter+'</text>');
           g.append(text);
           this.$el.before(g);*/
           $('#doc text:not(.ignore-elegant)').attr('fill','url(#image_pattern)');
           $('#doc #image').remove();

           //var image = $('#doc #image_pattern image');
           //image.attr('xlink:href','images/venus-urbino.jpg');
       }
    });

});