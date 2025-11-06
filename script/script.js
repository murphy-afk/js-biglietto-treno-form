// Descrizione:
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
const form = document.querySelector("form");
const ageInput = document.getElementById("age");
const distInput = document.getElementById("distance");
const pricing = document.querySelector(".pricing");
const nameInput = document.getElementById("name");
const passengerName = document.querySelector(".passengerName");
const ticketType = document.querySelector(".ticketType");
const carriage = document.querySelector(".carriage");
const ticketCard = document.querySelector(".ticket");

const calculatePrice = (age, distance) => {
  const minorDiscount = 20;
  const elderDiscount = 40;
  const kmPrice = 0.21;
  let price = distance * kmPrice;
  let discount = 0;

  if (age <= 18) {
    discount = price * (minorDiscount / 100);
  }
  else if (age >= 65) {
    discount = price * (elderDiscount / 100);
  }
  const finalPrice = price - discount;
  const result = finalPrice.toFixed(2);

  return result;
}


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userAge = parseInt(ageInput.value);
  const userDistance = parseInt(distInput.value);

  if (isNaN(userAge) || isNaN(userDistance)) {
    alert("inserisci la tua età e distanza da percorrere");
  }
  else if (userAge < 1 || userAge > 120) {
    alert("inserire un età valida");
  }
  else if (nameInput.value.trim() === "") {
    alert("inserire un nome");
  }
  else {
    const ticketPrice = calculatePrice(userAge, userDistance);
    pricing.innerHTML = `${ticketPrice}&euro;`;
    passengerName.innerText = nameInput.value;
    let ticketTypeValue;
    if (userAge <= 18) ticketTypeValue= "Under 18";
    if (userAge >= 65) ticketTypeValue= "Over 65";
    ticketTypeValue= "Standard";
    ticketType.innerText = ticketTypeValue;
    let randomNumber = Math.floor(Math.random()* 24) + 1;
    carriage.innerText = randomNumber;
    ticketCard.classList.remove("d-none")
  }
});

form.addEventListener("reset", (event) => ticketCard.classList.add("d-none"));

