function Operation(operand) { 
				

    var firstValue = parseInt(document.getElementById('txtFirstNumber').value);
    var secondValue = parseInt(document.getElementById('txtSecondNumber').value);				
    var result = 0;
    switch(operand){

        case '+' : 	result = ( (x, y) => {	return x + y; } )( firstValue, secondValue);
                    break;

        case '-' : 	result = ( (x, y) => {	return x - y; } )( firstValue, secondValue );
                    break;
        case '*' : 	result = ( (x, y) => {	return x * y; } )( firstValue, secondValue );
                    break;
        case '/' : 	result = ( (x, y) => {	return x / y; } )( firstValue, secondValue );
                    break;
        case '^' : 	result = ( (x, y) => {	return x / y; } )( firstValue, secondValue );
                    break;

    }
    
    document.getElementById("resultbtn").innerHTML =  'Result: '+result;
}	

// function validate(){
//     var num1 = document.getElementById('txtFirstNumber').value;
//     var num2 = document.getElementById('txtSecondNumber').value;
//     if(num1==""){
//         alert('NUM1 CANNOT BE BLANK')
//     }
//     else{
//         validate()
//     }
// }


  document.getElementById("display").innerHTML=localStorage.getItem ("textvalue")

  function formValidation(object, type, nameType) {
    var regExFNumber = /^[0-9]+$/;
    var regExSNumber = /^[0-9]+$/;

    var name = "errorMsg" + nameType;
    //errorMsgFName;
    switch (type) {
      case 1:
        if (!object.value.trim().match(regExFNumber)) {
          object.style.border = "2px solid red";
          document.getElementById(name).style.display = "block";
          object.value = "";
        } else {
          object.style.border = "";
          document.getElementById(name).style.display = "none";
        }
        break;
  
  case 2:
    if (!object.value.trim().match(regExSNumber)) {
      object.style.border = "2px solid red";
      document.getElementById(name).style.display = "block";
      object.value = "";
    } else {
      object.style.border = "";
      document.getElementById(name).style.display = "none";
    }
    break;
}
  }