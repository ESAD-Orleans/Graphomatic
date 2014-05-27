
//
// main config file
//
require.config({

	paths: {
		
		'jquery': 'lib/jquery-2.1.1.min',
		'underscore': 'lib/underscore-min',
		'backbone':'lib/backbone-min',
		
		
		// RequireJS plugins
		
		'text': 'lib/text',
		
		// plugins
		'dateFormat': 'lib/date.format',
		'jquery.form' : 'lib/jquery.form.min',
		
		//libs
		'color-thief': 'lib/color-thief'
	},

	shim: {
		'jquery': {
			exports: '$'
		},
		'underscore': {
		    exports: '_'
		},
		'backbone': {
		    deps: ["underscore", "jquery"],
		    exports: "Backbone"
		},
		'jquery.form' : ['jquery']
	}
}
);

require(['Graphomatic'], function(G) {});