const calculateButton = document.getElementById('calculate');
const priceOfferContainer = document.getElementById('price-offer');

calculateButton.addEventListener('click', function (e) {
  priceOfferContainer.classList.remove('hidden');
  priceOfferContainer.classList.add('flex');
});