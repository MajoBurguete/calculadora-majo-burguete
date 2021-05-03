var val1;
var val2;
var val3;

function suma(){
    var value1 = document.getElementById("v1");
    var value2 = document.getElementById("v2");
    var rest = document.getElementById("res1");
    val1 = value1.value;
    val2 = value2.value;
    var result = (parseInt(val1) + parseInt(val2));
    rest.innerHTML = 'Resultado = ' + result;
}

function mult(){
    var value1 = document.getElementById("v1");
    var value2 = document.getElementById("v2");
    var rest = document.getElementById("res1");
    val1 = value1.value;
    val2 = value2.value;
    var result = (val1 * val2);
    rest.innerHTML = 'Resultado = ' + result;
}

function div(){
    var value1 = document.getElementById("v1");
    var value2 = document.getElementById("v2");
    var rest = document.getElementById("res1");
    val1 = value1.value;
    val2 = value2.value;
    var result = (val1 / val2);
    rest.innerHTML = 'Resultado = ' + result;
}


function rest(){
    var value1 = document.getElementById("v1");
    var value2 = document.getElementById("v2");
    var rest = document.getElementById("res1");
    val1 = value1.value;
    val2 = value2.value;
    var result = (val1 - val2);
    rest.innerHTML = 'Resultado = ' + result;
}

function potencia(){
    var value3 = document.getElementById("v3");
    var rest = document.getElementById("res2");
    val3 = value3.value;
    var result = (val3 ** 2);
    rest.innerHTML = 'Resultado = ' + result;
}

function raiz(){
    var value3 = document.getElementById("v3");
    var rest = document.getElementById("res2");
    val3 = value3.value;
    var result = Math.sqrt(val3);
    rest.innerHTML = 'Resultado = ' + result;
}
