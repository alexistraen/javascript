const picture = document.getElementById("picture");

picture.onclick = function () {
	var source = picture.getAttribute("src");
	if (source == "assets/img/crevette.jpg") {
		picture.src = 'assets/img/crevette_02.jpg';
	} else {
		picture.src = 'assets/img/crevette.jpg';
	}
}

picture.onmouseover = function () {
	picture.style.width = '80%'
}

picture.onmouseout = function () {
	picture.style.width = '';
}