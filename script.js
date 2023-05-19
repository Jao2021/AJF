class CardEngenharia {
    constructor(cardEnge, cardList, cardLinks) {
    this.cardEnge = document .querySelector (cardEnge) ;
    this.cardList = document.querySelector(cardList) ;
    this.cardLinks = document.querySelectorAll(cardLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.cardLinks.forEach((link, index) => {
        link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `cardLinkFade 0.3s ease forwards ${
                index / 7 + 0.3
            }s`);
        });
    }


    handleClick() {
        this.cardList.classList.toggle(this.activeClass);
        this.cardEnge.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    addClickEvent(){
        this.cardEnge.addEventListener("click", this.handleClick);
    }

    init(){
        if (this.cardEnge){
            this.addClickEvent();
        }
        return this;
    }
}

const cardengenharia = new CardEngenharia(
    ".card-enge",
    ".card-main-enge",
    ".enge-row",
);
cardengenharia.init();

/**/
