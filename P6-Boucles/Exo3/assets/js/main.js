let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++', 'ruby', 'python'];

let firstRow = document.getElementById('firstRow');

languages.forEach(element => {
    let firstTd = document.createElement('td');
    firstTd.innerHTML = element;
    firstRow.appendChild(firstTd);
});