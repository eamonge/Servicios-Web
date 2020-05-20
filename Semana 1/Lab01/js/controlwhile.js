var ClientType = document.getElementById('typeClient');
var subTotal = document.getElementById('subTotal');

var Disc = document.getElementById('PercntDisc');
var DiscountQuant = document.getElementById('DiscMnt');
var TotalPrice = document.getElementById('PriceTotal');


//botón calcular
var btnCalculate = document.getElementById('btnCalc');


btnCalculate.addEventListener('click', Calculate);

var ReadOnlys = document.getElementsByClassName(' ViewInput');



function Calculate() {
    var numsTotal = subTotal.value;
    var type = ClientType.value;

    var i = 0;

    do {
        Math(type);
        i++;
    }
    while (i < ReadOnlys.length);


    function Math(e) {
        if (e.toUpperCase() == "A") {
            var numDiscount = "25";

            Disc.value = numDiscount + '%';
            var decimalDiscount = parseInt(numDiscount);

            var discountQuant = decimalDiscount / 100;

            DiscountQuant.value = discountQuant;

            var total = parseInt(numsTotal) - (parseInt(numsTotal) * discountQuant);
            TotalPrice.value = total;
            console.log('Client type a');
        } else if (e.toUpperCase() == "B") {
            var numDiscount = "20";

            Disc.value = numDiscount + '%';
            var decimalDiscount = parseInt(numDiscount);

            var discountQuant = decimalDiscount / 100;

            DiscountQuant.value = discountQuant;

            var total = parseInt(numsTotal) - (parseInt(numsTotal) * discountQuant);
            TotalPrice.value = total;
            console.log('Client type b');
        } else if (e.toUpperCase() == "C") {

            var numDiscount = "15";

            Disc.value = numDiscount + '%';
            var decimalDiscount = parseInt(numDiscount);

            var discountQuant = decimalDiscount / 100;

            DiscountQuant.value = discountQuant;

            var total = parseInt(numsTotal) - (parseInt(numsTotal) * discountQuant);
            TotalPrice.value = total;
        } else if (e.toUpperCase() == "D") {
            var numDiscount = "10";

            Disc.value = numDiscount + '%';
            var decimalDiscount = parseInt(numDiscount);

            var discountQuant = decimalDiscount / 100;

            DiscountQuant.value = discountQuant;

            var total = parseInt(numsTotal) - (parseInt(numsTotal) * discountQuant);
            TotalPrice.value = total;
        } else if (e.toUpperCase() == "E") {
            var numDiscount = "5";

            Disc.value = numDiscount + '%';
            var decimalDiscount = parseInt(numDiscount);

            var discountQuant = decimalDiscount / 100;

            DiscountQuant.value = discountQuant;

            var total = parseInt(numsTotal) - (parseInt(numsTotal) * discountQuant);
            TotalPrice.value = total;
        } else {
            alert('El tipo de usuario debe ser entre las letras A y E');
        }
    }
}

