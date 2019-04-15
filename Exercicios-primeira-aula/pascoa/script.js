window.addEventListener('DOMContentLoaded', function(event) {

const selectCountry = document.querySelector('#country');
const cityFieldset = document.querySelector('#cityFieldset');
const displayText = document.querySelector('#result');
const selectCity = document.querySelector('#city');

selectCountry.addEventListener('change', function(event) {
  const countryValue = this.value;

  if (countryValue === 'br') {
    cityFieldset.classList.remove('hidden');
    displayText.innerHTML = ""

    selectCity.addEventListener('change', function(event) {
      const cityValue = this.value;

      if (cityValue === 'cxs') {
        displayText.innerHTML = '🍫 Minha amiga vai ganhar um ovo de chocolate ao leite e um ovo de chocolate branco 🍬';
      } else if (cityValue === 'poa') {
        displayText.innerHTML = '🍬 Minha amiga vai ganhar um ovo de chocolate amargo e um ovo de chocolate ao leite 🍫';
      } else if (cityValue === 'default') {
        displayText.innerHTML = ""
        
      } else {
        displayText.innerHTML = '🍬 Minha amiga vai ganhar duas caixas de bombons 🍫';
      }
    });


  } else if (countryValue === 'aus') {
    cityFieldset.classList.add('hidden');
    displayText.innerHTML = '🍫 Minha amiga vai ganhar dois ovos de chocolate branco 🍬';

  } else if (countryValue === 'eua') {
    cityFieldset.classList.add('hidden');
    displayText.innerHTML = '🍬 Minha amiga vai ganhar dois ovos de chocolate ao leite 🍫'

  } else if (countryValue === 'default') {
    displayText.innerHTML = ""

  } else {
    cityFieldset.classList.add('hidden');
    displayText.innerHTML = '🍫 Minha amiga vai ganhar dois ovos de chocolate amargo 🍬'
  };

});

});
