var fontLoader = document.createElement("link");
fontLoader.rel = "stylesheet";
fontLoader.href = "font.css";

document.head.appendChild(fontLoader);

document.addEventListener("DOMContentLoaded",function(){
    var navPlaceHolder = document.querySelector(".nav-menu-placeholder");
    var xhr = new XMLHttpRequest();
    xhr.open("GET","navigation.html",true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            navPlaceHolder.innerHTML = xhr.responseText;
        }
    };
    xhr.send();

    window.addEventListener("scroll", function(){
        const homePage = document.getElementById("home-page-contents");
        var nav = document.querySelectorAll(".nav-item");
        // console.log(window.scrollY);
        nav.forEach(navList => {
            if(window.scrollY > 880 && window.scrollY < 1860 && homePage != null){
                navList.classList.add("nav-at-synopsis");
            }else{
                navList.classList.remove("nav-at-synopsis");
            }
            if(window.scrollY > 1850 && window.scrollY < 3200 && homePage != null){
                navList.classList.add("nav-at-mtc");
            }else{
                navList.classList.remove("nav-at-mtc");
            }
        });
    });
    const reviewPage = document.getElementById("review-page-contents");
    if(reviewPage != null){
        reviewPage.style.color = "#CEF17B";
        reviewPage.style.backgroundColor = "var(--main-color)";
        const reviewNav = document.querySelector(".nav-menu-placeholder");
        reviewNav.classList.add("nav-at-review");
    }
})

