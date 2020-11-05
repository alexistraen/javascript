function check() {
	var pass = document.querySelector('input');
	var passconfirm = document.querySelectorAll('input')[1];
	if (pass.value == passconfirm.value) {
		document.getElementById('pass').classList.add("correct");
		document.getElementById('passconfirm').classList.add("correct");
	} else {
		document.getElementById('pass').classList.add("incorrect");
		document.getElementById('passconfirm').classList.add("incorrect");
	}
}