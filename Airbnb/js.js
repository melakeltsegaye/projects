const nav = document.querySelector(".nav1");
const nav2 = document.querySelector(".nav2");
const nav1 = document.querySelector(".nav1-2");
const navigatioN = document.querySelector(".navigatioN");
const cardcont = document.querySelector(".cardcont");
const serch = document.querySelector(".serch");
const chekout = document.querySelector(".chekout");
const chekin = document.querySelector(".chekin");
const inp = document.querySelector(".inp");
const where = document.querySelector(".where");
const bar = document.querySelectorAll(".bar");
const who = document.querySelector(".who");
const who1 = document.querySelector(".who1");
const who2 = document.querySelector(".who2");
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const filtslider = document.querySelector(".filtslider");
const airbnb = document.querySelector(".airbnb");
const nav3 = document.querySelector(".nav1-3");
const nav11 = document.querySelector(".nav1-1");
const pchek = document.querySelector(".pchek");
const pchek2 = document.querySelector(".pchek2");
const pchek3= document.querySelector(".pchek3");
const filtcont= document.querySelector(".filtcont");
const lbar= document.querySelectorAll(".lbar");
const closef= document.querySelector(".closef");
const footer2= document.querySelector(".footer2");
const discription= document.querySelector(".discription");
const footer= document.querySelector(".footer");
const navcont= document.querySelector(".navcont");
const showmap= document.querySelector(".showmap");
const more= document.querySelector(".more");
const explorcont= document.querySelector(".explorcont");




// making the bars on and off



if (window.innerWidth < 750) {
  bar.forEach((item) => {
    item.style.display = "none";
  });
}


function hi1(event) {
    const target = event.target;
      if (event.type === "mouseover" && window.innerWidth > 750) {
      if (target === where || target.parentNode === where) {
        inp.style.backgroundColor = "rgb(241, 241, 241)";
        bar[0].style.display = "none";
      } else if (target === chekin || target.parentNode === chekin) {
        bar[0].style.display = "none";
        bar[1].style.display = "none";
      } else if (target === chekout || target.parentNode === chekout) {
        bar[2].style.display = "none";
        bar[1].style.display = "none";
      } else if (target === who || target.parentNode === who ) {
        bar[2].style.display = "none";
      } else if (target === who1 || target.parentNode === who1 ) {
        bar[2].style.display = "none";
      } else if (target === who2 || target.parentNode === who2 ) {
        bar[2].style.display = "none";
      } else if (target === inp || target.parentNode === inp) {
        inp.style.backgroundColor = "rgb(241, 241, 241)";
        bar[0].style.display = "none";
      }
    } else if (event.type === "mouseout" && window.innerWidth > 750) {
      inp.style.backgroundColor = "white";
      bar[0].style.display = "block";
      bar[1].style.display = "block";
      bar[2].style.display = "block";
    } else if (window.innerWidth < 750) {
      bar.forEach((item) => {
        item.style.display = "none";
      });
    } 
  }
  

where.addEventListener("mouseover", hi1);
where.addEventListener("mouseout", hi1);
who.addEventListener("mouseover", hi1);
who.addEventListener("mouseout", hi1);
chekin.addEventListener("mouseout", hi1);
chekin.addEventListener("mouseover", hi1);
chekout.addEventListener("mouseout", hi1);
chekout.addEventListener("mouseover", hi1);
who1.addEventListener("mouseover", hi1);
who1.addEventListener("mouseout", hi1);
who2.addEventListener("mouseover", hi1);
who2.addEventListener("mouseout", hi1);






// making the navigation responsive adding nav1 to navigation and adding back to the nav



function handleBackgroundColor() {
    if (window.innerWidth <= 1000) {

    nav1.remove()

    var secondchild = navigatioN.children[1];

    navigatioN.insertBefore(nav1, secondchild)

} else {
    var firstChild = nav.children[1];
    nav.insertBefore(nav1, firstChild);
}}


window.addEventListener("load", handleBackgroundColor);
window.addEventListener("resize", handleBackgroundColor);


// sliding the images


arrow1.addEventListener("click", move1)
arrow2.addEventListener("click", move2)
filtslider.addEventListener('scroll', handleScroll);



function move1() {

  filtslider.scrollLeft -= 500
  
}
function move2() {

  filtslider.scrollLeft += 500
  
}


function handleScroll() {
  if (window.innerWidth > 750) {
    const scrollPosition = filtslider.scrollLeft;
  const maxScroll = filtslider.scrollWidth - filtslider.clientWidth;

  arrow2.style.display = scrollPosition < maxScroll ? 'flex' : 'none';
  arrow1.style.display = scrollPosition > 0 ? 'flex' : 'none';
  }
}



//removing the serch form the navigation to the nav in place of nav1





var lastScrollPosition = cardcont.scrollTop;

cardcont.addEventListener("scroll", function() {
  var currentScrollPosition = cardcont.scrollTop;
  
  if (currentScrollPosition > lastScrollPosition && window.innerWidth > 750) {
    // Scrolling up
    


    if (window.innerWidth < 1000) {
      nav1.remove()
      var firstChild = nav.children[1];
    nav.insertBefore(nav1, firstChild);
    }
    for (i = 0; i < lbar.length; i++) {
      lbar[i].style.display = "block"
    }
  serch.style.display = "none"
  airbnb.style.display = "none"
  navigatioN.style.paddingBottom = "0"
  filtcont.style.padding = "8px 40px";
  nav1.classList.add('action');
  cardcont.style.paddingTop = "200px"
    // Perform actions for scrolling down
  } else if (window.innerWidth > 750 ) {
    // Scrolling down
    cardcont.style.paddingTop = "270px"
    serch.style.display = "flex"
    airbnb.style.display = "block"
    navigatioN.style.paddingBottom = "20px"
    filtcont.style.padding = "8px 40px"
    nav1.classList.remove('action');
    for (let i = 0; i < lbar.length; i++) {
      lbar[i].style.display = "none"
    }
    if (window.innerWidth < 1000) {
    nav1.remove()

    var secondchild = navigatioN.children[1];

    navigatioN.insertBefore(nav1, secondchild)
    }
    // Perform actions for scrolling up
  } 
  
  lastScrollPosition = currentScrollPosition;
});





// footer section


if (window.innerWidth > 750) {
discription.addEventListener("click", () => {
  footer2.style.display = "flex"
})


closef.addEventListener("click", () => {
  footer2.style.display = "none"
})

} else if (window.innerWidth <= 750) {

  closef.style.display = "none"
      var firstChild = footer2.children[4];
    footer2.insertBefore(footer, firstChild);

  
    

}




// pushing the navigation


function handleResizeAndScroll() {
if (window.innerWidth <= 750) {
  const topElementTop = footer2.getBoundingClientRect();
  const topcardcont = cardcont.getBoundingClientRect();
  const topshowmore = more.getBoundingClientRect();

  
 

  if(topcardcont.top === 0) {
    showmap.style.display = "none"
  } else if (topshowmore.top <= 705.62) {
    showmap.style.display = "none"
  } else {
    showmap.style.display = "flex"
  }

    if (topElementTop.top  < 160) {
      // Perform some action when the condition is true
      navcont.style.position ="relative"
      cardcont.style.display = "none"
      // Do something here...
    } else if (topElementTop.top  >= 160){
      cardcont.style.display = "grid"
      navcont.style.position ="fixed"

    }
}
}

window.addEventListener('resize', handleResizeAndScroll);
window.addEventListener('scroll', handleResizeAndScroll);






var scrollPosition = window.pageYOffset;

window.addEventListener("scroll", function() {
  var currentScroll = window.pageYOffset;

  if (currentScroll < scrollPosition && window.innerWidth <= 750) {
    explorcont.style.display = "none"
  } else {
    explorcont.style.display = "flex"
  }

  scrollPosition = currentScroll;
});




// geting images form unsplash api






// selecting place using the slider img


const filtimg = document.querySelectorAll(".filtimg");
const imgcont = document.querySelectorAll(".imgcont1");

imgcont.forEach((img) => {
  img.addEventListener("click", (event) => {
    event.preventDefault();
    page = 100;

    for (let i = 0; i < 20; i++) {
      get();
    }

   
  });
});




const apiKey = "nACDvgAfrlhVoRbwOSmuJmgPtlploGSB48A27q2z5as";


let inputdata = ""
let page = 100;

async function get() {
  cardcont.innerHTML = "";
  inputdata = inp.value;

  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?page=${page}&query=${inputdata}&client_id=${apiKey}`);
    const data = await response.json();
    const resalts = data.urls.small;

    const card = document.createElement('div');
    card.classList.add('card');

    const imgcont = document.createElement('div');
    imgcont.classList.add('imgcont');

    const img = document.createElement('img');
    img.classList.add("img");
    img.src = resalts;

    const p1 = document.createElement('p');
    p1.innerText = "Abisansemal, Indonesia";

    const p2 = document.createElement('p');
    p2.innerText = "8,659 Kilometers away";

    const p3 = document.createElement('p');
    p3.innerText = "June 6-11";

    const p4 = document.createElement('p');
    p4.innerText = "$469 night";

    imgcont.appendChild(img);
    cardcont.appendChild(card);
    card.appendChild(imgcont);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);

    page = page + 100;
  } catch (error) {
    console.log("Error: " + error.message);
  }
}



who2.addEventListener("click", (event) => {
  try {

    event.preventDefault();
    page = 100;
    
  for (let i = 0; i < 20; i++) {
    get();
  }
  } catch(error) {

    console.log("error")
  }
 
 

})


// signup and form section


const sing = document.querySelector(".sing")
const forme = document.querySelector(".form")
const profile = document.querySelector(".profile")
const closef2 = document.querySelector(".closef2")





sing.addEventListener("click", () => {
  forme.style.display = "block"
})
closef2.addEventListener("click", () => {
  forme.style.display = "none"
})



document.addEventListener("click", function(event) {
  var targetElement = event.target;

  // Check if the clicked element is not the profile element
  if (targetElement !== profile) {
    sing.style.display = "none";
  } else if (targetElement === profile) {
    sing.style.display = "block"
  }
});




// page2 functionality


const img = document.querySelectorAll(".img")





  
    img.forEach(function(element) {
      element.addEventListener("click", function(event) {
      
        const imgsrc = event.target.src;
        localStorage.setItem('img_src', imgsrc);
        window.location.href = "page2.html";
      });
    })

  



// console.log(img.item(0).src)























//  let inputdata = ""
//  let page = 1;
//  async function serchresalt() {
//    inputdata = inp.value;
//    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${apiKey}`;
//    const response = await fetch(url)
//    const data = await response.json();
//    const resalts = data.resalts
//    if(page === 1) {
//       cardcont.innerHTML = ""
//    }


   
//    resalts.map((resalt) => {
//       const card = document.createElement('div')
//       card.classList.add('card')
//       const imgcont = document.createElement('div')
//       imgcont.classList.add('imgcont')
//       const img = document.createElement('img')
//       img.classList.add("img")
//       img.src = resalt.urls.small
//       cardcont.appendChild(card)
//       card.appendChild(imgcont)
//       imgcont.appendChild(img)
//     })
 
//     console.log("empty")
  

   
// page++
// }


// who2.addEventListener("click", (event) => {
//   event.preventDefault();
//   page = 1;
//   serchresalt();
// })












// window.addEventListener('resize', function() {
//   location.reload();
//   page = 10
//   serchresalt()
// });





