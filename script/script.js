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


const calculatePrice = (age, distance) => {
  const minorDiscount = 20;
  const elderDiscount = 40;
  const kmPrice = 0.21;
  let price = distance * kmPrice;
  let discount = 0;

  if (age < 18) {
    discount = price * (minorDiscount / 100);
  }
  else if (age > 65) {
    discount = price * (elderDiscount / 100);
  }
  const finalPrice = price - discount;
  const result = finalPrice.toFixed(2);
  return result
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userAge = parseInt(ageInput.value);
  const userDistance = parseInt(distInput.value);
  console.log(userAge);
  
  
  if (isNaN(userAge) || isNaN(userDistance)) {
    alert("inserisci la tua età e distanza da percorrere");
  }
  else {
    const ticketPrice = calculatePrice(userAge, userDistance);
    pricing.innerText = ticketPrice;
  }
});

