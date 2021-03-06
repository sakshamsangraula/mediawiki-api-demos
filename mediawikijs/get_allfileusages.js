// This file is autogenerated. See modules.json and autogenerator.py for details

/*
	get_allfileusages.js

	MediaWiki API Demos
	Demo of `allfileusage` module: List all file usages, including non-existing.

	MIT License
*/

var params = {
		action: 'query',
		format: 'json',
		list: 'allfileusages',
		afprefix: 'Icon',
		afprop: 'ids|title'
	},
	api = new mw.Api();

api.get( params ).done( function ( data ) {
	var usages = data.query.allfileusages,
		img;
	for ( img in usages ) {
		console.log( usages[ img ].title );
	}
} );
