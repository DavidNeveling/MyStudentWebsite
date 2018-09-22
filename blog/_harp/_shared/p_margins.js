function doIt(){
	tag_array = document.getElementsByTag('p');
	for (let i = 0; i < tag_array.length; i++) {
		tag_array[i].padding_left = window.innerWidth / 6;
		tag_array[i].padding_right = window.innerWidth / 6;
	}
}
