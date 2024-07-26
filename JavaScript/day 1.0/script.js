const input1 = document.getElementById("inp1");

function driveLisence(){
    const inp = input1.value;
    if (inp < 18){
        console.log("You don't have permision to drive car!");
        return false;
    }
    else{
        console.log("You can get you driving lisence!");
        return true;
    };
    
};


function isValidCoupon(couponCode, totalAmount){
    if (couponCode == "SALE" || couponCode == "BIGSALE" && totalAmount >=50){
        console.log("done perfect");
        return true;
    }
    else{
        console.log("not good");
        return false;
    };
};
isValidCoupon("SALE" , 51);
isValidCoupon("SAL" , 51)
