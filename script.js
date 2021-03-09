const openbtn = document.querySelector('.modal-open-btn')
const closebtn = document.querySelector('.modal-close-btn')
const overley = document.querySelector(".model_overlay")

openbtn.addEventListener("click", function() {
    overley.classList.add("open_modal")
})


closebtn.addEventListener("click", function() {
    overley.classList.remove("open_modal")

})