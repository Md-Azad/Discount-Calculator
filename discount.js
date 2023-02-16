// get the original price

document.getElementById('apply-btn').addEventListener('click',function(){
   const originalPrice = document.getElementById('original-price');
   const priceString = originalPrice.innerText;
   const price = parseFloat(priceString);

   const discount = (price/100)*30;
   const finalPrice = price-discount;
   const location = document.getElementById('total-price');
   const display = document.getElementById('dis');
   location.innerText = finalPrice;
   display.style.display='block';
})