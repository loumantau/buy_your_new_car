// marcas / car brand code (#) / modelos
// modelos ==> .anos, .modelos

async function getRandomAudi() {
  const randomAudi = Math.trunc(Math.random() * 11);
  const api_url =
    'https://parallelum.com.br/fipe/api/v1/carros/marcas/6/modelos';
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data.modelos[randomAudi]);
}

getRandomAudi();

// async function getCarById(id) {
//   const car = await fetch('http://url.php?i=' + id);
// }

// async function getCarBySearch(term) {
//   const cars = await fetch('http://s=' + term);
// }
