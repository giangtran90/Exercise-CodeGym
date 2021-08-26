function addAB()
{
    var a = parseInt(document.forms["calculatorForm"]["a"].value);
    var b = parseInt(document.forms["calculatorForm"]["b"].value);
    var tong = a + b;
    //alert(tong);
    document.getElementById("tong").innerHTML = "Result ADD : " + tong;
}
function subAB()
{
    var a = parseInt(document.forms["calculatorForm"]["a"].value);
    var b = parseInt(document.forms["calculatorForm"]["b"].value);
    var hieu = a - b;
    document.getElementById("tong").innerHTML = "Result SUB : " + hieu;
}
function mulAB()
{
    var a = parseInt(document.forms["calculatorForm"]["a"].value);
    var b = parseInt(document.forms["calculatorForm"]["b"].value);
    var tich = a*b;

    document.getElementById("tong").innerHTML = "Result MUL : " + tich;
}
function divAB()
{
    var a = parseInt(document.forms["calculatorForm"]["a"].value);
    var b = parseInt(document.forms["calculatorForm"]["b"].value);
    var thuong = a/b;
    document.getElementById("tong").innerHTML = "Result DIV : " + thuong;
}