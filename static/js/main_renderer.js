var main_renderer_instance = null;
class main_renderer {
	constructor() {
		// TODO: dynamically change this between different video sources
	this.current_video = {
		'source':'test_source_1',
		'id':null,
	};
	this.right_sidebar = document.getElementById('right_sidebar');
	this.center_content = document.getElementById('center_content');
}

	get_right_sidebar() {
		return this.right_sidebar;
	}

	get_center_content() {
		return this.center_content;
	}

	get_current_video_id() {
		return this.current_video['id'];
	}

	get_current_video_source_id() {
		return this.current_video['source'];
	}

	get_current_video_source_renderer() {
		return new video_source_renderer(this.get_current_video_source_id());
	}

	render_suggested_videos() {
		var elem_max_width = 400;
		var sidebar_width = this.get_right_sidebar().clientWidth;
		var num_cols = Math.ceil(sidebar_width/elem_max_width);
		replace_DOM_content(this.get_right_sidebar(),this.get_current_video_source_renderer().render_suggested_videos_list(this.get_current_video_id(),num_cols));
	}

	render_video_and_description() {
		replace_DOM_content(this.get_center_content(),this.get_current_video_source_renderer().render_video_and_description(this.get_current_video_id()));
	}

	play_video(video) {
		this.current_video = video;
		if(this.get_current_video_id()!=null) {
			this.render_video_and_description();
			this.set_center_content_visible(true);
		} else {
			this.set_center_content_visible(false);
		}
	}

	set_center_content_visible(visible) {
		var display_val = 'none';
		var suggested_width = 'col-lg-12';
		if(visible) {
			display_val = 'inherit';
			suggested_width = 'col-lg-3';
		}
		this.get_center_content().style.display = display_val;
		this.get_right_sidebar().setAttribute('class', suggested_width);
		this.render_suggested_videos(); // make sure suggested videos are re-rendered to correct dimensions
	}

}

function main_renderer_init() {
	main_renderer_instance = new main_renderer();
}