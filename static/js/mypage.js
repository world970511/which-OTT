/**** ACCORDION HISTORIES ****/
const historiesContent = document.querySelectorAll('.histories__content');

function toggleHistories() {
  this.classList.toggle('histories__open');
}

historiesContent.forEach(element => {
  element.addEventListener('click', toggleHistories);
});
