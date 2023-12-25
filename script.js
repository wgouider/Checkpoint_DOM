

var plusBtns = Array.from(document.querySelectorAll('.fa-plus'));
/* console.log(plusBtns); */
var minusBtns = Array.from(document.querySelectorAll('.fa-minus'));
/* console.log(minusBtns) */
var favs = Array.from(document.querySelectorAll(".fa-heart"));
var deleteBtns = Array.from(document.querySelectorAll('.fa-trash'));
var cards = Array.from(document.querySelectorAll(".item"));

/* ------------- Suppression des élements ----------------------*/

for ( let i in deleteBtns ) {
  deleteBtns[i].addEventListener("click", function() {
  cards[i].remove()
  total()
})
}

/* --------------Calcul du montant total par élément--------------- */
function total() {
  let qte = Array.from(document.querySelectorAll(".Total_Qty"));
  let price = Array.from(document.querySelectorAll(".Unit-Price"));
  let s = 0;
  console.log(qte)
  console.log(price)
  for ( let i = 0; i < price.length; i++ ) {
      s = s + price[i].innerHTML * qte[i].innerHTML;
      
  }
  document.getElementById("form5").innerHTML = s; 
}

/* --------------Diminuer Qté par élément--------------- */
for ( let minusBtn of minusBtns ) {
  minusBtn.addEventListener("click", function() {
   /* document.getElementsByClassName("Total_Qty")--*/
   console.log(minusBtn.nextElementSibling.innerHTML)
    minusBtn.nextElementSibling.innerHTML > 0 ? minusBtn.nextElementSibling.innerHTML-- : null
     total()
  })
}


/* --------------ajouter Qté par élément--------------- */
for ( let plusBtn of plusBtns ) {
  plusBtn.addEventListener("click", function() {
    plusBtn.previousElementSibling.innerHTML++
      total()
  })
} 


/* function MyFunctionMoins() {
  document.getElementById("form1").stepDown();
  var quantite1 = Number(document.getElementById("form1").value);
  var quantite2 = Number(document.getElementById("form3").value);
  var amount1 = Number(540 * quantite1);
  var amount2 = Number(740 * quantite2);
  document.getElementById("form5") = amount1 + amount2;
}
function MyFunctionPlus() {
  document.getElementById("form1").stepUp();
  var quantite1 = Number(document.getElementById("form1").value);
  var quantite2 = Number(document.getElementById("form3").value);
  var amount1 = Number(540 * quantite1);
  var amount2 = Number(740 * quantite2);
  document.getElementById("form5").value = amount1 + amount2;
}

function MyFunctionMoins1() {
  document.getElementById("form3").stepDown();
  var quantite1 = Number(document.getElementById("form1").value);
  var quantite2 = Number(document.getElementById("form3").value);
  var amount2 = Number(740 * quantite2);
  var amount1 = Number(540 * quantite1);
  document.getElementById("form5").value = amount1 + amount2;
}
function MyFunctionPlus1() {
  document.getElementById("form3").stepUp();
  var quantite1 = Number(document.getElementById("form1").value);
  var quantite2 = Number(document.getElementById("form3").value);

  var amount2 = Number(740 * quantite2);
  var amount1 = Number(540 * quantite1);

  document.getElementById("form5").value = amount1 + amount2;
}
 */
/* function CalculTotal(){
    var prix = Number(document.getElementById("form1").value);

    var quantite = Number(document.getElementById("form2").value);

    var amount = Number(prix * quantite);
    document.getElementById("form2").value = amount;
} */


/* function MyFunctionDelete() {
  var parentElem = document.getElementsByClassName("items")[0];
  var childElem = document.getElementsByClassName("item1")[0];
  parentElem.removeChild(childElem);
}
 */


/*  
function MyFunctionDelete(){
    var parentElem = document.getElementsByClassName('items');
    console.log(parentElem);
    var childElem = document.getElementsByClassName('item1');
    console.log(childElem);
    parentElem.removeChild(childElem);
 } 


/*code farah*/
/*  function MyFunctionDelete() {
    var parentElem = document.querySelector('.item');
    console.log(parentElem);

    var childElem = document.querySelector('.Image1');
    console.log(childElem);

    if (childElem && parentElem) {
        parentElem.removeChild(childElem);
    }
 */

/* code Hannachi*/
/*     window.removeCartItem = function (buttonId) {
        const cartItem = document.querySelector(.cart-item[data-button-id="${buttonId}"]);
        if (cartItem) {
            // Mettre à jour les compteurs lorsque l'article est retiré du panier
            totalItems -= parseInt(cartItem.querySelector('p:nth-child(2)').textContent.split(' ')[1]);
            totalPrice -= parseFloat(cartItem.querySelector('p:nth-child(3)').textContent.replace('TND', ''));

            cartItemsList.removeChild(cartItem);
            totalItemsSpan.textContent = totalItems;
            totalPriceSpan.textContent = totalPrice.toFixed(3);

        }
    }; */
// Appel de la fonction une fois que le DOM est chargé
/* document.addEventListener("DOMContentLoaded", setupDeleteButtons);
 */
// Other functions remain unchanged...
