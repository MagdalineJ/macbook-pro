
//*\\creating a common function to apply charges
function applyCharges(productID,costID,price){
    document.getElementById(productID).addEventListener('click',function(){
        let cost=document.getElementById(costID);
        cost.innerText=0;
        if(price==200){cost.innerText= parseInt(cost.innerText)+price;}
        if(price==0){cost.innerText=0;}
        if(price==400){cost.innerText=parseInt(cost.innerText)+400;}
        if(price==20){cost.innerText=parseInt(cost.innerText)+20;}
       
addtotal();
    })
}

//*\\calling function to apply charge on each item
applyCharges('extra-memory','memory-cost',200);
applyCharges('reg-memory','memory-cost',0);
applyCharges('storage512gb','storage-cost',200);
applyCharges('storage1tb','storage-cost',400);
applyCharges('reg-storage','storage-cost',0);
applyCharges('special-delivery','delivery-cost',20);
applyCharges('reg-delivery','delivery-cost',0);

 //*\\adding total
function addtotal(){
let totalPrice=document.getElementById('total-price');
const memoryCost=document.getElementById('memory-cost').innerText;
const storageCost=document.getElementById('storage-cost').innerText;
const deliveryCost=document.getElementById('delivery-cost').innerText;

totalPrice.innerText =1249 + parseInt(memoryCost) + parseInt(storageCost)+ parseInt(deliveryCost);

//*\\finding out all total
document.getElementById('all-total').innerText=totalPrice.innerText ;
return totalPrice.innerText;
}

//*\\applying promo code
document.getElementById('btn-id').addEventListener('click',function(){
    const input = document.getElementById('input');
    if(input.value=='stevekaku'){
        let allTotal=parseFloat(document.getElementById('all-total').innerText)
        const totalPrice=parseFloat(document.getElementById('total-price').innerText);
        const  discount= totalPrice/5;
        allTotal=allTotal-discount;
        document.getElementById('all-total').innerText=allTotal;
        input.value='';
    }else{

    document.getElementById('input').value='Invalid Promo Code'
    document.getElementById('input').style.color="red"
    document.getElementById('btn-id').style.backgroundColor="black"}
   
})