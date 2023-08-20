let total = 0;
function setText(target) {
    const itemName = (target.childNodes[3].childNodes[3].innerText)
    const listItem = document.getElementById('item-names');
    const li = document.createElement('li')
    li.innerText = itemName;
    listItem.appendChild(li);

    // getting the prices
    const itemPrice = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = (parseFloat(total) + parseFloat(itemPrice));
    document.getElementById('total-price').innerText = total.toFixed(2);


    // enable purchase button
    const purchase = document.getElementById('purchase');

    if (total >= 200) {
        purchase.removeAttribute('disabled')

    }



}
// enabling coupon code button

function inputValue(target) {
    const inputField = target.parentNode.childNodes[1].value;
    const apply = document.getElementById('apply')

    if (inputField == "SELL200" && total >= 200) {
        apply.removeAttribute('disabled')
    }
    else
        apply.setAttribute('disabled', true)
}

// Counting discount
function calculateDiscount() {
    const discount = (20 / 100) * total;
    document.getElementById('discount').innerText = discount;
    const netTotal = total - discount;
    document.getElementById('total').innerText = netTotal;
}
// purchase completion and set new value;
// function purchaseCompletion() {
//     document.getElementById('total-price').innerText = 0.00;
//     document.getElementById('discount').innerText = 0.00;
//     document.getElementById('total').innerText = 0.00;
//     document.getElementById('items-names').innerText = "";




// }


    function purchaseCompletion() {
      document.getElementById('total-price').innerText = '0.00';
      document.getElementById('discount').innerText = '0.00';
      document.getElementById('total').innerText = '0.00';
      const parentElement = document.getElementById('item-names')
      while(parentElement.firstChild){
        parentElement.removeChild(parentElement.firstChild);
    }
      }
    
  