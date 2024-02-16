export function compoment(x, y) {
  fetch(x)
    .then(response => response.text())
    .then(data => {
      console.log(data);
      document.getElementById(y).innerHTML = data;
      // console.log(data);
    })
    .catch(error => {
      console.error('Theres was an error!', error);
    })
}

compoment('/footer.html', 'footer')