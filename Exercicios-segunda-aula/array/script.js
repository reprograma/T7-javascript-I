window.addEventListener('DOMContentLoaded', function(event) {

  const dogs = ['Dakota', 'Arizona', 'Gloria', 'Rex', 'Bolinha'];
  const result = document.getElementById('result');
  
  result.innerHTML = `O array dogs tem ${dogs.length} itens:`

  dogs.forEach(function(item) {
    resultList.innerHTML += `<li>${item}</li>`
  });
  // o operador += faz com que cada vez que um item passe no loop ele seja incrementado

});
