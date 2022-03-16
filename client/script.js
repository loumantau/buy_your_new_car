async function fetchAPI() {
  const api_url = 'http://localhost:5000/getAll';

  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
}

fetchAPI();

const randomCarNumbers = [];

let min, max, r, n, p;

min = 0;
max = 2;
r = 2;

for (let i = 0; i < r; i++) {
  do {
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    p = randomCarNumbers.includes(n);
    if (!p) {
      randomCarNumbers.push(n);
    }
  } while (p);
}

const rand1 = randomCarNumbers[0];
const rand2 = randomCarNumbers[1];

let audiProperties = {
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
} = audiProperties;

async function getAudis(randomNumber) {
  const api_url =
    'https://parallelum.com.br/fipe/api/v1/carros/marcas/6/modelos';
  const cars = document.getElementById('cars');
  const car = document.createElement('div');
  car.classList.add('car');

  const response = await fetch(api_url);
  const data = await response.json();

  const carName = data.modelos[randomNumber].nome;

  let correspondingCarImg = function () {
    // car1Name === carName ? car1Img : car2Name === carName ? car2Img : car3Img;
    if (car1Name === carName) {
      return car1Img;
    } else if (car2Name === carName) {
      return car2Img;
    } else {
      return car3Img;
    }
  };

  // console.log(correspondingCarImg());

  car.innerHTML = `
            <div class="car-header">
            <span class="feed"> Your feed </span>
            <img
              src="${correspondingCarImg()}"
              alt=""
            />
            </div>
            <div class="car-body">
            <h4>${`Audi`} ${carName}</h4>
            <button class="fav-btn">
              <i class="fas fa-heart"></i>
            </button>
            </div>
  `;

  // console.log(data.modelos[randomNumber].nome);

  const btn = car.querySelector('.car-body .fav-btn');

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const favoriteCars = document.querySelector('.favorite-vehicles');
    const favoriteCar = document.createElement('li');
    favoriteCar.innerHTML = `
    <li>
            <img
              src="${correspondingCarImg()}"
              alt=""
            /><span>${`Audi`} ${carName}</span>
          </li>
    `;
    favoriteCars.appendChild(favoriteCar);
  });
  cars.appendChild(car);
}

getAudis(rand1);
getAudis(rand2);
