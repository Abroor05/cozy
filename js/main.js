const plas = document.querySelector(".plas")
const minus = document.querySelector(".minus")
const count = document.querySelector(".count")

const asos = document.querySelector(".asos")
const card1 = document.querySelector(".card1")
const card2 = document.querySelector(".card2")
const card3 = document.querySelector(".card3")
const card4 = document.querySelector(".card4")
const card5 = document.querySelector(".card5")




var qosh = 0;

plas.addEventListener("click", ()=>{
    qosh += 1
    count.textContent = qosh
})


minus.addEventListener("click", ()=>{
    if(qosh > 0) {
        qosh -= 1
        count.textContent = qosh
    }
})


card1.addEventListener("click", ()=> {
    asos.setAttribute("src", "./imgs/stol1.png")
})

card2.addEventListener("click", ()=> {
    asos.setAttribute("src", "./imgs/stol2.png")
})

card3.addEventListener("click", ()=> {
    asos.setAttribute("src", "./imgs/stol3.png")
})

card4.addEventListener("click", ()=> {
    asos.setAttribute("src", "./imgs/stol4.png")
})

card5.addEventListener("click", ()=> {
    asos.setAttribute("src", "./imgs/stol5.png")
})
card1.addEventListener("click", ()=> {
    asos.setAttribute("src", "./imgs/stol1.png")
})