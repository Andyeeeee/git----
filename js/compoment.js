export function compoment(x, y) {
  fetch(x)
    .then(response => response.text())
    .then(data => {
      document.getElementById(y).innerHTML = data;
      console.log(data);
    })
    .catch(error => {
      console.error('Theres was an error!', error);
    })
}

compoment('../compoments/navbar.html', 'navebar')
