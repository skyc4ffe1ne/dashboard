import { differenceInDays, parseISO } from "date-fns";

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

const startData = [
  { duration: "1 night", value: 0 },
  { duration: "2 nights", value: 0 },
  { duration: "3 nights", value: 0 },
  { duration: "4-5 nights", value: 0 },
  { duration: "6-7 nights", value: 0 },
  { duration: "8-14 nights", value: 0 },
  { duration: "15-21 nights", value: 0 },
  { duration: "21+ nights", value: 0 },
];

function getDurationCategory(difference) {
  if (difference === 1) return "1 night";
  if (difference === 2) return "2 nights";
  if (difference === 3) return "3 nights";
  if (difference >= 4 && difference <= 5) return "4-5 nights";
  if (difference >= 6 && difference <= 7) return "6-7 nights";
  if (difference >= 8 && difference <= 14) return "8-14 nights";
  if (difference >= 15 && difference <= 21) return "15-21 nights";
  if (difference >= 22) return "21+ nights";
  return null;
}

const updatedData = bookings.reduce((acc, el) => {
  {
    /**calculate the difference */
  }
  const convCheckin = parseISO(el.checkin_date);
  const convCheckout = parseISO(el.checkout_date);
  const difference = differenceInDays(convCheckout, convCheckin);

  const durationCategory = getDurationCategory(difference);
  {
    /**assigns the label based on the difference */
  }
  if (durationCategory) {
    // finde the obj
    const categoryObj = acc.find((item) => item.duration === durationCategory);
    //update the value
    if (categoryObj) {
      categoryObj.value += 1;
    }
  }
  {
    /**return the new array */
  }
  return acc;
}, startData);
