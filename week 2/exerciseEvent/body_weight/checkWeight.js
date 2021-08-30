// input weight and height
function check()
{
let input_weight = Number(document.forms["checkBMI"]["weight"].value);console.log(input_weight);
let input_height = Number(document.forms["checkBMI"]["height"].value);console.log(input_height);
let bmi = input_weight / (input_height * input_height);console.log(bmi);

let k_q = false;
  if ( bmi < 18.5 )
    {
        //;document.write('is underweight');
        document.getElementById("k_q").innerHTML= bmi + " is underweight";
    }
    else if ( bmi < 25.0 )
    {
        //document.write('is Normal');
        document.getElementById("k_q").innerHTML= bmi + " is Normal";
    }
    else if ( bmi < 30.0 )
    {
        //document.write('is Overweight');
        document.getElementById("k_q").innerHTML= bmi + " is Overweight";
    }
    else
    {
        //document.write('is Obese');
        document.getElementById("k_q").innerHTML= bmi + " is Obese";
    }
}