let about =document.getElementById("about");
let exp = document.getElementById("exp");
let projects = document.getElementById("projects");
let right = document.querySelector(".right")
let line1 =document.getElementById("line1")
let line2 =document.getElementById("line2")
let line3 =document.getElementById("line3")

about.addEventListener("click" , ()=>{
    right.scrollTo({
        top :120,
        behavior : "smooth"
    }) 
    
    line1.style.width = "100px";
    line1.style.opacity = "0.5";
    line2.style.width = "40px";
    line3.style.width = "40px";
})
exp.addEventListener("click" , ()=>{
    right.scrollTo({
        top :550,
        behavior : "smooth"
    }) 
    line2.style.width = "100px";
    line2.style.opacity = "0.5";
    line1.style.width = "40px";
    line3.style.width = "40px";
})
projects.addEventListener("click" , ()=>{
    right.scrollTo({
        top :850,
        behavior : "smooth"
    }) 
    line3.style.width = "100px";
    line3.style.opacity = "0.5";
    line1.style.width = "40px";
    line2.style.width = "40px";
})
right.addEventListener("scroll", () => {
    if (right.scrollTop >= 0 && right.scrollTop < 500) {
        line1.style.width = "100px";
        line1.style.opacity = "0.5";
        line2.style.width = "40px";
        line2.style.opacity = "1";
        line3.style.width = "40px";
        line3.style.opacity = "1";
    } else if (right.scrollTop >= 500 && right.scrollTop < 850) {
        line2.style.width = "100px";
        line2.style.opacity = "0.5";
        line1.style.width = "40px";
        line1.style.opacity = "1";
        line3.style.width = "40px";
        line3.style.opacity = "1";
    } else {
        line3.style.width = "100px";
        line3.style.opacity = "0.5";
        line1.style.width = "40px";
        line1.style.opacity = "1";
        line2.style.width = "40px";
        line2.style.opacity = "1";
    }
    console.log(right.scrollTop);
});
