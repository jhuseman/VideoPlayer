var video_sources_list_url = "/js/video_sources/video_sources_list.json";
var video_sources_ordered_id_list = [];
var video_sources_global_instances = {};

function load_video_sources_dynamically_init() {
	WebRequest("GET",video_sources_list_url,"",function(text) {
		var data = JSON.parse(text);
		var import_list = [];
		data.forEach(element => {
			import_list.push([element['url'],null,function() {
				video_sources_global_instances[element['id']] = call_func_by_name(element['init']);
			}]);
			video_sources_ordered_id_list.push(element['id']);
		});
		load_js_list_dynamic(import_list,function() {
			main_renderer_instance.render_suggested_videos();
		});
	},function(err) {
		alert("Error loading video sources list: "+err);
	});
}
