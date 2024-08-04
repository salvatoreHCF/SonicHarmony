AOS.init();

const swiper = new Swiper(".mySwiper", {
		loop: true,
        effect: "coverflow",
        centeredSlides: true,
         slidesPerView: "auto",
      coverflowEffect: {
          depth: 100,
          modifier: 1,
        rotate: 0,
          scale: 1,
        slideShadows: false,
          stretch: 1,        
      },
		navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
	});
    document.querySelectorAll(".puntatore").forEach(function (mostra){
        mostra.addEventListener("mouseover",function(){
            document.querySelector(this.getAttribute("data-obiettivo")).classList.add("rivela");
        });
    });
    document.querySelectorAll(".puntatore").forEach(function (nascondi){
        nascondi.addEventListener("mouseleave",function(){
            document.querySelector(this.getAttribute("data-obiettivo")).classList.remove("rivela");
        });
    });
    
document.getElementById("hamburger").addEventListener("click", function(){
		document.getElementById("wrapper-menu").classList.toggle("open");
    document.getElementById("wrapper-menu").classList.toggle("voci-menu");
    document.getElementById("hamburger").classList.toggle("chiudi")
	}); 


const items = document.querySelectorAll(".cambia");
const image = document.getElementById("frame");

items.forEach(function(woofer){
    
   woofer.addEventListener("click",function(e){
       const imageData = e.target.getAttribute("data-image");
       image.src = imageData;
       image.style.display = "block";
       image.style.opacity = 1; 
       
   }); 
});

document.addEventListener('DOMContentLoaded', function() {
    const miniature = document.querySelectorAll('.cambia');
    miniature.forEach(function(mini) {
        mini.addEventListener('click', function(event) {
            event.preventDefault();
            const targetID = this.getAttribute('data-obiettivo');
            const cards = document.querySelectorAll('.cards');
            cards.forEach(function(card) {
                card.classList.remove('slide');
            });
            const targetCard = document.querySelector(targetID);
            targetCard.classList.add('slide');
        });
    });
});

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

	document.querySelector(".bologna").addEventListener("click", function(){
		document.getElementById("città").innerHTML = "Bologna";
        document.getElementById("via").innerHTML = "Via dell'Indipendenza";
        document.getElementById("telefono").innerHTML = "051 123 4567";
	});
document.querySelector(".genova").addEventListener("click", function(){
		document.getElementById("città").innerHTML = "Genova";
        document.getElementById("via").innerHTML = "Via Garibaldi";
        document.getElementById("telefono").innerHTML = "010 123 4567";
	});
document.querySelector(".torino").addEventListener("click", function(){
		document.getElementById("città").innerHTML = "Torino";
        document.getElementById("via").innerHTML = "Via Roma";
        document.getElementById("telefono").innerHTML = "011 123 4567";
	});
document.querySelector(".napoli").addEventListener("click", function(){
		document.getElementById("città").innerHTML = "Napoli";
        document.getElementById("via").innerHTML = "Via Toledo";
        document.getElementById("telefono").innerHTML = "081 123 4567";
	});
document.querySelector(".napoli2").addEventListener("click", function(){
		document.getElementById("città").innerHTML = "Napoli";
        document.getElementById("via").innerHTML = "Via Toledo";
        document.getElementById("telefono").innerHTML = "081 123 4567";
	});
document.querySelector(".roma").addEventListener("click", function(){
		document.getElementById("città").innerHTML = "Roma";
        document.getElementById("via").innerHTML = "Via del Corso";
        document.getElementById("telefono").innerHTML = "06 123 4567";
	});
document.querySelector(".roma2").addEventListener("click", function(){
		document.getElementById("città").innerHTML = "Roma";
        document.getElementById("via").innerHTML = "Via del Corso";
        document.getElementById("telefono").innerHTML = "06 123 4567";
	});
document.querySelector(".sanmarino").addEventListener("click", function(){
		document.getElementById("città").innerHTML = "San Marino";
        document.getElementById("via").innerHTML = "Via Piana";
        document.getElementById("telefono").innerHTML = "+378 123 4567";
	});
document.querySelector(".sanmarino2").addEventListener("click", function(){
		document.getElementById("città").innerHTML = "San Marino";
        document.getElementById("via").innerHTML = "Via Piana";
        document.getElementById("telefono").innerHTML = "+378 123 4567";
	});
