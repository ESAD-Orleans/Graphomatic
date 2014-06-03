define(['jquery','underscore','backbone','models/EffectModel'],function($,_,Backbone,EffectModel){

    return EffectModel.extend({
        filterId:'ExtrudeText',
        setup:function(){},
        run:function(){
            var defs = $('<defs id="defsTitle1"></defs>');
            this.$el.wrap(defs);
            for(var i=0; i<10; i++){
                var use = $('<use xlink:href="#title1" transform="matrix(1,-.2,0,1,'+-i*1+','+-i *.5+')" />');
                $('#defsTitle1').after(use);
            }
        }
    });

});