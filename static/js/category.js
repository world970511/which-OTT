const items = document.querySelectorAll('main .item');

items.forEach(item => {
  item.addEventListener('click', () => {
    const category = item.querySelector('span').getAttribute('value');

    console.log(category);

    // location.href = 'search/category/:category';
  });
});
