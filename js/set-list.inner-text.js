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

    const purchase = document.getElementById('purchase');

    if (total >= 200) {
        purchase.removeAttribute('disabled')

    }
    else
        purchase.setAttribute('disabled', true)


}




// enabling coupon code button
const apply = document.getElementById('apply')

function inputValue(target) {
    const inputField = target.parentNode.childNodes[1].value;

    if (inputField == "SELL200" && total >= 200) {
        apply.removeAttribute('disabled')
    }
    else
        apply.setAttribute('disabled', true)
    return;
}

// Counting discount
function calculateDiscount() {
    const discount = (20 / 100) * total;
    document.getElementById('discount').innerText = discount.toFixed(2);
    const netTotal = total - discount;
    document.getElementById('total').innerText = netTotal.toFixed(2);
}


function purchaseCompletion() {
    
    total=0;
    discount=0;
    newTotal=0;
    document.getElementById('total-price').innerText = 0.00;
    document.getElementById('discount').innerText = 0.00;
    document.getElementById('total').innerText = 0.00;
    document.getElementById('coupon').value = "";
    const parentElement = document.getElementById('item-names')
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
    apply.setAttribute('disabled', true)
    purchase.setAttribute('disabled', true)
    console.log(total)
}

