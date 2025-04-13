window.addEventListener("scroll", function(){
    const floaters = document.querySelectorAll(".floater");
    const yPos = 0 - window.scrollY;
    for (const floater of floaters) {
        floater.style.top = -yPos/20 + "%";
    }
});