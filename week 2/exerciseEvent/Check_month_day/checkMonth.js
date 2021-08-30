function checkMonth1()
{
    let input_Month = parseInt(document.forms["check_Month"]["month"].value);
    console.log(input_Month);
    //alert('so thang la' +input_Month);

    let k_q = false;console.log(k_q);
     switch (input_Month)
    {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10: 
        case 12: 
            //alert("là tháng có 31 ngày");
            document.getElementById("k_q").innerHTML = 'tháng ' + input_Month + " là tháng có 31 ngày";  
            break;
        
        case 2:
            //alert("là tháng có 28 hoặc 29 ngày");
            document.getElementById("k_q").innerHTML =  'tháng ' + input_Month + " là tháng có 28 hoặc 29 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            //alert("là tháng có 30 ngày");
            document.getElementById("k_q").innerHTML =  'tháng ' + input_Month + " là tháng có 30 ngày";
            break;
        
    }

}