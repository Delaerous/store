let buyItem = localStorage.getItem('buyItem') || 0;
    document.addEventListener("DOMContentLoaded", function()
    { document.getElementById("buyItem").innerHTML = localStorage.getItem('buyItem') || 0 ; });
    function onClick() {
      buyItem = +buyItem + 1;
      document.getElementById("buyItem").innerHTML = buyItem;
      updateStorage(buyItem);
    }
    function delProduct() {
      if (buyItem > 0) {
        buyItem = +buyItem - 1;
        document.getElementById("buyItem").innerHTML = buyItem;
        updateStorage(buyItem);
      }
        
    }



    function updateStorage(buyItem) {
      localStorage.setItem('buyItem', buyItem);
    }

    if (document.querySelectorAll('[data-buy]')) {
      const clickToBuy = document.querySelectorAll('[data-buy]');
    clickToBuy.forEach(btn => 
        btn.addEventListener('click', event=> {
            onClick();
        }
    
    ));
    }

    
      
    const del = document.getElementById("del");
    if (del) {
      del.addEventListener("click", ()=>{
        delProduct();
    });
    }