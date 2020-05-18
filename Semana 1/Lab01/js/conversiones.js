//Input y bot�n del decimal
var decInput = document.getElementById('DecimInput');
var btnResultados = document.getElementById('btnResult');

//variables de conversi�n

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

                alert('Debes ingresar un decimal, esto es un n�mero entero');

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
    //Conversi�n short
    var a = decInput.value;
    var shortConvert = (a << 16) >> 16;
    valorShort.value = shortConvert;

    //Conversi�n int WORKS
    var intConvert = parseInt(decInput.value);
    valorInt.value = intConvert;

    //Conversi�n long
    //var longConvert = parseInt(decInput.value);
    //valorLong.value = longConvert;

    //Conversi�n float WORKS
    var floatConvert = parseFloat(decInput.value);
    valorFloat.value = floatConvert;

    //Conversi�n double
    var doubleConvert = parseFloat(decInput.value);
    valorDouble.value = doubleConvert;
}