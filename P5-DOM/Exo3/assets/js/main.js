function check() {
	var name = document.getElementById('name');
	var nameValid = [a-z];
	 if (nameValid.test(name.value) == false) {
		alert("incorrect");
	} else {
		alert("correct");
	}
}