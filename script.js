document.getElementById("convertir").onclick = function (){convertidor()};
document.getElementById("invertir").onclick= function (){invertir1()};

function convertidor(){
    var valor1=document.getElementById("valor1").value;
    var valor2=document.getElementById("valor2").value;
    var moneda1=document.getElementById("moneda1").value;
    var moneda2=document.getElementById("moneda2").value;
    var dopus = (valor1/57);
    
    if(moneda1===("DOP")){
    switch (moneda2){
        case "DOP": document.getElementById ("valor2" ).value=valor1;
        break;
        case "US": document.getElementById ("valor2").value=valor1/57;
        break;
        case "EUR":document.getElementById("valor2").value=valor1/70;
        break;
        case "HTG":document.getElementById("valor2").value=valor1*1.71;
        break;
        }
    }
    else  if(moneda1===("US")){
    switch (moneda2){
        case "DOP": document.getElementById ("valor2" ).value=valor1*57;
        break;
        case "US": document.getElementById ("valor2").value=valor1;
        break;
        case "EUR":document.getElementById("valor2").value=valor1*.84;
        break;
        case "HTG":document.getElementById("valor2").value=valor1*96.52;
        break;
        }
    }
    else if(moneda1===("EUR")){
    switch (moneda2){
        case "DOP": document.getElementById ("valor2" ).value=valor1*70;
        break;
        case "US": document.getElementById ("valor2").value=valor1/.84;
        break;
        case "EUR":document.getElementById("valor2").value=valor1;
        break;
        case "HTG":document.getElementById("valor2").value=valor1*114.65;
        break;
        }
    }
   else if(moneda1===("HTG")){
    switch (moneda2){
        case "DOP": document.getElementById ("valor2" ).value=valor1/1.71;
        break;
        case "US": document.getElementById ("valor2").value=valor1/96.52;
        break;
        case "EUR":document.getElementById("valor2").value=valor1/114.65;
        break;
        case "HTG":document.getElementById("valor2").value=valor1;
        break;
        }
    }

}
function invertir1 (){
    //optener valores
   var valor1 =document.getElementById("valor2").value;
    var valor2 =document.getElementById("valor1").value;
    var moneda1 =document.getElementById("moneda2").value;
    var moneda2 =document.getElementById("moneda1").value;
    //mostrar valores
    document.getElementById("moneda1").value=moneda1;
document.getElementById("moneda2").value=moneda2;
document.getElementById("valor1").value=valor1;
document.getElementById("valor2").value=valor2;

}