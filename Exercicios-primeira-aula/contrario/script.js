window.addEventListener('DOMContentLoaded', function() {

  const getName = document.getElementById('getName');

  getName.addEventListener('click', function() {
    let myName = document.getElementById('name').value;

    function reverseName() {
      return myName.split("").reverse().join("");
    };

    result.innerHTML = reverseName(myName);
  });

});
