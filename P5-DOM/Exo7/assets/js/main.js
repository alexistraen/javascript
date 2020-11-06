const textScroll = document.getElementById("text");

textScroll.onscroll = function() {
    document.getElementById('text').style.fontSize = "20rem";
    document.getElementById('text').style.color = '#FF00EC';
}