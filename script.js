let about =document.getElementById("about");
let skills = document.getElementById("skills");
let projects = document.getElementById("projects");
let right = document.querySelector(".right")
let aboutcontent = document.querySelector(".About")
let skillcontent = document.querySelector(".skills")
let projecttcontent = document.querySelector(".projects")
let line1 =document.getElementById("line1")
let line2 =document.getElementById("line2")
let line3 =document.getElementById("line3")
async function click(){

    about.addEventListener("click" , ()=>{
        right.scrollTo({
        top :0,
        behavior : "smooth"
    }) 
})
skills.addEventListener("click" , ()=>{
    right.scrollTo({
        top :1000,
        behavior : "smooth"
    }) 
})
projects.addEventListener("click" , ()=>{
    right.scrollTo({
        top :1800,
        behavior : "smooth"
    }) 
})
}
async function scroll(){

    right.addEventListener("scroll", () => {
        if (right.scrollTop <400 ) {
            line1.style.width = "100px";
            line1.style.opacity = "0.5";
            line2.style.width = "40px";
            line2.style.opacity = "1";
            line3.style.width = "40px";
            line3.style.opacity = "1";
        } else if (right.scrollTop >= 400 && right.scrollTop < 1500) {
            line2.style.width = "100px";
            line2.style.opacity = "0.5";
            line1.style.width = "40px";
            line1.style.opacity = "1";
            line3.style.width = "40px";
            line3.style.opacity = "1";
        } else if (right.scrollTop >= 1500){
            line3.style.width = "100px";
            line3.style.opacity = "0.5";
            line1.style.width = "40px";
            line1.style.opacity = "1";
            line2.style.width = "40px";
            line2.style.opacity = "1";
        }else{
            line3.style.width = "40px";
            line3.style.opacity = "1";
            line1.style.width = "40px";
            line1.style.opacity = "1";
            line2.style.width = "40px";
            line2.style.opacity = "1";
        }
    });
}
async function main(){
    await click()
    await scroll()
}
main()