// get the original price

document.getElementById('apply-btn').addEventListener('click',function(){
   const originalPrice = document.getElementById('original-price');
   const priceString = originalPrice.innerText;
   const price = parseFloat(priceString);

   const discount = (price/100)*30;
   const finalPrice = price-discount;
   const location = document.getElementById('total-price');
   const display = document.getElementById('dis');
//    fetch the coupon code
    const couponCode = document.getElementById('coupon-code');
    const code = couponCode.value;
    
   if(code ==='Disc30'){
    location.innerText = finalPrice;

   }
   else{
    location.innerText = price;
   }
   
   display.style.display='block';
})