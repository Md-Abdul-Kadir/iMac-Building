


/*********************************
 *         memory section        *
 *********************************/

//Extra Memory
document.getElementById('extraMemo').addEventListener('click', function () {
    const memoryCost = document.getElementById('memo_cost');
    const totalCost = document.getElementById('total_cost');
    const discountTotal = document.getElementById('discount_price');
   
   
    if ( memoryCost.innerText == 0)
    {
        totalCost.innerText = parseInt(totalCost.innerText) + 180;
      
       
        
    }
    memoryCost.innerText = 180;
    discountTotal.innerText = totalCost.innerText;
    
});

//regular memory
document.getElementById('regularMemo').addEventListener('click', function () {
    const memoryCost = document.getElementById('memo_cost');
    const totalCost = document.getElementById('total_cost');
    const discountTotal = document.getElementById('discount_price');

    if ( memoryCost.innerText > 0 && memoryCost.innerText == 180  )
    {
        totalCost.innerText = parseInt(totalCost.innerText) - 180;
       
        
    }
    memoryCost.innerText = 0;
    discountTotal.innerText = totalCost.innerText;
   
});

/**********************************
 *        storage section         *
**********************************/

//512GB storage
document.getElementById('512store').addEventListener('click', function () {
    const storageCost = document.getElementById('storage_cost');
    const totalCost = document.getElementById('total_cost');
    const discountTotal = document.getElementById('discount_price');
  
   
    if ( storageCost.innerText == 0)
    {
        totalCost.innerText = parseInt(totalCost.innerText) + 100;
        
       
        
    }
    
    else if ( storageCost.innerText == 180)
    {
        totalCost.innerText = parseInt(totalCost.innerText) - 0;
     
       
        
    }
    discountTotal.innerText = totalCost.innerText;
    storageCost.innerText = 100;
    
});

//I TB storage
document.getElementById('1terastore').addEventListener('click', function () {
    const storageCost = document.getElementById('storage_cost');
    const totalCost = document.getElementById('total_cost');
    const discountTotal = document.getElementById('discount_price');
   
   
    if ( storageCost.innerText == 0)
    {
        totalCost.innerText = parseInt(totalCost.innerText) + 180;
       
    
        
    }
    else if (storageCost.innerText == 100)
   {
            totalCost.innerText = parseInt(totalCost.innerText) + 80;
           
        
            
        
    }
  
    discountTotal.innerText = totalCost.innerText;       
    storageCost.innerText = 180;
    
});


//256GB storage
document.getElementById('256store').addEventListener('click', function () {
    const storageCost = document.getElementById('storage_cost');
    const totalCost = document.getElementById('total_cost');
    const storageInt = parseInt(storageCost.innerText);
    const discountTotal = document.getElementById('discount_price');

  //  console.log(storageInt);
    if ( storageInt > 0 && storageInt == 180 )
    {
        totalCost.innerText = parseInt(totalCost.innerText) - 180;
    
        
    }
    else if (storageInt > 0 && storageInt == 100)
   {
            totalCost.innerText = parseInt(totalCost.innerText) - 100;
            
        
    }
    discountTotal.innerText = totalCost.innerText;
    storageCost.innerText = 0;
    
});


/*******************************
*        delivary section      *
********************************/

// const delivaryInputShow = document.getElementById('delivay_cost');
// const totalCost = document.getElementById('total_cost');
// const discountTotal = document.getElementById('discount_price');


//free delivery section
document.getElementById('free_delivary').addEventListener('click', function () {
  
     // console.log('free');
    
   const delivaryInputShow = document.getElementById('delivay_cost');
   const totalCost = document.getElementById('total_cost');
   const discountTotal = document.getElementById('discount_price');
       
    if (delivaryInputShow.innerText == 20)
    {
        
        totalCost.innerText = parseInt(totalCost.innerText) - 20;
        delivaryInputShow.innerText = 0;
    }
    discountTotal.innerText = totalCost.innerText;
});

//paid delivery
document.getElementById('paid_delivary').addEventListener('click', function () {
    
   const delivaryInputShow = document.getElementById('delivay_cost');
    const totalCost = document.getElementById('total_cost');
    const discountTotal = document.getElementById('discount_price');
    
    if (delivaryInputShow.innerText == 0) {
         
        
        totalCost.innerText = parseInt(totalCost.innerText) +20;
        delivaryInputShow.innerText = 20;
    }
    discountTotal.innerText = totalCost.innerText;
   
});


/*************************
*      promo section     *
**************************/

document.getElementById('applyBtn').addEventListener('click', function () {
    const promoString = document.getElementById('promo_input_field');
    const discountTotal = document.getElementById('discount_price');
    const totalCost = document.getElementById('total_cost');

    if (promoString.value == "stevekaku")
    {
        discountTotal.innerText = parseInt(totalCost.innerText) - (parseInt(totalCost.innerText) / 100) * 20;

        promoString.value = '';
    }
});