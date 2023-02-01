//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");


//code for buttons 
var id = 3;
var budget = 12348;
//function that adds new list when clicked on add button
function addRow(){
  
  id++;
  budget++;

  var addinfo = document.createElement('input');
  console.log(addinfo);
  addinfo.type = 'checkbox';
  addinfo.id = "checkbox"+id;
  addinfo.addEventListener("change", (e)=>dynamicCB(e,id));
  
  var img = document.createElement('img'); 
  img.src ='down.png';
  img.style.width = '25px';
  img.id= 'imgId';
  img.style.display="block";
  img.onclick = (e)=>{
    if(document.querySelector('.dynamicRow'+id)){
      console.log("inside if");
      document.querySelector('.dynamicRow'+id).style.display="none";
      
    }else{
      console.log("inside else")
      // document.querySelector('.dynamicRow'+id)
      downArrowDynamic(e,id);
    }
   
  }

  var inputDelete = document.createElement("input");
  inputDelete.type = "button";
  inputDelete.className = "buttonDelete";
  inputDelete.value = "Delete";
  inputDelete.style.display = "none";
  inputDelete.id = "delete"+id;
  inputDelete.onclick = (id)=>{
    console.log(id)
  }
  inputDelete.onclick = ()=>dynamicDelete(id);
  

  var editInput = document.createElement("input");
  editInput.type = "button";
  editInput.className = "buttonEdit";
  editInput.value = "Edit";
  editInput.style.display = "none";
  editInput.id = "edit"+id;

  var row = document.createElement("tr");
  var cell = document.createElement("td");
  var t = document.getElementById('myTable');

  var tr = t.insertRow();
  tr.id = 'dynamicRow'+id;
  var td0 = tr.insertCell();
  var td1 = tr.insertCell();
  var td2 = tr.insertCell();
  var td3 = tr.insertCell();
  var td4 = tr.insertCell();
  var td5 = tr.insertCell();
  var td6 = tr.insertCell();
  var td7 = tr.insertCell();
  var td8 = tr.insertCell();
  var td9 = tr.insertCell();

  td0.appendChild(addinfo);
  td0.appendChild(img);
  td1.appendChild(document.createTextNode("Student " +id));
  td2.appendChild(document.createTextNode("Teacher " +id));
  td3.appendChild(document.createTextNode("Approved"));
  td4.appendChild(document.createTextNode("Fall"));
  td5.appendChild(document.createTextNode("TA"));
  td6.appendChild(document.createTextNode(+budget));
  td7.appendChild(document.createTextNode("100%"));
  td8.appendChild(inputDelete);
  td9.appendChild(editInput);
 
  alert("Successfully added a new record");
}

function checkBoxClicked() {
  var checkBox = document.getElementById("checkBox");
  // var checkBox2 = document.getElementById("checkBox2");
  // var checkBox3 = document.getElementById("checkBox3");
  var deleteBtn = document.getElementById("deleteBtn");
  var row = document.getElementById('firstrow');
  // var secondrow = document.getElementById('secondrow');
  // var thirdrow = document.getElementById('thirdrow');
  var editBtn = document.getElementById("editBtn");
  var submitButton = document.getElementById('button');
  if (checkBox.checked == true){
    console.log("check true",submitButton)
    deleteBtn.style.display = "block";
    editBtn.style.display = "block";
    row.style.backgroundColor = "yellow";
    submitButton.style.backgroundColor="orange";
    submitButton.style.borderColor="orange";
  } else {
    console.log("check false")
    deleteBtn.style.display = "none";
    editBtn.style.display = "none";
    row.style.backgroundColor = "white";
    submitButton.style.backgroundColor="gray";
    submitButton.style.borderColor="gray";
  }

}

function checkBoxClicked2() {
 
  var checkBox2 = document.getElementById("checkBox2");

  var secondrow = document.getElementById('secondrow');
  
  var submitButton = document.getElementById('button');

  if (checkBox2.checked == true){
    deleteBtn2.style.display = "block";
    editBtn2.style.display = "block";
   
    secondrow.style.backgroundColor = "yellow";
    submitButton.style.backgroundColor="orange";
    submitButton.style.borderColor="orange";
  } else {
    deleteBtn2.style.display = "none";
    editBtn2.style.display = "none";
    secondrow.style.backgroundColor = "white";
    submitButton.style.backgroundColor="gray";
    submitButton.style.borderColor="gray";
  }

}


function checkBoxClicked3() {
 
  var checkBox3 = document.getElementById("checkBox3");
 
  var thirdrow = document.getElementById('thirdrow');
 
  var submitButton = document.getElementById('button');

  if (checkBox3.checked == true){
    deleteBtn3.style.display = "block";
    editBtn3.style.display = "block";
    
    thirdrow.style.backgroundColor = "yellow";
    submitButton.style.backgroundColor="orange";
    submitButton.style.borderColor="orange";
  } else {
    deleteBtn3.style.display = "none";
    editBtn3.style.display = "none";
    thirdrow.style.backgroundColor = "white";
    submitButton.style.backgroundColor="gray";
    submitButton.style.borderColor="gray";
  }


}

function deleteFirstRow(){
  var row = document.getElementById('firstrow');
  row.style.display = "none";
  alert("Record deleted successfully");
}

function editFirstRow(){
 
  alert("Edit the details");
}

function deleteSecondRow(){
  var secondrow = document.getElementById('secondrow');
  secondrow.style.display = "none";
  alert("Successfully deleted the record");
}

function editSecondRow(){
  alert("Editted the details");
}

function deleteThirdRow(){
  var thirdrow = document.getElementById('thirdrow');
  thirdrow.style.display = "none";
  alert("Successfully deleted the record");   
}

function editThirdRow(){
  alert("Edit the details");
}


function submitButton(){
  alert('Record added successfully');
}

function downArrow(){
  var arrow = document.getElementById("firstArrow");
  if(arrow.style.display == 'none'){
    arrow.style.display = 'contents';
  }else{
    arrow.style.display = 'none';
  }
  
}

function downArrow2(){
  var SecondArrow = document.getElementById("SecondArrow");
  if(SecondArrow.style.display == 'none'){
    SecondArrow.style.display = 'contents';
  }else{
    SecondArrow.style.display = 'none';
  }
  
}

function downArrow3(){
  var ThirdArrow = document.getElementById("ThirdArrow");
  if(ThirdArrow.style.display == 'none'){
    ThirdArrow.style.display = 'contents';
  }else{
    ThirdArrow.style.display = 'none';
  }
  
}

function dynamicDelete(id){
  document.getElementById('dynamicRow'+id).style.display ="none"
}

function dynamicCB(e,id){
  if(e.srcElement.checked){
    document.getElementById('dynamicRow'+id).style.backgroundColor= "yellow";
    document.getElementById("delete"+id).style.display= 'block';
    document.getElementById("edit"+id).style.display= 'block';
    document.getElementById('button').style.backgroundColor= "orange";
  }else{
    document.getElementById('button').style.backgroundColor= "gray";
    document.getElementById('button').style.borderColor= "gray";
    document.getElementById('dynamicRow'+id).style.backgroundColor= "white";
    document.getElementById("delete"+id).style.display= 'none';
    document.getElementById("edit"+id).style.display= 'none';
  } 
}

function downArrowDynamic(e,id){
  console.log(e,id);
  var t = document.getElementById('myTable');
  var tr = t.insertRow();
  tr.style.display="contents";
  
  tr.id = 'dynamicRow'+id;
  tr.className = 'dynamicRow'+id;
  var td = tr.insertCell();
  td.colSpan = "8";
  td.id= 'dynamicText'+id;
  document.getElementById('dynamicText'+id).innerHTML=`Advisor:<br /><br />
  Award Details<br />
  Summer 1-2014(TA)<br />
  Budget Number: <br />
  Tuition Number: <br />
  Comments:<br /><br /><br />
  Award Status:<br /><br /><br />`
 
}