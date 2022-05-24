const calculateButton = document.getElementById('calculate');
const priceOfferContainer = document.getElementById('price-offer');
const totalPriceOffer = document.getElementById('total');

const bikeTypeCosts = {
  mountain: 300,
  city: 200,
  electric: 600
}

const problemTypeCosts = {
  gear: 600,
  tire: 300,
  battery: 800
}

const vat = 0.2;

calculateButton.addEventListener('click', function (e) {
  const bikeType = document.getElementById('bike-type').value;
  const problemType = document.getElementById('problem').value;

  const costs = bikeTypeCosts[bikeType] + problemTypeCosts[problemType]

  totalPriceOffer.innerText = costs + costs * vat;

  priceOfferContainer.classList.remove('hidden');
  priceOfferContainer.classList.add('flex');
});