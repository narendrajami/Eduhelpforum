let menu=document.querySelector(".fa-bars");
let removeBtn=document.querySelector(".fa-xmark");
let menuBar=document.querySelector(".nav-links");
let popUp=document.querySelector(".popup");
let closeBtn=document.querySelector(".close-btn");
let signup=document.querySelector(".signup");
let closeBtnTwo=document.querySelector(".close-btntwo");
menu.addEventListener("click", () =>{
    menuBar.style.right="0"
})
removeBtn.addEventListener("click", () =>{
    menuBar.style.right="-200px"
})

signup.addEventListener("click", () =>{
    popUp.classList.add("active")
    menuBar.style.right = "-200px"
})

closeBtn.addEventListener("click",() =>{
    popUp.classList.remove("active")
})

document.querySelector(".signin").addEventListener("click", () =>{
    document.querySelector(".popuptwo").classList.add("passive")
    menuBar.style.right="-200px"
})
closeBtnTwo.addEventListener("click",() =>{
    document.querySelector(".popuptwo").classList.remove("passive")
})

