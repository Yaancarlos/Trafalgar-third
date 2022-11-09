let carousel = 1;

let showResposiveMenu = () => {
    const Local = document.querySelector("#responsiveMenu").classList
    Local.toggle('absolute')
    Local.toggle('hidden')
}

function showSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

showSlides(carousel);

function plusSlides(n) {
  showSlides(carousel += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {carousel = 1}    
  if (n < 1) {carousel = slides.length}
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";  
  }
  slides[carousel-1].style.display = "block";  
}

function showMenu(a) {
  document.getElementById(`show_product-${a}`).classList.toggle("hidden")
}