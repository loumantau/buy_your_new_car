async function getCarModel() {
  const api_url =
    'https://parallelum.com.br/fipe/api/v1/carros/marcas/6/modelos';
  const cars = document.getElementById('cars');
  const car = document.createElement('div');
  car.classList.add('car');

  const randomCarNumber = Math.trunc(Math.random() * 3);
  let carsProperties = {
    audiImgs: [
      {
        car1: [
          '100 2.8 V6',
          'https://combustivel.app/imgs/t650/consumo-100-2-8-v6-quattro.jpg',
        ],
      },
      {
        car2: [
          '100 2.8 V6 Avant',
          'https://motos-motor.com.br/c/wp-content/uploads/precos-tabela-audi-100-28-v6-avant.jpg',
        ],
      },
      {
        car3: [
          '100 S-4 2.2 Avant Turbo',
          'https://motos-motor.com.br/c/wp-content/uploads/precos-tabela-audi-100-s-4-22-avant-turbo.jpg',
        ],
      },
    ],
  };
  let {
    audiImgs: [
      {
        car1: [car1Name, car1Img],
      },
      {
        car2: [car2Name, car2Img],
      },
      {
        car3: [car3Name, car3Img],
      },
    ],
  } = carsProperties;
  const response = await fetch(api_url);
  const data = await response.json();

  car.innerHTML = `
            <div class="car-header">
            <span class="feed"> Your feed </span>
            <img
              src="${
                car1Name === data.modelos[randomCarNumber].nome
                  ? car1Img
                  : car2Name === data.modelos[randomCarNumber].nome
                  ? car2Img
                  : car3Img
              }"
              alt=""
            />
            </div>
            <div class="car-body">
            <h4>${`Audi`} ${data.modelos[randomCarNumber].nome}</h4>
            <button class="fav-btn">
              <i class="fas fa-heart"></i>
            </button>
            </div>
  `;

  console.log(data.modelos[randomCarNumber].nome);

  cars.appendChild(car);
}

getCarModel();
