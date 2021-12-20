const targetImg = document.querySelector('#target_img');
const profileImg = document.querySelector('.img-profile');
const file = document.getElementById('file');

file.addEventListener('change', e => {
  setThumnail(e);
});

targetImg.addEventListener('click', function (e) {
  // document.signform.target_url.value = document.getElementById('target_img').src;
  document.querySelector('#file').click();

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

function setThumnail(e) {
  const reader = new FileReader();

  reader.onload = e => {
    profileImg.src = e.target.result;
  };
  console.log('reader');
  reader.readAsDataURL(e.target.files[0]);
}
