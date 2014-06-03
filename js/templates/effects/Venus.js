define(['jquery','underscore','backbone','models/EffectModel'],function($,_,Backbone,EffectModel){

    return EffectModel.extend({
        filterId:'Venus',
       setup:function(){},
       run:function(){
           var image = $('#doc #image_pattern image');
           image.attr('xlink:href','images/venus-urbino.jpg');
       }
    });

});