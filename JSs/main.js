
const article = document.querySelectorAll(".article")  // permet de recuperer l'element article 


function updatetotalprice(){ // c'est une fonction qui permet de d'obtenir le prix total apres selection 
    let = totalprice = 0;
    for (let i =0 ;i<article.length ; i++){
        let = quantity = parseInt(article[i].querySelector('.quantity').innerHTML); // recuperation de la quantity et sa convertion en nombre 
        let price = parseInt(article[i].querySelector('.price').innerHTML); // recuperation du price et sa convertion en nombre 
        totalprice += quantity * price;
    }
    document.getElementById('totalprice').innerHTML = totalprice + 'CFA' //recuperation du total price et sa convertion 
}
for (let i = 0; i < article.length; i++) {

    let btnPlus = article[i].querySelector('.btn-plus'); // permet la recuperer le btn plus et sa declariation 

    let btnMinus = article[i].querySelector('.btn-minus'); // recuperation du btn min 

    let quantity = article[i].querySelector('.quantity'); // recupation de la quantity


    let btnDelete = article[i].querySelector('.btn-delete'); // recuperation du bouton delete 

    let btnLike = article[i].querySelector('.btn-like'); // recuperation du btn like 

    let total = article[i].querySelector('.total'); // recuperation du total 

    let qty = parseInt(quantity.innerHTML); // declaration du qty et sa convertion en nombre 

    let price = parseInt(article[i].querySelector('.price').innerHTML); // convertion du price en nombre 

    

    btnPlus.addEventListener("click", function () {  
        // ajout de l'evenement sur le btn plus 
        qty++;  
        quantity.innerHTML = qty; 
        total.innerHTML = qty * price;
updatetotalprice();
       

    })


    btnMinus.addEventListener("click", function () {
         // ajout de l'evenement sur le btn minus 

        if(qty>0)
            {
                qty--;
                quantity.innerHTML = qty;
                total.innerHTML = qty * price;
                updatetotalprice();
            }
       
        

    })
    btnDelete.addEventListener("click", function () {
         // ajout de l'evenement sur le btn delete
        article[i].remove();
    })

    btnLike.addEventListener("click", function () {
         // ajout de l'evenement sur le btn like 
        btnLike.classList.toggle('like');

    })
}

updatetotalprice(); //appel de la fonction 



