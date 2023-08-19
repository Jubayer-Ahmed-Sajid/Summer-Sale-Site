document.getElementById('card-one').addEventListener('click', function(){
    // console.log('event listener added')
    const itemName= document.getElementById('item-names');
    const li = document.createElement('li')
    li.innerText= 'home pen'
    itemName.appendChild(li);
    const cardOnePrice = getCardPrice('card-one-price');
    const totalPrice =getCardPrice('total-price');
    const newTotalPriceValue = document.getElementById('total-price')
    const newPriceValue = cardOnePrice + totalPrice;
    newTotalPriceValue.innerText = newPriceValue;
    console.log(typeof(newPriceValue))
    const purchaseBtn = document.getElementById('purchase');
    if(newPriceValue >= 200){
        purchaseBtn.removeAttribute("disabled");
    }
    const couponCOde = document.getElementById('coupon');
    const couponCOdeValue = couponCOde.value;
    const applyBtn= getElementById('apply')
    
    if(couponCOdeValue == 'SELL200' && newPriceValue >= 200){
        applyBtn.removeAttribute("disabled")

    }
    else
    applyBtn.setAttribute("disabled",true)

})