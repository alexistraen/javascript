function check() {
	var pass = document.querySelector('input');
	var passconfirm = document.querySelectorAll('input')[1];
	if (pass.value == passconfirm.value) {
		document.getElementById('pass').style.border = '2px solid green';
		document.getElementById('passconfirm').style.border = '2px solid green';
	} else {
		document.getElementById('pass').style.border = '2px solid red';
		document.getElementById('passconfirm').style.border = '2px solid red';
	}
}