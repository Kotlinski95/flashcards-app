let page = 0;
let category;
let language;
let flashcardsNumber;

const welcome_p = document.getElementsByClassName("main-title");
const welcome_h1 = document.querySelector("h1");
const welcome_h2 = document.querySelector("h2");
const category_button = document.getElementsByClassName('main-introduction__category-item');
let flashcard = document.getElementsByClassName('main-flashcard-item');
const cardswrapper = document.getElementsByClassName('main-flashcards-wrapper');
const returnArrow = document.getElementsByClassName('main-return-wrapper');

returnArrow[0].addEventListener('click', function () {
    if (page > 0) {
        page--;
        console.log("return to page:", page)
    }
    timerHide = setTimeout("categoryHide()", 500);
    timerShow = setTimeout("categoryShow()", 1500);
});

function removeCards() {
    var childs = cardswrapper[0].children;
    console.log("I have ", childs.length, " to delete!")
    while (childs.length > 1) {
        for (m = 1; m < childs.length; m++) {
            cardswrapper[0].removeChild(childs[m]);
}
    }
    var childs = cardswrapper[0].children;
    console.log("There is still ",childs.length," to delete!" )
}

function showCard(amount) {
    for (let i = 0; i < amount; i++) {
        var newCard = flashcard[0].cloneNode(true);
        newCard.style.display = 'inline-block';
        newCard.querySelector('.main-flashcard__front--body').innerText = `Front ${i+1}`;
        newCard.querySelector('.main-flashcard__back--body').innerText = `Back ${i+1}`;
        cardswrapper[0].appendChild(newCard)
    }
    flashcard = document.getElementsByClassName('main-flashcard-item');
    console.log("how many cards i have? o.O", flashcard.length - 1)
    for (let i = 1; i < flashcard.length; i++) {
        flashcard[i].querySelector('.main-flashcard-inner').addEventListener('click', function () {
            flashcard[i].querySelector('.main-flashcard-inner').classList.toggle('is-flipped');
        });
    }
}

function categoryHide() {
    switch (page) {
        case 0:
            $(".main-introduction__category").fadeOut("slow");
            $(".main-introduction__welcome").fadeOut("slow");
            $(".main-flashcards-wrapper").fadeOut("slow");
            $(".main-return-wrapper").fadeOut("slow");
            break;
        case 1:
            setTimeout("removeCards()", 3000)
            $(".main-introduction__category").fadeOut("slow");
            $(".main-introduction__welcome").fadeOut("slow");
            $(".main-flashcards-wrapper").fadeOut("slow");


            break;
        case 2:
            $(".main-introduction__category").fadeOut("slow");
            $(".main-introduction__welcome").fadeOut("slow");
            break;
    }
}

function categoryShow() {
    switch (page) {
        case 0:
            welcome_p[0].innerText = "Welcome!";
            welcome_h1.innerText = "Flashcard application - easy learn Front-End programing";
            welcome_h2.innerText = "Please, choose your category";
            category_button[0].innerHTML = 'HTML';
            category_button[1].innerHTML = 'CSS';
            category_button[2].innerHTML = 'JavaScript';
            $(".main-introduction__category").fadeIn("slow");
            $(".main-introduction__welcome").fadeIn("slow");
            break;
        case 1:
            welcome_p[0].innerText = "";
            welcome_h1.innerText = "";
            welcome_h2.innerText = "Choose number of flashcards";
            category_button[0].innerHTML = '10';
            category_button[1].innerHTML = '20';
            category_button[2].innerHTML = '30';
            returnArrow[0].style.display = 'block';
            $(".main-introduction__category").fadeIn("slow");
            $(".main-introduction__welcome").fadeIn("slow");
            $(".main-return-wrapper").fadeIn("slow");
            break;
        case 2:
           showCard(flashcardsNumber * 10);
            console.log("showCard: ", flashcardsNumber)
            $(".main-flashcards-wrapper").fadeIn(1000);
    }
}

function CategoryIncrease(CategoryNumber) {
    const category = document.getElementsByClassName(
        "main-introduction__category-item"
    );
    category[CategoryNumber - 1].style.color = "white";
}

function CategoryDecrease(CategoryNumber) {
    const category = document.getElementsByClassName(
        "main-introduction__category-item"
    );
    category[CategoryNumber - 1].style.color = "inherit";
}

function chooseCategory(CategoryNumber) {

    switch (page) {
        case 0:
            timerHide = setTimeout("categoryHide()", 500);
            timerShow = setTimeout("categoryShow()", 1500);
            language = CategoryNumber;
            page++;
            console.log("actual page: ", page);
            console.log("language: ", language);
            break;
        case 1:
            timerHide = setTimeout("categoryHide()", 500);
            timerShow = setTimeout("categoryShow()", 1500);
            flashcardsNumber = CategoryNumber;
            page++;
            console.log("actual page: ", page);
            console.log("flashcard number: ", flashcardsNumber);
            break;
        case 2:
            page++;
            console.log("actual page: ", page);
            break;

    }
}