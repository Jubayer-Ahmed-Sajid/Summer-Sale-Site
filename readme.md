document.getElementById('card-one').addEventListener('click', function () {
 
    const cardOnePrice = getCardPrice('card-one-price');
    const totalPrice = getCardPrice('total-price');
    const newTotalPriceValue = document.getElementById('total-price')
    const newPriceValue = cardOnePrice + totalPrice;
    newTotalPriceValue.innerText = newPriceValue;
    const currentTotal = document.getElementById('total')
    const discount = document.getElementById('discount')
    const purchaseBtn = document.getElementById('purchase');
    if (newPriceValue >= 200) {
        purchaseBtn.removeAttribute("disabled");
    }
    const applyBtn = document.getElementById('apply')
    document.getElementById('input').addEventListener('keyup', function(event){
        const text = event.target.value;
        const attributes= document.getElementById('btn-delete')

        if(text == 'delete'){
            attributes.removeAttribute('disabled')
           
        }
        else
        attributes.setAttribute('disabled',true)
    })

    applyBtn.addEventListener('click', function () {
        const discountPrice =(20 / 100) * newPriceValue 
        discount.innerText =discountPrice ;
        const newCurrentTotal = newPriceValue - discountPrice;
        currentTotal.innerText = newCurrentTotal;

    })





})