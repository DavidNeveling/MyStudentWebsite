var unread_indicators = document.getElementsByClassName("unread_indicator");
var boxes = new Array();
for(let i = 0; i < unread_indicators.length; i++){
	boxes.push(unread_indicators[i].parentElement);
}
for(let i = 0; i < boxes.length; i++){
	boxes[i].click();
}
