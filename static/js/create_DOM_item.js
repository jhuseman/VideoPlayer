function create_DOM_item(type, attrs, content_items) {
	var item = document.createElement(type);
	Object.keys(attrs).forEach(key => {
		item.setAttribute(key,attrs[key]);
	});
	content_items.forEach(element => {
		item.appendChild(element);
	});
	return item;
}

function replace_DOM_content(element, content) {
	element.innerHTML = ''; // clear contents
	element.appendChild(content);
}
