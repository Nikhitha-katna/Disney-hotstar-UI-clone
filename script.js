// Get all card containers, previous buttons, and next buttons
const prevButtons = document.querySelectorAll('.prev-btn');
const nextButtons = document.querySelectorAll('.next-btn');
const cardContainers = document.querySelectorAll('.card-container');

const scrollAmount = 170; 


prevButtons.forEach((prevButton, index) => {
  prevButton.addEventListener('click', () => {
    cardContainers[index].scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });
});

nextButtons.forEach((nextButton, index) => {
  nextButton.addEventListener('click', () => {
    cardContainers[index].scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
});
