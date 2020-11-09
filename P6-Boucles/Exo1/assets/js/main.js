const yearsList = document.getElementById("years");

for (let yearsLoop = 2020; yearsLoop <= 2030; yearsLoop++) {
    let redSpan = document.createElement('span');
    yearsList.appendChild(redSpan).innerHTML = yearsLoop + '<br>';
    if ((yearsLoop%4==0) && ((yearsLoop%100!=0) || (yearsLoop%400==0))) {
        redSpan.classList.add('redSpan');
    }
}