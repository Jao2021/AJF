class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document .querySelector (mobileMenu) ;
    this.navList = document.querySelector(navList) ;
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
        link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.3s ease forwards ${
                index / 7 + 0.3
            }s`);
        });
    }


    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".menu-op",
    ".menu-op-items",
);
mobileNavbar.init();

/**/


  document.getElementById("myDivI12").addEventListener("click", function() {
    document.getElementById("card-ins12").checked = false;
  });

  document.getElementById("myDivI13").addEventListener("click", function() {
    document.getElementById("card-ins13").checked = false;
  });

 document.getElementById("myDivE").addEventListener("click", function() {
    document.getElementById("card-elaboracao").checked = false;
  });

  document.getElementById("myDivM").addEventListener("click", function() {
    document.getElementById("card-man").checked = false;
  });

  document.getElementById("myDivC").addEventListener("click", function() {
    document.getElementById("card-carga").checked = false;
  });

document.getElementById("myDivPMOC").addEventListener("click", function() {
    document.getElementById("card-pmoc").checked = false;
  });

document.getElementById("myDivEST").addEventListener("click", function() {
    document.getElementById("card-estanqueidade").checked = false;
  });

document.getElementById("myDivCam").addEventListener("click", function() {
    document.getElementById("card-cam").checked = false;
  });

document.getElementById("myDivrin").addEventListener("click", function() {
    document.getElementById("card-rin").checked = false;
  });

document.getElementById("myDivmet").addEventListener("click", function() {
    document.getElementById("card-met").checked = false;
  });
  /**/
  function activateRadioAndScroll(radioId, sectionId) {
    var radio = document.getElementById(radioId);
    radio.checked = true;

    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}