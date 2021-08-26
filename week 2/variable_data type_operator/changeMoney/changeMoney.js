function convMoney()
{
    var money = parseInt(document.forms["convertMoney"]["money"].value);
    
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    console.log(from);
    console.log(to);
    if (from == "USD" && to == "VND")
    {
        var k_q = money*23000;
    }
    if (from == "VND" && to == "USD")
    {
        var k_q = money/23000;
    }
    //alert(convertUSD_VND);
    document.getElementById("k_q").innerHTML="Resurt: " + k_q;
   // document.getElementById("convertVND_USD").innerHTML="Resurt: " + convertVND_USD + "USD";
}