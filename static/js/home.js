const initHeader = document.querySelector('header .init');
const searchHeader = document.querySelector('header .search');
const searchBtn = document.querySelector('header .init .btn-list .search-btn');
const backBtn = document.querySelector('header .search .btn-list .back-btn');

searchBtn.addEventListener('click', () => {
  initHeader.classList.toggle('none');
  searchHeader.classList.toggle('none');
});

backBtn.addEventListener('click', () => {
  initHeader.classList.toggle('none');
  searchHeader.classList.toggle('none');
});
