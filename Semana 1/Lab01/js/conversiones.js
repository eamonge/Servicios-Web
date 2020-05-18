//Input y botón del decimal
var decInput = document.getElementById('DecimInput');
var btnResultados = document.getElementById('btnResult');

//variables de conversión

//Short
var valorShort = document.getElementById('shortval');

//Int
var valorInt = document.getElementById('intval');

//Long
var valorLong = document.getElementById('longval');

//Float
var valorFloat = document.getElementById('floatval');

//Double
var valorDouble = document.getElementById('doubleval'); 

btnResultados.addEventListener('click', validate);

function validate()
{
    var regex = /\d+\.?\d*$/;

    if (!decInput.value == "") {

        if (decInput.value.match(regex)) {
            if (decInput.value.indexOf(".") == -1) {

                alert('Debes ingresar un decimal, esto es un número entero');

            } else {
                convert();
            }

        } else {
            alert('Debes ingresar un decimal, esto es una letra');
        }
    } else 
    {
        alert('Debes ingresar un valor');
    }
}

function convert()
{
    //Conversión short
    var a = decInput.value;
    var shortConvert = (a << 16) >> 16;
    valorShort.value = shortConvert;

    //Conversión int WORKS
    var intConvert = parseInt(decInput.value);
    valorInt.value = intConvert;

    //Conversión long
    //var longConvert = parseInt(decInput.value);
    //valorLong.value = longConvert;

    //Conversión float WORKS
    var floatConvert = parseFloat(decInput.value);
    valorFloat.value = floatConvert;

    //Conversión double
    var doubleConvert = parseFloat(decInput.value);
    valorDouble.value = doubleConvert;
}