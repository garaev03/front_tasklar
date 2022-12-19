let allcategori = document.querySelector("#allcategori")
let categories = document.querySelector("#categories")

allcategori.addEventListener("click" , function (e) {
    e.preventDefault()
    categories.classList.toggle('show');
})
