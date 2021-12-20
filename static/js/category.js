const items = document.querySelectorAll('main .item');

items.forEach(item => {
  item.addEventListener('click', async () => {
    const category = item.querySelector('span').getAttribute('value');

    await fetch(`http://localhost:3000/posts/category?category=${category}`, {
      method: 'get',
    });

    window.location.replace(
      `http://localhost:3000/posts/category?category=${category}`,
    );

    // location.href = 'search/category/:category';
  });
});
