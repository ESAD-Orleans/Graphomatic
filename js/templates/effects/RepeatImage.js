define(['jquery','underscore','backbone','models/EffectModel'],function($,_,Backbone,EffectModel){

    return EffectModel.extend({
        filterId:'RepeatImage',
       setup:function(){},
       run:function(){
           var NB = 7;
            var patternImage = $('#image_pattern'), image = $('image',patternImage), img = image.get(0),
                _x = image.attr('x')/7,
                _y = image.attr('y')/7,
                _width = image.attr('width')/7,
                _height = image.attr('height')/7
                ;

           for(var x=0; x<NB; x++){
           for(var y=0; y<NB; y++){
               var c = image.clone();
               c.attr({
                   x : _x+x*(_width+_x),
                   y : _y+y*(_height+_y),
                   width : _width,
                   height : _height
               })
               image.after(c);
           }}
       }
    });

});