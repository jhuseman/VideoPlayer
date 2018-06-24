function load_dynamic_content() {
	load_js_import_tree_dynamic({
		"pref":[["/js/WebRequest.js",null,null],
				["/js/create_DOM_item.js",null,null],
				["/js/ui_elements.js",null,null],
				["/js/render_video_source.js",null,null],
				["/js/main_renderer.js",'main_renderer_init',null],
			],
		"post":[["/js/load_video_sources_dynamically.js","load_video_sources_dynamically_init",null],
			],
		"callback":null
	},null);
}

window.onload = function() {
	load_dynamic_content();
}
