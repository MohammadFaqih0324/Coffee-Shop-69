// Toggle class active untuk hamburger menu
const navbar = document.querySelector('.navbar');
// Ketika hamburger menu di klik
document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Klik di luar sidebar untuk menghilangkan nav
const m = document.querySelector('#menu-btn');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function (e){
  if (!m.contains(e.target) && !navbar.contains(e.target)){
    navbar.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
});