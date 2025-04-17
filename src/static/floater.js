function clamp(value, min, max) { return Math.max( min, Math.min(value, max) ); }

const beams = document.querySelector(".beams");

window.addEventListener("scroll", function(){
    const floaters = document.querySelectorAll(".floater");

    const yPos = window.scrollY / window.innerHeight;
    for (const floater of floaters) {
        floater.style.top = yPos*50 + "%";
    }

    beams.style.opacity = 1-2*yPos;
    beams.style.display = 1-2*yPos < 0 ? 'none' : 'block'
});