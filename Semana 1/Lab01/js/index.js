//Variables ingresadas por el usuario
var SalHoras = document.getElementById('SalHoras');
var DiasTrabajados = document.getElementById('DiasTrabajds');
var Deducciones = document.getElementById('DeduccionesInpt');


//Variables calculadas

var SalBruto = document.getElementById('SalarioBruto');
var DeduccionesCalc = document.getElementById('DeduccionesCalc');
var SalNeto = document.getElementById('SalarioNeto');


//Botones y funciones
var btnCalcular = document.getElementById('btnCalc');
var btnLimpiar = document.getElementById('btnClean');

btnCalcular.addEventListener('click', calcular);

btnLimpiar.addEventListener('click', erase);




//Funciones matem�ticas

//Equaci�n de las deducciones
function calcular() {
    if (validate()) {
        //validate();
        alert('Debe llenar todos los campos');
    } else {
        //Funci�n de salario bruto
        var sbruto = SalHoras.value * DiasTrabajados.value;
        SalBruto.value = sbruto;

        //Funci�n de deducci�n
        var deducc = parseFloat(Deducciones.value) / 100;
        DeduccionesCalc.value = deducc;

        //Funci�n de salario neto
        var sneto = sbruto - deducc;
        SalNeto.value = sneto;
    }
}

//Funci�n clean
function erase() {
    SalHoras.value = "";
    DiasTrabajados.value = "";
    Deducciones.value = "";
    SalBruto.value = "";
    DeduccionesCalc.value = "";
    SalNeto.value = "";
}

//Valida si todos los campos est�n completos
function validate()
{
    if (SalHoras.value == "" || DiasTrabajados.value == "" || Deducciones.value == "") {
        return true;
    }
}