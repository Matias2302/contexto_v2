//Navbar
const navSlide = ()=> {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', ()=>{
      nav.classList.toggle('nav-active');

      //Animation links
      navLinks.forEach((link, index)=>{
          if(link.style.animation){
              link.style.animation = '';
          }else{
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`
          }
      });
      //burger animation
      burger.classList.toggle('toggle');
  });
  
}
navSlide();
//fin navbar

//otro boton con trigger
var BtnPdf = document.querySelector(".btn-pdf");
var informeFull = document.querySelector("#informe-pdf");
var isHidden = true;

if(BtnPdf){
BtnPdf.addEventListener("click", function () {
  if (isHidden) {
    
    informeFull.classList.remove("out");
    informeFull.classList.add("active");
  } else {
    informeFull.classList.remove("active");
    informeFull.classList.add("out");
    
  }
  isHidden = !isHidden;
});
}

/*===Contenido dinámico con trigger====*/
// Obtener el botón y el div con el texto adicional
const mostrarBtn = document.querySelector('.mostrarBtn');
const textoAdicional = document.querySelector('.texto-adicional');
const hero = document.querySelector('.hero');
const box = document.querySelector('.box');
const contextoLogo = document.querySelector('.contexto-logo');
var heroOculto = true;
//Si el elemento mostrarBtn existe hago todo lo demás
if (mostrarBtn) {

  function toggleClassesBtn(e){
    // Mostrar o ocultar el div con el texto adicional
    heroOculto = false;
    textoAdicional.classList.toggle('texto-adicional-full');
    textoAdicional.classList.toggle('fade-in');
    box.classList.toggle("box-1");
    box.classList.toggle("fade-in");
    hero.classList.toggle("hero-texto");
    contextoLogo.classList.toggle("slide-right");
    contextoLogo.classList.toggle("contexto-logo-mid");
    if (e.target.textContent === 'Más info') {
      e.target.textContent = 'Menos info';
      } else {
          e.target.textContent = 'Más info';
      }
    
        
  }  
  // Agregar un evento de clic al botón
  mostrarBtn.addEventListener("click", toggleClassesBtn);
}


/*================GLOASRIO==========================*/
const accordion = document.querySelector(".accordion");

if(accordion){
accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".accordion-panel");
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
  const activeButton = panelToActivate.querySelector("button");
  const activePanel = panelToActivate.querySelector(".accordion-content");
  const activePanelIsOpened = activeButton.getAttribute("aria-expanded");

  if (activePanelIsOpened === "true") {
    panelToActivate
      .querySelector("button")
      .setAttribute("aria-expanded", false);

    panelToActivate
      .querySelector(".accordion-content")
      .setAttribute("aria-hidden", true);
  } else {
    panelToActivate.querySelector("button").setAttribute("aria-expanded", true);

    panelToActivate
      .querySelector(".accordion-content")
      .setAttribute("aria-hidden", false);
  }
}

}
/*========================================*/
