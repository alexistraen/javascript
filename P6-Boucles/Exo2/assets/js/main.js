const numList = document.getElementById("numbers");

for (let numLoop = 0; numLoop <= 100; numLoop++) {
    let numDiv = document.createElement('span');
    numList.appendChild(numDiv).innerHTML = numLoop + '<br>';
    if(numLoop % 15 == 0) {
        numDiv.innerHTML =  '...' + '<br>';
    }
}