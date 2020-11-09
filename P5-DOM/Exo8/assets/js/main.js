const firstName = document.getElementById("firstName");
const age = document.getElementById("age");
const submitButton = document.getElementById("submitButton");

submitButton.onclick = function() {
    var firstNameClone = firstName.cloneNode(true);
    var ageClone = age.cloneNode(true);
    document.body.appendChild(firstNameClone);
    document.body.appendChild(ageClone);
}