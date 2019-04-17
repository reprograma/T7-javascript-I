window.addEventListener('DOMContentLoaded', function(event) {

  const movies = ['https://media.giphy.com/media/7MydCusLMRFVm/giphy.gif', 'https://media.giphy.com/media/l3V0G6RGynhmcetpK/giphy.gif', 'https://media.giphy.com/media/PjdgEh8P9Qr28/giphy.gif'];

  const moviesTitle = ['Brilho Eterno de uma Mente sem Lembranças', 'O Iluminado', 'Thelma & Louise'];

  const displayMovie = document.querySelector('#displayMovie');
  const displayMoviePoster = document.querySelector('#displayMoviePoster');

  function displayMovieOne() {
    displayMoviePoster.innerHTML = `<img width="600" src=${movies[0]} />`;
  }

  function displayMovieTwo() {
    displayMoviePoster.innerHTML = `<img width="600" src=${movies[1]} />`;
  }

  function displayMovieThree() {
    displayMoviePoster.innerHTML = `<img width="600" src=${movies[2]} />`;
  }

  function displayMoviesTitle() {
    displayMoviePoster.innerHTML = "";

    moviesTitle.forEach(function(item){
      return displayMovieTitle.innerHTML += `<li>${item}</li>`;
    });
  }

  displayMovie.addEventListener('click', function () {
    displayMovieTitle.innerHTML = "";

    displayMovieOne();

    setTimeout(displayMovieTwo, 5000);
    setTimeout(displayMovieThree, 10000);
    setTimeout(displayMoviesTitle, 15000);

  });

});
