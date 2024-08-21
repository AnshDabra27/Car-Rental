// import all images from assets/images directory
import img01 from "../all-images/cars-img/photo_2024-04-28_17-58-55.jpg";
import img02 from "../all-images/cars-img/img02.jpg";
import img03 from "../all-images/cars-img/img03.jpg";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/img07.jpg";
import img08 from "../all-images/cars-img/img08.jpg";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "CyberTruck",
    imgUrl1: img01,
    imgUrl2: "https://i.pinimg.com/564x/6d/a8/1d/6da81dbc16c6bf4d2f7e40b7610de526.jpg",
    imgUrl3: "https://i.pinimg.com/736x/c9/18/ad/c918ad4d809172f83e0e8a7417c03519.jpg",
    model: "Model 3",
    price: 10000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    // automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 2,
    brand: "Lamborghini",
    rating: 102,
    carName: "Gallardo Nera",
    imgUrl1: img02,
    imgUrl2: "https://i.pinimg.com/564x/26/8b/2e/268b2e769fac868fb579dfea69c2d467.jpg",
    imgUrl3: "https://i.pinimg.com/564x/bb/ea/1a/bbea1a7e1edf80fac72e84e14327f7ee.jpg",
    model: "Model-2007",
    price: 25000,
    speed: "196mpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    // automatic: "Automatic",
    description:
      " The Lamborghini Gallardo Nera is a limited-edition, all-black version of the Lamborghini Gallardo, an Italian supercar produced from 2003 to 2013. The Nera was produced in 2007 and only 185 units were made globally. It features a 5.0-liter V10 engine that produces 520 brake horsepower (bhp) at 8,000 revolutions per minute (rpm)",
  },

  {
    id: 3,
    brand: "Porsche",
    rating: 132,
    carName: "911 GT2",
    imgUrl1: img03,
    imgUrl2: "https://i.pinimg.com/564x/98/b4/ed/98b4edec713510f35b49a973ed5c660e.jpg",
    imgUrl3: "https://i.pinimg.com/564x/52/f0/e5/52f0e5b690011aaff101f19f10aef702.jpg",
    model: "Model-2017",
    price: 40000,
    speed: "211mpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    // automatic: "Automatic",
    description:
      "The Porsche 911 GT2 RS is a high-performance sports car that is the fastest and most powerful 911 that can be used on the road. The 2006–2019 model has a 3996 cc, 6 cylinder flat engine, 4 valves per cylinder, and DOHC. It has a seating capacity of four, rear-wheel drive, and 7 gears. The 2016–2019 model has a mileage of up to 8.47 kmpl and uses petrol.",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Mercielago",
    imgUrl1: "https://i.pinimg.com/564x/38/93/5e/38935e99918e72c117e7c835fdc16161.jpg",
    imgUrl2: img01,
    imgUrl3: img01,
    model: "Model-2022",
    price: 7000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    // automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 5,
    brand: "Toyota",
    rating: 94,
    carName: "Camry",
    imgUrl1: "https://i.pinimg.com/564x/de/1b/b3/de1bb3d864c812ad7f42a0bafe08cacf.jpg",
    imgUrl2: img01,
    imgUrl3: img01,
    model: "Model-2022",
    price: 3000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    // automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 6,
    brand: "Mercedes Benz",
    rating: 119,
    carName: "C-Class Limousine",
    imgUrl1: "https://i.pinimg.com/564x/ad/23/06/ad2306ed0641789c5cb52642045a1adb.jpg",
    imgUrl2: img01,
    imgUrl3: img01,
    model: "Model-2022",
    price: 8500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    // automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 7,
    brand: "Nissan",
    rating: 82,
    carName: "GTR",
    imgUrl1: img07,
    imgUrl2: img01,
    imgUrl3: img01,
    model: "Model 3",
    price: 15000,
    speed: "180mpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    // automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 8,
    brand: "Rolls Royce",
    rating: 74,
    carName: "Ghost",
    imgUrl1: img08,
    imgUrl2: img01,
    imgUrl3: img01,
    model: "Model 3",
    price: 60000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    // automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
];

export default carData;
