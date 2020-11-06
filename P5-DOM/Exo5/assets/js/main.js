const pink = document.getElementById("pink");
const blue = document.getElementById("blue");
const purple = document.getElementById("purple");
const bold = document.getElementById("bold");
const italic = document.getElementById("italic");

pink.onclick = function() {
	document.getElementById('text').style.color = '#FF00EC';
}

blue.onclick = function() {
	document.getElementById('text').style.color = '#000CFF';
}

purple.onclick = function() {
	document.getElementById('text').style.color = '#7800FF';
}

bold.onclick = function() {
	document.getElementById('text').style.fontWeight = 'bold';
}

italic.onclick = function() {
	document.getElementById('text').style.fontStyle = 'italic';
}