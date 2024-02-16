// main.js
export function component(x, y) {
  fetch(x)
    .then(response => response.text())
    .then(data => {
      console.log(data);
      document.getElementById(y).innerHTML = data;
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
}

component('./footer.html', 'footer');