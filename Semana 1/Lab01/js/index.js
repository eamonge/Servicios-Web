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




//Funciones matemáticas

//Equación de las deducciones
function calcular() {
    if (validate()) {
        //validate();
        alert('Debe llenar todos los campos');
    } else {
        //Función de salario bruto
        var sbruto = SalHoras.value * DiasTrabajados.value;
        SalBruto.value = sbruto;

        //Función de deducción
        var deducc = parseFloat(Deducciones.value) / 100;
        DeduccionesCalc.value = deducc;

        //Función de salario neto
        var sneto = sbruto - deducc;
        SalNeto.value = sneto;
    }
}

//Función clean
function erase() {
    SalHoras.value = "";
    DiasTrabajados.value = "";
    Deducciones.value = "";
    SalBruto.value = "";
    DeduccionesCalc.value = "";
    SalNeto.value = "";
}

//Valida si todos los campos están completos
function validate()
{
    if (SalHoras.value == "" || DiasTrabajados.value == "" || Deducciones.value == "") {
        return true;
    }
}