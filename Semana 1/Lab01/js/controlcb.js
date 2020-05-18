var ArrSize = document.getElementById('ArrSize');
var RndmLimit = document.getElementById('RandSize');

var btnLoadArray = document.getElementById('btnArray');
var btnViewArray = document.getElementById('btnView');
var btnClearArray = document.getElementById('btnClear');

var arrtxt = document.getElementById('ArrayText');
var arr2 = [];

var radiobtnEven = document.getElementById('rdEven');
var radiobtnMinTen = document.getElementById('rdMinTen');
var radiobtnBgFifty = document.getElementById('rdBgFifty');


btnLoadArray.addEventListener('click', ArrayCreation);

btnViewArray.addEventListener('click', ViewArray);

btnClearArray.addEventListener('click', ClearArray);

//

function ArrayCreation() {
    var intSize = parseInt(ArrSize.value)
    var intRandom = parseInt(RndmLimit.value);
    

    if (RndmLimit.value == "" || Array.value == "") {
        alert('Se debe ingresar el tamaño del array y el límite del random');
    } else {
        var arr = new Array(intSize);

        for (var i = 0; i < arr.length; i++) {

            if (radiobtnEven.checked == true) {
                arr2.push((Math.floor(Math.random() * intRandom)) + ' ');
                if (isEven(arr2[i])) {
                    arr2.splice(i, 1);
                    i = i - 1;
                    console.log('Evens');
                }
                else {
                    console.log('Odds');
                }
            } else if (radiobtnMinTen.checked == true) {
                console.log('Minus ten opt selected');
                arr2.push((Math.floor(Math.random() * intRandom)) + ' ');

                if (isBelowTen(arr2[i])) {
                    arr2.splice(i, 1);
                    i = i - 1;
                }
            } else if (radiobtnBgFifty.checked == true)
            {
                console.log('Plus fifty opt selected');
                arr2.push((Math.floor(Math.random() * intRandom)) + ' ');
                if (isAboveFifty(arr2[i])) {
                    arr2.splice(i, 1);
                    i = i - 1;
                }
            } else {
                console.log('Nothing selected');
                arr2.push((Math.floor(Math.random() * intRandom)) + ' ');   
            }
        }
        ArrSize.setAttribute('readonly', true);
        RndmLimit.setAttribute('readonly', true);
    }
}

function ViewArray()
{
    arrtxt.innerHTML = arr2.join('');
}

function isEven(a) {
    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function isBelowTen(e) {
    if (e < 10) {
        return true;
    } else {
        return false;
    }
}

function isAboveFifty(x)
{
    if (x > 50) {
        return true;
    } else {
        return false;
    }
}

function ClearArray()
{
    ArrSize.value = "";
    RndmLimit.value = "";
    ArrSize.toggleAttribute('readonly');
    RndmLimit.toggleAttribute('readonly'); 
    arr2 = [];
    arrtxt.innerHTML = arr2.join('');
    console.clear();
    radiobtnEven.checked = false;
    radiobtnMinTen.checked = false;
    radiobtnBgFifty.checked = false;

    //if (radiobtnEven.checked == true) {
    //    radiobtnEven.setAttribute('checked', false);
    //}

}