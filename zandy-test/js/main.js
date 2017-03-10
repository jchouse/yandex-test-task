// target element
var el = document.querySelector('#el');

// current rating, or initial rating
var currentRating = JSON.parse(localStorage.getItem('Stars'), 10) || 0;

// max rating, i.e. number of stars you want
var maxRating= 5;

// callback to run after setting the rating
var callback = function(rating) {localStorage.setItem('Stars', rating)};

// rating instance
var myRating = rating(el, currentRating, maxRating, callback);

function imgError(image) {
    image.parentElement.className += "error";
}