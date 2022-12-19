let tbody = document.querySelector("tbody")
let up = document.querySelector("#up")
let down = document.querySelector("#down")
let addName = document.querySelector("#addName")

let downprice = document.querySelector("#downprice")

axios.get("https://northwind.vercel.app/api/products")
    .then(res => {
        res.data.forEach(elem => {
            tbody.innerHTML += `<tr>
        <th scope="row">${elem.name}</th>
        <td>${elem.unitPrice}</td>
        <td>${elem.unitsInStock}</td>
        <td>${elem.quantityPerUnit}</td>
        </tr>`
        })

        up.addEventListener("click", function () {

            tbody.innerHTML = ""
            let newArr;
            newArr = res.data
            newArr.sort((a, b) => a.name.localeCompare(b.name));
            newArr.forEach(elem => {
                tbody.innerHTML += `<tr>
        <th scope="row">${elem.name}</th>
        <td>${elem.unitPrice}</td>
        <td>${elem.unitsInStock}</td>
        <td>${elem.quantityPerUnit}</td>
        </tr>`

            });
        })


        down.addEventListener("click", function () {
            tbody.innerHTML = ""
            let newArr;
            newArr = res.data
            newArr.sort((a, b) => b.name.localeCompare(a.name));
            newArr.forEach(elem => {
                tbody.innerHTML += `<tr>
            <th scope="row">${elem.name}</th>
            <td>${elem.unitPrice}</td>
            <td>${elem.unitsInStock}</td>
            <td>${elem.quantityPerUnit}</td>
            </tr>`

            });
        })

        let upprice = document.querySelector("#upprice")
        upprice.addEventListener("click", function () {
            
            tbody.innerHTML = ""
            let upprice2;
            upprice2 = res.data
            upprice2.sort((a, b) => a.unitPrice - b.unitPrice);
            upprice2.forEach(elem => {
                tbody.innerHTML += `<tr>
                <th scope="row">${elem.name}</th>
                <td>${elem.unitPrice}</td>
                <td>${elem.unitsInStock}</td>
                <td>${elem.quantityPerUnit}</td>
                </tr>`

            });
        })




        addName.addEventListener("input", function () {
            let newArr = [];
            newArr = res.data
            const result = newArr.filter(x => x.name.toLowerCase().includes(addName.value.toLowerCase()));
            /* newArr.forEach(elem => {
                if (elem.name == addName.value) {
                    tbody.innerHTML= ""
                tbody.innerHTML += `<tr>
                <th scope="row">${elem.name}</th>
                <td>${elem.unitPrice}</td>
                <td>${elem.unitsInStock}</td>
                <td>${elem.quantityPerUnit}</td>
                </tr>`
                }
            }); */
            tbody.innerHTML = '';
            result.forEach(elem => {
                tbody.innerHTML += `<tr>
                <th scope="row">${elem.name}</th>
                <td>${elem.unitPrice}</td>
                <td>${elem.unitsInStock}</td>
                <td>${elem.quantityPerUnit}</td>
                </tr>`
            })

        })
    })



