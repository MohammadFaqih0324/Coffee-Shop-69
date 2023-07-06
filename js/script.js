// Toggle class active untuk hamburger menu
const navbar = document.querySelector('.navbar');
// Ketika hamburger menu di klik
document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
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
 
// Detail Box
const itemDetail = document.querySelector('#item-detail');
const detailButton = document.querySelector('.detail-button');

detailButton.onclick = (e) => {
    itemDetail.style.display = 'flex';
    e.preventDefault();
};

// klik tombol close
document.querySelector('.detail .close-icon').onclick = (e) => {
  itemDetail.style.display = 'none';
  e.preventDefault();
};

// klik di luar detail
// window.onclick = (e) => {
//   if (e.target === itemDetail) {
//     itemDetail.style.display = 'none';
//   }
// };