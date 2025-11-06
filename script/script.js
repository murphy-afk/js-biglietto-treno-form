// Descrizione:
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// const distance = parseInt(prompt("Inserisci il numero di chilometri da percorrere"));
// const age = parseInt(prompt("Inserisci la tua età"));


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
  price = price - discount;
  const result = price.toFixed(2);
  return result
}

// console.log(calculatePrice(21, 100));
