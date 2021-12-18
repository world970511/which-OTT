const targetImg = document.querySelector('#target_img');
const profileImg = document.querySelector('.img-profile');

targetImg.addEventListener('click', function (e) {
  // document.signform.target_url.value = document.getElementById('target_img').src;
  document.querySelector('#file').click();
  console.log(form.action);
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(file);
  });
  /*
  
  if (file) {
    console.log(file.value);
    document.querySelector('.btn-primary').click();
    
  }
  */
});

/*
function changeValue(obj) {
  const fileName = obj.value.match(/[^\\/\n]+$/)[0];
  document.querySelector('.img-profile').src = `img/${fileName}`;
}
*/
