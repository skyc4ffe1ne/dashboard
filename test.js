import { parseISO, format } from "date-fns";
let bookings = [
  {
    name: "Mario Rossi",
    email: "mario.rossi@example.com",
    checkin_date: "2024-12-20",
    checkout_date: "2024-12-25",
    booking_platform: "Booking",
    status: "confirmed",
    price_per_night: 100,
    extra_price: 20,
    total_price: 600,
  },
  {
    name: "Giulia Bianchi",
    email: "giulia.bianchi@example.com",
    checkin_date: "2024-09-15",
    checkout_date: "2024-09-20",
    booking_platform: "Airbnb",
    status: "pending",
    price_per_night: 80,
    extra_price: 15,
    total_price: 475,
  },
  {
    name: "Luca Verdi",
    email: "luca.verdi@example.com",
    checkin_date: "2024-08-01",
    checkout_date: "2024-08-10",
    booking_platform: "Expedia",
    status: "canceled",
    price_per_night: 120,
    extra_price: 25,
    total_price: 0,
  },
  {
    name: "Alessandra Neri",
    email: "alessandra.neri@example.com",
    checkin_date: "2024-07-10",
    checkout_date: "2024-07-15",
    booking_platform: "Vrbo",
    status: "confirmed",
    price_per_night: 90,
    extra_price: 20,
    total_price: 550,
  },
  {
    name: "Marco Gialli",
    email: "marco.gialli@example.com",
    checkin_date: "2024-06-05",
    checkout_date: "2024-06-12",
    booking_platform: "Kayak",
    status: "confirmed",
    price_per_night: 70,
    extra_price: 10,
    total_price: 560,
  },
  {
    name: "Chiara Rossi",
    email: "chiara.rossi@example.com",
    checkin_date: "2024-05-20",
    checkout_date: "2024-05-25",
    booking_platform: "Trivago",
    status: "pending",
    price_per_night: 110,
    extra_price: 30,
    total_price: 700,
  },
  {
    name: "Davide Blu",
    email: "davide.blu@example.com",
    checkin_date: "2024-04-15",
    checkout_date: "2024-04-20",
    booking_platform: "Airbnb",
    status: "canceled",
    price_per_night: 85,
    extra_price: 15,
    total_price: 0,
  },
  {
    name: "Federica Verde",
    email: "federica.verde@example.com",
    checkin_date: "2024-03-01",
    checkout_date: "2024-03-05",
    booking_platform: "Booking",
    status: "confirmed",
    price_per_night: 95,
    extra_price: 20,
    total_price: 475,
  },
  {
    name: "Giovanni Ferrari",
    email: "giovanni.ferrari@example.com",
    checkin_date: "2024-11-10",
    checkout_date: "2024-11-15",
    booking_platform: "Vrbo",
    status: "confirmed",
    price_per_night: 130,
    extra_price: 25,
    total_price: 780,
  },
  {
    name: "Laura Bianchi",
    email: "laura.bianchi@example.com",
    checkin_date: "2024-10-05",
    checkout_date: "2024-10-10",
    booking_platform: "Kayak",
    status: "pending",
    price_per_night: 85,
    extra_price: 20,
    total_price: 425,
  },
  {
    name: "Antonio Russo",
    email: "antonio.russo@example.com",
    checkin_date: "2024-07-01",
    checkout_date: "2024-07-07",
    booking_platform: "Trivago",
    status: "confirmed",
    price_per_night: 75,
    extra_price: 10,
    total_price: 525,
  },
  {
    name: "Elena Greco",
    email: "elena.greco@example.com",
    checkin_date: "2024-06-15",
    checkout_date: "2024-06-20",
    booking_platform: "Expedia",
    status: "pending",
    price_per_night: 110,
    extra_price: 30,
    total_price: 700,
  },
  {
    name: "Paolo Riva",
    email: "paolo.riva@example.com",
    checkin_date: "2024-05-10",
    checkout_date: "2024-05-12",
    booking_platform: "Airbnb",
    status: "confirmed",
    price_per_night: 95,
    extra_price: 15,
    total_price: 205,
  },
  {
    name: "francesca giordano",
    email: "francesca.giordano@example.com",
    checkin_date: "2024-04-20",
    checkout_date: "2024-04-25",
    booking_platform: "booking",
    status: "canceled",
    price_per_night: 110,
    extra_price: 20,
    total_price: 0,
  },
];

const regex = /(?<=-)\d+(?=-)/g;

// let newArr = bookings.map((el, i) => {
//   const data = el.checkout_date.match(regex);
//   el.month = data[0];
//   return el;
// });
const platforms = ["Airbnb", "Expedia", "Vrbo", "Kayak", "Trivago", "Booking"];
// let totaltLenght = [];
// console.time("for");
// for (let i = 0; i < platforms.length; i++) {
//   let newArr = bookings.filter((el) => {
//     return el.booking_platform === platforms[i];
//   });

//   totaltLenght = [...totaltLenght, newArr.length];
// }
// console.timeEnd("for");

// console.log(totaltLenght);
console.time("mapfilter");
let newArr2 = platforms.map((el, i) => {
  return bookings.filter((j) => j.booking_platform === el).length;
});
// console.log(newArr2);
console.timeEnd("mapfilter");

// function* generator() {
//   let i = 0;
//   while (true) {
//     i += 1;
//     let a;
//     if (i <= 9) {
//       a = "0" + i;
//     } else {
//       a = "" + i;
//     }
//     let filterArr = newArr.filter((el) => {
//       return el.month === a;
//     });
//     let total = 0;
//     if (filterArr.length === 1) {
//       total = filterArr[0].total_price;
//     }
//     if (filterArr.length > 1) {
//       total = filterArr.reduce((a, b) => a + b.total_price, 0);
//     }

//     let month = months[a - 1];
//     yield { month, total };
//   }
// }

// const gen = generator();

// let data = [];
// for (let i = 0; i < 12; i++) {
//   const { value } = gen.next();
//   data = [...data, value];
// }
// console.log(finalData);
