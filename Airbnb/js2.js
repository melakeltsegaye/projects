const reivpar = document.querySelector(".reivpar");
const nobel = document.querySelector(".nobel");



// creating daynamic images

window.addEventListener('DOMContentLoaded', function() {
    const morimg = document.querySelectorAll(".morimg");
    const img = document.querySelector(".img");
    const imgsrc2 = localStorage.getItem('img_src');


    img.src = imgsrc2
    morimg.forEach(function(element) {
        element.src = imgsrc2
    })

  
  });




// making the morcont responsiv




function textchang() {
  if (window.innerWidth > 820 && window.innerWidth < 1070) {
    reivpar.innerText = "One of the most..."
  } else if(window.innerWidth > 1000) {
    reivpar.innerText = "One of the most loved homes acording to airbnb guests"
  } else if (window.innerWidth <= 820) {
    reivpar.style.display  = "none";
    nobel.innerHTML = `<a href="index.html"><i class="fa-solid fa-angle-left"></i> Home</a>`
  }
  }

  textchang()

window.addEventListener('resize', textchang);


