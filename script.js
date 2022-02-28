// marcas / car make code (#) / modelos
// modelos ==> .anos, .modelos

const api_url = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/1/modelos';
async function getCarModel() {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data.modelos[0]);
}

getCarModel();

// async function getCarById(id) {
//   const car = await fetch('http://url.php?i=' + id);
// }

// async function getCarBySearch(term) {
//   const cars = await fetch('http://s=' + term);
// }
