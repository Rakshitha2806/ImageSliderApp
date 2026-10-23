// Steps: 
// 1. Start with slide 0
// 2. Get all slides
// 3. Get all dots 
// 4. Hide every slide
// 5. Remove active state from all dots 
// 6. Show current slide
// 7. Activate current dot 
// 8. Handle edge cases

//Step 1: Initialize slide index
//index 0 => slide1
//1 => slide2
//2 => slide3
let currentSlideIndex = 0;

//function to show active slides
function showSlide(index){
    //collect all slides
    //js store them like: slides[0] slides[1] slides[2]
    const slides = document.getElementsByClassName("carousel-slide")

    //collect dots
    const dots = document.getElementsByClassName("dot")

    //handle edge cases
    if(index>=slides.length){
        currentSlideIndex = 0
    }
    else if(index < 0){
        currentSlideIndex = slides.length-1
    }

    //hide all slides before showing active one
    for(let i=0; i<slides.length; i++){
        slides[i].style.display = "none"
    }

    //remove all active dot
    for(let i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace("dot-active" ,"")
    }

    slides[currentSlideIndex].style.display = "block";
    dots[currentSlideIndex].className += " dot-active"
}

//function to change slide
function changeSlide(n){
    showSlide((currentSlideIndex +=n))
}

function currentSlide(n){
    showSlide((currentSlideIndex = n))
}

//initially display setup
showSlide(currentSlideIndex)