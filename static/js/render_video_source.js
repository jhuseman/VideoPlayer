class video_source_renderer {
	constructor(source_id) {
		this.source_id = source_id;
	}
	get_source_id() {
		return this.source_id;
	}
	get_video_source() {
		return video_sources_global_instances[this.get_source_id()];
	}
	render_channel_card(channel_id) {
		return this.get_video_source().render_channel_card(channel_id);
	}
	render_video_options(video_id) {
		return this.get_video_source().render_video_options(video_id);
	}
	render_video_and_description(current_video_id) {
		var video_source = this.get_video_source();
		if (video_source != undefined) {
			var vid = video_source.render_video(current_video_id);
			var desc = create_DOM_item("div", {}, [ui_elements.loading_placeholder()]);
			var self_reference = this;
			video_source.get_video_description(current_video_id, function (description) {
				replace_DOM_content(desc, ui_elements.video_description(description, self_reference));
			});
		}
		return create_DOM_item("div", {"style":"width:100%;"}, [vid, desc]);
	}
	render_suggested_videos_list(current_video_id, num_cols) {
		var ret_div = create_DOM_item("div", {}, [ui_elements.loading_placeholder()]);
		var return_elements = [];
		var video_source = this.get_video_source();
		if (video_source != undefined) {
			video_source.get_suggested_videos_list(current_video_id, function (videos) {
				videos.forEach(video => {
					return_elements.push(ui_elements.video_card(video));
				});
				replace_DOM_content(ret_div, ui_elements.element_list(return_elements, num_cols, 'md'));
			});
		}
		return ret_div;
	}
}
