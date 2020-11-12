let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

let firstRow = document.getElementById('table');

days.forEach(element => {
    let firstTd = document.createElement('td');
    firstTd.innerHTML = element;
    if (element == 'Samedi' || element == 'Dimanche') {
       firstTd.style.fontWeight = "bold"; 
    }
    firstRow.appendChild(firstTd);
});