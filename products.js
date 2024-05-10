window.onload = function( ) {
    fetch("products.json")
    .then((response) => response.json())
    .then((data) => {

        let productos =  "";

        for(let i = 0; i < data.length; i++){
            let item = data[i];

            let product = `
                <div class="clothing${i+1}">
                    <img src="${item.img}" alt="products" class="images">
                    <div class="descriptions">
                        <h3>${item.name}</h3>
                        <p class="desc">${item.description}</p>
                        <p class="pricing">${item.price}</p>
                        <button class="addtocart">Add to cart</button>
                    </div>
                </div>
            `
            productos += product;
        }

            let productsdiv = document.getElementsByClassName("ropa")[0]

            productsdiv.innerHTML = productos;
    })

    .catch((error) => {
        console.error("Error fetching data", error);
    });
}

function filterItems(){
    let x
}