function call_func_by_name(funcname) {
	return window[funcname]();
}

function load_js_dynamic(src, init_function_name, callback) {
	var script = document.createElement('script');
	script.onload = function() {
		if(init_function_name!=null) {
			call_func_by_name(init_function_name);
		}
		if(callback!=null) {
			callback();
		}
	};
	script.src = src;
	document.getElementById("dynamic_scripts").appendChild(script);
}

function load_js_list_dynamic(js_list, final_cb) {
	var cb_waiting_count = 0;
	var all_started = false;
	js_list.forEach(element => {
		cb_waiting_count++;
		load_js_dynamic(element[0], element[1], function() {
			if(element[2]!=null) {
				element[2]();
			}
			cb_waiting_count--;
			if(cb_waiting_count<=0 && all_started) {
				if(final_cb!=null) {
					final_cb();
				}
			}
		});
	});
	if(cb_waiting_count<=0) {
		if(final_cb!=null) {
			final_cb();
		}
	}
	all_started = true;
}

function load_js_import_tree_dynamic(tree, final_cb) {
	if(tree==null) {
		if(final_cb!=null) {
			final_cb();
		}
	} else if(Array.isArray(tree)) {
		load_js_list_dynamic(tree, final_cb);
	} else {
		var pref = tree['pref'];
		var post = tree['post'];
		var callback = tree['callback'];
		load_js_import_tree_dynamic(pref, function() {
			load_js_import_tree_dynamic(post, function() {
				if(callback!=null) {
					callback();
				}
				if(final_cb!=null) {
					final_cb();
				}
			});
		});
	}
}