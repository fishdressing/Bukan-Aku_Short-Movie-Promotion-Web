document.addEventListener("DOMContentLoaded", function(){
    const imgCont = document.querySelector(".image-container");
    const prevBtn = document.getElementById("prev-image");
    const currImg = document.getElementById("curr-image");
    const nextBtn = document.getElementById("next-image");

    const reviewArr = ['slider images/image-1.png','slider images/image-2.png','slider images/image-3.png'];
    
    let i=0;
    let cImgsrc = reviewArr[i];
    let nextImg = reviewArr[i+2];
    let prevImg = reviewArr[i+1];
    prevBtn.addEventListener("click", function(){
        i--;
        if(i == reviewArr.length){
            i=0;
        }else if(i == -1){
            i=reviewArr.length-1;
        }
        nextImg = prevImg;
        prevImg = cImgsrc;
        cImgsrc = reviewArr[i];
        imgCont.style.animation = "slideLeft 0.4s linear";
        setTimeout(function(){
            currImg.style.transition = "transform ease-in 50ms";
            currImg.style.transform = "translateZ(0)";
            nextBtn.style.transition = "transform ease-in 50ms";
            nextBtn.style.transform = "translateZ(15px)";
            nextBtn.src = cImgsrc;
        },200)
        imgCont.addEventListener("animationend", function(){
            currImg.src = cImgsrc;
            nextBtn.src = nextImg;
            prevBtn.src = prevImg;

            imgCont.style.animation = "";
            currImg.style.transform = "";
            nextBtn.style.transform = "";
            currImg.style.transition = "";
            nextBtn.style.transition = "";
        })
        
    })
    
    nextBtn.addEventListener("click", function(){
        i++;
        if(i == reviewArr.length){
            i=0;
        }else if(i == -1){
            i=reviewArr.length-1;
        }
        
        prevImg = nextImg;
        nextImg = cImgsrc;
        cImgsrc = reviewArr[i];
        imgCont.style.animation = "slideRight 0.4s linear";
        setTimeout(function(){
            currImg.style.transition = "transform ease-in 50ms";
            currImg.style.transform = "translateZ(0)";
            prevBtn.style.transition = "transform ease-in 50ms";
            prevBtn.style.transform = "translateZ(15px)";
            prevBtn.src = cImgsrc;
            
        },200)
        imgCont.addEventListener("animationend", function(){
            currImg.src = cImgsrc;
            nextBtn.src = nextImg;
            prevBtn.src = prevImg;
            
            imgCont.style.animation = "";
            currImg.style.transform = "";
            prevBtn.style.transform = "";
            currImg.style.transition = "";
            prevBtn.style.transition = "";
        })
    })
    
    
})