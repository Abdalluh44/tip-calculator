
function saowan(){
 var DollarValue = document.getElementById("inputDollar").value ;
 var PeopleValue = document.getElementById("inputPeople").value ;
 var select = document.getElementById("serviceType");
 var ServiceValue = select.options[select.selectedIndex].value;
 console.log (DollarValue);
 console.log (PeopleValue);
 console.log (ServiceValue);
var result =  ServiceValue /100 * DollarValue / PeopleValue ;
console.log( result ) ;
var x = ' Tip Amount  <br> ' + result + " $"  + ' <br> Each ' ;

if ( result !== result || result == 0 || result === Infinity ){
    
    document.getElementById ("allresult").innerHTML = " you must write in all inputs <br> and not add any functoin" ;

}
else {
    
    if ( result < 0 ){
    document.getElementById ("allresult").innerHTML = " you can't add negative value" ; 

}


    else {
        document.getElementById ("allresult").innerHTML = x ;
    }

}

};

