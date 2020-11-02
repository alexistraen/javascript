let note = prompt("Notez le site de 0 à 10 :")

if(isNaN(note) == true) {
    alert('Vous devez rentrer un chiffre');
}  else if (note >=0 && note <=3) {
    alert('Nul');
} else if (note >=4 && note <6) {
    alert('Moyen');
} else if (note >=6 && note <8) {
    alert('Assez bien');
} else if (note >=8 && note <=9) {
    alert('Bien');
} else if (note ==10) {
    alert('Excellent');
} else if (note <0 || note >10) {
    alert('La note ne peut aller que de 0 à 10 !');
}