let slideIndex = 1;

let photo_data = [
  {"name":"Manti Temple", "description": "While exploring the temple grounds in Manti, Utah, I came across this flower bed at the bottom of the hill. After moving around a bit to find the best angle, this was the photo was taken. This is one of my all time favorite photos, with it's bright colors and beautiful flowers, it majestically balances out with the white temple in the background."},
  {"name":"Payson Temple", "description": "Temples have always been one of my favorite subjects to photograph. Their beauty, spectacle, and purpose are a blessing to all the world. When the Payson, Utah temple was constructed, I couldn't help but drive there and capture a few pictures. This was one of my favorites."},
  {"name":"Bear Lake Sunset", "description": "Growing up, Bear Lake has been one of life's constants. My family has gone there every year. When the sun sets over the water, some of the most beautiful colors are created. This was my attempt to capture one of these beautiful moments."},
]










showSlides(slideIndex);

function plusSlides(n) 
{
  showSlides(slideIndex += n);
}

function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

function showSlides(n) 
{
  let i;
  let slides = document.getElementsByClassName("c-image");

  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none"; 
  }

  slides[slideIndex-1].style.display = "block"; 
  document.querySelector("#img-name").textContent = photo_data[slideIndex-1].name
  document.querySelector("#img-desc").textContent = photo_data[slideIndex-1].description
}