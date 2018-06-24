
class test_source_1 {
	constructor() {
		this.test_param = true;
	}

		get_suggested_videos_list(current_video_id, callback) {
			// be sure to handle listing normal suggested videos if current_video_id is null
			window.setTimeout(function() {
				var result = [{
						"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg",
						"title":"Test Title",
						"left_foot":{
							"text":"Test Channel",
							"clicked":function() {
								alert('test2');
							},
						},
						"right_foot":{
							"text":"0:00 | 0 Views | 0:15 ago",
							"clicked":function() {
								main_renderer_instance.play_video({
									'source':'test_source_1',
									'id':"test_video_1",
								});
							},
						},
						"clicked":function() {
							main_renderer_instance.play_video({
								'source':'test_source_1',
								'id':"test_video_1",
							});
						},
					},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
					{"thumbnail":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg","title":"Test Title","left_foot":{"text":"Test Channel","clicked":function() {alert('test5');},},"right_foot":{"text":"0:00 | 100,000,000 Views | 0:15 ago","clicked":function() {alert('test6');},},"clicked":function() {alert('test4');},},
				];
				callback(result);
			},500);
		}

		get_video_description(video_id, callback) {
			window.setTimeout(function() {
				var result = {
					"title":"Test Title",
					"channel":{
						"id":"Test Channel",
						"clicked":function() {
							alert('test2');
						},
					},
					"video_id":video_id,
					"description":document.createTextNode("Test video description."),
				};
				callback(result);
			},500);
		}

		render_video(video_id) {
			return create_DOM_item("img",{"style":"width:100%;","src":"https://i.ytimg.com/vi/EZF8SJGqsi8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkO4nKqXGZgNdg9xj7loGmyjhbeg"},[]);
		}

		render_channel_card(channel_id) {
			var ret_div = create_DOM_item("div", {}, [ui_elements.loading_placeholder()]);
			window.setTimeout(function() {
				replace_DOM_content(ret_div, document.createTextNode("Channel info placeholder for channel "+channel_id));
			},500);
			return ret_div;
		}

		render_video_options(video_id) {
			var ret_div = create_DOM_item("div", {}, [ui_elements.loading_placeholder()]);
			window.setTimeout(function() {
				replace_DOM_content(ret_div, document.createTextNode("Video-specific options will go here: video id "+video_id));
			},500);
			return ret_div;
		}
}

function test_source_1_init() {
	return new test_source_1();
}
