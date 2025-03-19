const plas = document.querySelector(".plas")
const minus = document.querySelector(".minus")
const count = document.querySelector(".count")

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

