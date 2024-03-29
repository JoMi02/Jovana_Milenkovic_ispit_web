
const port = 5501;
const table = document.querySelector('#tableContent');
const inputs = document.querySelectorAll('.inputs input');

const showData = () => {
    fetch(`http://127.0.0.1:${port}/students.json`)
        .then(response => response.json())
        .then(data => {
            data.map(student => {
                var row = table.insertRow();
                row.classList.add("row");
                row.addEventListener('click', (e) => {
                    let red = e.target.closest('tr').children;
                    console.log(red);
                    document.querySelector('#izmeniBtn').addEventListener('click', () => {
                        for (let i = 0; i <= inputs.length; i++) {
                            red[i].textContent = inputs[i].value;
                        }
                    });

                    for (let i = 0; i <= inputs.length; i++) {
                        inputs[i].value = red[i].textContent;
                    }


                });
                for (let key in student) {
                    if (key === 'prosek') {
                        let ocene = student['ocene'].split(",");
                        let prosek = eval(ocene.join('+')) / ocene.length
                        let cell = row.insertCell()
                        cell.innerHTML = prosek;
                    } else {
                        let cell = row.insertCell()
                        cell.innerHTML = student[key];
                    }
                }
            });
        });
}

showData();