function inputYear()
{
    let year = parseInt(document.forms["checkYear"]["year"].value);

    let leapYear = false;

    if (year % 4 == 0)
    {
        if (year % 100 == 0)
        {
            if (year % 400 == 0)
            {
                //document.write('is leap year')
                //alert("is leap year")
                document.getElementById("leapYear").innerHTML = year +  " is leap year";
            }
            else
            {
                document.getElementById("leapYear").innerHTML = year +  " is  not leap year";
            }
        }
        else
        {
            //alert('is leap year');
            document.getElementById("leapYear").innerHTML = year +  " is leap year";
        }
    }
    else 
    {
        // alert("is not leap year");
        // console.log('leapYear');
        document.getElementById("leapYear").innerHTML = year +  " is  not leap year";
    }
}