const performOperation = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    case '/':
      return x / y;
    default:
      return NaN;
  }
};

function Cal(operator) { 
  const firstValue = parseInt(document.getElementById('txtFirstNumber').value);
  const secondValue = parseInt(document.getElementById('txtSecondNumber').value);				
  const result = performOperation(firstValue, secondValue, operator);
  document.getElementById("resultbtn").innerHTML =  'Result: '+result;
}	

document.getElementById("display").innerHTML=localStorage.getItem("textvalue");

function formValidation(object, type, nameType) {
  const regExNumber = /^[0-9]+$/;
  const name = "errorMsg" + nameType;

  if (!object.value.trim().match(regExNumber)) {
    object.style.border = "2px solid red";
    document.getElementById(name).style.display = "block";
    object.value = "";
  } else {
    object.style.border = "";
    document.getElementById(name).style.display = "none";
  }
}

