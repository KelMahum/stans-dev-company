// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

// Burger
let burger = document.querySelector('.header__burger')
let menu = document.querySelector('.header__menu')
let close = document.querySelector('.header__close')
burger.addEventListener('click', function(){
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})
close.addEventListener('click', function(){
    menu.classList.remove('active')
    burger.classList.remove('active')
})

// Stars
const ratings = document.querySelectorAll('.reviews__main');

if(ratings.length > 0){
    initRatings()
}

// Main function
function initRatings(){
    let ratingActive, ratingValue;
    for(let i = 0; i < ratings.length; i++){
        let rating = ratings[i]
        initRaiting(rating)
    }

    // Инициализация конкретного рейтинга   
    function initRaiting(rating){
        initRatingVars(rating);
        
        setRatingActiveWidth();

        if(rating.classList.contains('reviews_set')){
            setRating(rating);
        }
    }

    // Инициализация переменных
    function initRatingVars(rating){
        ratingActive = rating.querySelector('.stars__active');
        ratingValue = rating.querySelector('.reviews__rating-value');
    }

    // Изменение ширины активных звезд
    function setRatingActiveWidth(index = ratingValue.innerHTML){
        let ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    function setRating(rating){
        let ratingNumber = document.querySelector('.reviews__number');
        let starsItems = document.querySelector('.stars__items');
        let ratingItems = rating.querySelectorAll('.stars__item');
  
        for(let i = 0; i < ratingItems.length; i++){
            let ratingItem = ratingItems[i]
            ratingItem.addEventListener('mouseenter', function(e){
                initRatingVars(rating);
                setRatingActiveWidth(ratingItem.value);
            });
            ratingItem.addEventListener('mouseleave', function(e){
                setRatingActiveWidth();
            });
            ratingItem.addEventListener('click', function(e){
                initRatingVars(rating);
                ratingValue.innerHTML = ratingItem.value;
                
                setRatingActiveWidth();
            })
        }

        // Увеличение количества отзывов при нажатии (однократное)
        starsItems.addEventListener('click', function(e){
            ratingNumber.innerHTML = +ratingNumber.innerHTML + 1;
        }, { once: true});
    }

}


console.log(document.querySelector('#form-phone'))