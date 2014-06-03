define(['jquery','underscore','backbone','models/EffectModel'],function($,_,Backbone,EffectModel){

    return EffectModel.extend({
       setup:function(){},
       run:function(){
           var image = $('#doc #image_pattern image');
           console.log(image.length);
           image.attr('xlink:href','images/venus-urbino.jpg');
       }
    });

});