function categoryHide() { 
    $(".main-introduction__category").fadeOut("slow");
    $(".main-introduction__welcome").fadeOut("slow");
}
let category;

function CategoryIncrease(CategoryNumber) {
    const category = document.getElementsByClassName('main-introduction__category-item');
  category[CategoryNumber - 1].style.color = "white";
}

function CategoryDecrease(CategoryNumber) {
    const category = document.getElementsByClassName('main-introduction__category-item');
    category[CategoryNumber - 1].style.color = "inherit";
}

function chooseCategory(CategoryNumber) {
    // clearTimeout(timerChange);
    // clearTimeout(timerHide);
    console.log("You choose: ",CategoryNumber," category")
    const categoryScreen = document.getElementsByClassName('main-introduction__category');
    timerHide = setTimeout('categoryHide()', 500);

}