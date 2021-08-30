
function number( gia_tri ){
    let number = document.getElementById('number');
    number.value = number.value + gia_tri;

}

function clean(){
    let number 	= document.getElementById('number');
    number.value = '';
}

function tinh(){
    let number 	= document.getElementById('number');
    let value 	= number.value;
    let ket_qua = eval( value );

    number.value = ket_qua;

}
