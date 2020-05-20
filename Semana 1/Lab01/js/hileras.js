var str1 = document.getElementById('string1');
var str2 = document.getElementById('string2');

var strLength = document.getElementById('bgstLenght');
var strVcl = document.getElementById('bgstVocl');
var strCnst = document.getElementById('bgstConst');
var strAlfNum = document.getElementById('bgstAlfNum');




var btnCompare = document.getElementById('btnview');
var btnClean = document.getElementById('btnclear');


btnCompare.addEventListener('click', function () {
    Sort(str1.value, str2.value);
});

btnClean.addEventListener('click', Clean);

function Clean() {
    strLength.value = "";
    strVcl.value = "";
    strCnst.value = "";
    strAlfNum.value = "";
    str1.value = "";
    str2.value = "";
}

function Sort(a, b) {

    if (a == "" || b == "") {
        alert('Debe llenar ambos espacios para las hileras');
    } else {
        Length(a, b);
        Vowels(a, b);
        Consonants(a, b);
        //AlfNum(a, b);
    }
}

function Length(a, b) {
    if (a.length > b.length) {
        strLength.value = a;
    } else if (a.length < b.length) {
        strLength.value = b;
    } else {
        strLength.value = a + " y " + b;
    }
}

function Vowels(a, b) {

    if (strVowels(a) < strVowels(b)) {
        strVcl.value = str2.value;
    } else if (strVowels(a) > strVowels(b)) {
        strVcl.value = str1.value;
    } else {
        strVcl.value = "Ambas";
    }
}

function Consonants(a, b) {
    if (strConst(a) < strConst(b)) {
        strCnst.value = str2.value;
    } else if (strConst(a) > strConst(b)) {
        strCnst.value = str1.value;
    } else {
        strCnst.value = "Ambas";
    }
}

function AlfNum(a, b) {
    console.log(strNnAlfNum(a));
}


function strVowels(e) {
    var vowels = "aeiouAEIOU";
    var count = 0;

    for (var i = 0; i < e.length; i++) {
        if (vowels.indexOf(e[i]) !== -1) {
            count += 1;
        }
    }
    return count;
}

function strConst(e) {
    var consot = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    var countConst = 0;

    for (var i = 0; i < e.length; i++) {
        if (consot.indexOf(e[i]) !== -1) {
            countConst += 1;
        }
    }
    return countConst;
}

/*
function strNnAlfNum(e) {
    var reg = "/[^a-zA-Z\d\s:]/";


    var ancount = 0;

    for (var i = 0; i < e.length; i++) {
        if (reg.indexOf(e[i]) !== -1)
        {
            ancount += 1;
        }
    }
    return ancount;
}*/