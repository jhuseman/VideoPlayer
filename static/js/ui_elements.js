class ui_elements {
		static col_spacer(units) {
			var width = 100*units/12;
			var widthstr = width.toString() + "%";
			return create_DOM_item('span',{'style':'width:'+widthstr},[]);
		}

		static loading_placeholder() {
			return document.createTextNode("Loading...");
		}

		static video_card(video) {
			var img = create_DOM_item('img',{'style':'width: 100%;', 'alt':'Video Thumbnail', 'src':video['thumbnail']},[]);
			var title_div = create_DOM_item('h6',{'class':'col-sm-11 card-title'},[document.createTextNode(video['title'])]);
			var title_row = create_DOM_item('div',{'class':'row'},[this.col_spacer(0.5),title_div,this.col_spacer(0.5)]);
			var body = create_DOM_item('div',{},[img,title_row]);
			body.onclick = video['clicked'];
			var foot_left = create_DOM_item('div',{'class':'col-sm-4','style':'text-align: left; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;'},[document.createTextNode(video['left_foot']['text'])]);
			foot_left.onclick = video['left_foot']['clicked'];
			var foot_right = create_DOM_item('div',{'class':'col-sm-7','style':'text-align: right; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;'},[document.createTextNode(video['right_foot']['text'])]);
			foot_right.onclick = video['right_foot']['clicked'];
			var foooter = create_DOM_item('small',{'class':'text-muted row'},[this.col_spacer(0.5),foot_left,foot_right,this.col_spacer(0.5)]);
			var card = create_DOM_item('div',{'class':'card mb-3'},[body, foooter]);
			return card;
		}

		static video_description(description, source_renderer) {
			var title_div = create_DOM_item('h6',{},[document.createTextNode(description['title'])]);
			var channel = create_DOM_item('div',{},[source_renderer.render_channel_card(description['channel']['id'])]);
			channel.onclick = description['channel']['clicked'];
			var video_options = create_DOM_item('div',{},[source_renderer.render_video_options(description['video_id'])]);
			var description_text = description['description'];
			var desc = create_DOM_item('div',{'class':'container'},[title_div, channel, video_options, description_text]);
			return desc;
		}

		static element_list(elements, columns, min_win_size) {
			if(columns>12) {
				if((columns % 2) == 0) {
					var col_a = [];
					var col_b = [];
					elements.forEach(element => {
						if(col_a.length > col_b.length) {
							col_b.push(element);
						} else {
							col_a.push(element);
						}
					});
					return this.element_list([this.element_list(col_a,columns/2,min_win_size),this.element_list(col_b,columns/2,min_win_size)],2,min_win_size);
				} else {
					var new_elems = [];
					elements.forEach(element => {
						new_elems.push(element);
						if(((new_elems.length+1)%(columns+1))==0) {
							new_elems.push(create_DOM_item('div',{},[]));
						}
					});
					return this.element_list(new_elems, columns+1, min_win_size);
				}
			} else {
				var element_width = Math.floor(12/columns);
				var filled_space = element_width*columns;
				var extra_space = 12-filled_space;
				var spacer_width = extra_space/(columns-1);
				var elem_width_text = 'col-'+min_win_size+'-'+element_width.toString();
				var return_elements = [];
				elements.forEach(element => {
					return_elements.push(create_DOM_item('div', {'class':elem_width_text}, [element]));
					if(spacer_width>0) {
						if((return_elements.length % (columns*2-1))!=0) {
							return_elements.push(this.col_spacer(spacer_width));
						}
					}
				});
				return create_DOM_item('div', {'class':'row'}, return_elements);
			}
		}
		
}