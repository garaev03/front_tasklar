const input = document.querySelector("#inputName") //input deyeri
const addButton = document.querySelector("#click")
const space = document.querySelector("#space")  //text yigdigimiz div
const deleteButton = document.querySelector("#click2")
let edit = false;


addButton.addEventListener("click", () => {
    if (input.value == "") {
        alert("INPUT IS EMPTY")
        return
    }
    if (!edit) {

        let div = document.createElement("div")  //add basandan sonra yaranan umumi div
        let iDiv = document.createElement("div")  //ikonlar divi
        let textDiv = document.createElement("div")  //textlerin divi
        let i1 = document.createElement("i")  //icon
        let i2 = document.createElement("i")  //icon
        let value = input.value

        input.value = ""   //add basandan sonra input yeri bos olur 

        space.appendChild(div)

        div.style.display = "flex"
        div.style.justifyContent = "space-between"
        div.style.marginBottom = "15px"

        div.appendChild(textDiv)
        div.appendChild(iDiv)
        iDiv.appendChild(i2)
        iDiv.appendChild(i1)

        i1.setAttribute("class", "fa-solid fa-ban")
        i2.setAttribute("class", "fa-solid fa-pen-to-square")
        i1.style.marginLeft = "10px"


        i1.addEventListener("mouseover", () => {
            i1.style.cursor = "pointer"
        })
        i2.addEventListener("mouseover", () => {
            i2.style.cursor = "pointer"
        })

        i1.onclick = () => {
            div.remove(space)
        }
        i2.onclick = () => {
            input.value = value
            div.remove(textDiv)
        }
        textDiv.innerHTML += value
    }
})


deleteButton.onclick = () => {
    space.innerHTML = ""
}