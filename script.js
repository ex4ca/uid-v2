const menuItems = document.querySelectorAll('.menuItem');

// Add click event listener to each menu item
menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        // Remove "active" class from all menu items
        menuItems.forEach((item) => {
            item.classList.remove('active');
        });

        // Add "active" class to the clicked menu item
        menuItem.classList.add('active');
    });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("sliderImg");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  } 
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}