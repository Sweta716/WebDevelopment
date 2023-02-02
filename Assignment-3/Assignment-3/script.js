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


function deleteRow(r) {
var i = r.parentNode.parentNode.rowIndex;
document.getElementById("myTable").deleteRow(i);
}

var addButton = document.getElementById("add");
addButton.addEventListener("click", addNewStudent);

function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}


var downArrows = document.getElementsByTagName("img");
for (var i = 0; i < downArrows.length; i++) {
  if (downArrows[i].src.includes("down.png")) {
    downArrows[i].addEventListener("click", toggleDetails);
  }
}

function toggleDetails() {
  var detailsRow = this.parentNode.parentNode.nextElementSibling;
  if (detailsRow.style.display === "none") {
    detailsRow.style.display = "table-row";
  } else {
    detailsRow.style.display = "none";
  }
}


var table = document.getElementById("myTable");
var submitButton = document.getElementById("button");

// set initial state of button to disabled
submitButton.disabled = true;
submitButton.style.backgroundColor = "gray";

// add event listener to table to check for changes in checkbox state
table.addEventListener("change", checkSelected);

function checkSelected(e) {
// find all checkboxes in table
var checkboxes = table.querySelectorAll("input[type='checkbox']");

// loop through checkboxes to see if any are checked
var checked = false;
for (var i = 0; i < checkboxes.length; i++) {
if (checkboxes[i].checked) {
checked = true;
break;
}
}

// update state of submit button based on checkbox state
if (checked) {
submitButton.disabled = false;
submitButton.style.backgroundColor = "orange";
} else {
submitButton.disabled = true;
submitButton.style.backgroundColor = "gray";
}

// update row background color based on checkbox state
if (e.target.type === "checkbox") {
if (e.target.checked) {
e.target.parentNode.parentNode.style.backgroundColor = "yellow";
} else {
e.target.parentNode.parentNode.style.backgroundColor = "white";
}
}
}

// add event listener to "Add new student" button to update checkSelected function
document.getElementById("add").addEventListener("click", function() {
// add code to add new student here

// add event listener to new checkbox
var newCheckbox = table.querySelector("input[type='checkbox']:last-of-type");
newCheckbox.addEventListener("change", checkSelected);
});




// function to toggle visibility of dropDownTextArea
function toggleDetails(e) {
  var img = e.target;
  var dropDownTextArea = img.parentNode.parentNode.nextElementSibling;
  if (dropDownTextArea.style.display === "none") {
    dropDownTextArea.style.display = "table-row";
  } else {
    dropDownTextArea.style.display = "none";
  }
  }
  
  // function to toggle visibility of delete and edit buttons
  function toggleButtons(e) {
  var checkbox = e.target;
  var row = checkbox.parentNode.parentNode;
  var deleteBtn = row.cells[9].firstChild;
  var editBtn = row.cells[10].firstChild;
  if (checkbox.checked) {
    deleteBtn.style.display = "block";
    editBtn.style.display = "block";
  } else {
    deleteBtn.style.display = "none";
    editBtn.style.display = "none";
  }
  }
  

var counter = 4;

function addNewStudent() {
var table = document.getElementById("myTable");
var row = table.insertRow();
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);
var cell8 = row.insertCell(7);
var cell9 = row.insertCell(8);
var cell10 = row.insertCell(9);

cell1.innerHTML = '<input type="checkbox" class="checkbox"/><br /><br /><img src="down.png" width="25px" />';
cell2.innerHTML = 'Student ' + counter;
cell3.innerHTML = 'Teacher ' + counter;
cell4.innerHTML = 'Approved';
cell5.innerHTML = 'Fall';
cell6.innerHTML = 'TA';
cell7.innerHTML = '12345';
cell8.innerHTML = '100%';

// add delete button on the row
var deleteBtn = document.createElement("BUTTON");
deleteBtn.innerHTML = "Delete";
deleteBtn.classList.add("delete");
deleteBtn.style.display = "none";
deleteBtn.addEventListener("click", function() { deleteRow(this); });
cell9.appendChild(deleteBtn);

// add edit button on the row
var editBtn = document.createElement("BUTTON");
editBtn.innerHTML = "Edit";
editBtn.classList.add("edit");
editBtn.style.display = "none";
editBtn.addEventListener("click", function() { editRow(this); });
cell10.appendChild(editBtn);

// create new row for dropdown text area
var newRow = table.insertRow();
newRow.classList.add("dropDownTextArea");
var newCell = newRow.insertCell(0);
newCell.colSpan = 8;
newCell.innerHTML = 'Advisor:<br /><br /> Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />';
newRow.style.display = "none";

// add event listener for down arrow image
var downArrows = document.getElementsByTagName("img");
for (var i = 0; i < downArrows.length; i++) {
if (downArrows[i].src.includes("down.png")) {
downArrows[i].addEventListener("click", toggleDetails);
}
}

// add event listener for checkbox
var checkboxes = document.getElementsByClassName("checkbox");
for (var i = 0; i < checkboxes.length; i++) {
checkboxes[i].addEventListener("click", toggleButtons);
}

alert ("Record added successfully");
counter++;
} 

function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  var table = document.getElementById("myTable");
  var dropDownRow = row.nextSibling;
  table.deleteRow(row.rowIndex);
  table.deleteRow(dropDownRow.rowIndex);
  alert("Record deleted successfully");
  }
  
  function editRow(btn) {
    alert("Edit the details");
  }
  
  function toggleButtons() {
    var checkbox = this;
    var row = checkbox.parentNode.parentNode;
    var deleteBtn = row.cells[8].getElementsByClassName("delete")[0];
    var editBtn = row.cells[9].getElementsByClassName("edit")[0];
  
    if (checkbox.checked) {
      deleteBtn.style.display = "block";
      editBtn.style.display = "block";
    } else {
      deleteBtn.style.display = "none";
      editBtn.style.display = "none";
    }
  }

  function toggleVisibility() {
    let dropDownTextArea = document.getElementById("dropDownTextArea");
    if (dropDownTextArea.style.display === "none") {
      dropDownTextArea.style.display = "block";
    } else {
      dropDownTextArea.style.display = "none";
    }
  }

  function deleteRow(btn) {
	  var row = btn.parentNode.parentNode;
	  row.parentNode.removeChild(row);
	  alert("Row deleted successfully");
	}

  function showButtons(checkbox) {
    var row = checkbox.parentNode.parentNode;
    var deleteButton = row.querySelector("button[onclick='deleteRow(this)']");
    var editButton = row.querySelector("button[onclick='showEditPopup(this)']");

if (checkbox.checked) {
  deleteButton.style.display = "block";
  editButton.style.display = "block";
} else {
  deleteButton.style.display = "none";
  editButton.style.display = "none";
}

  }
  // add event listener for checkbox
  var checkboxes = document.getElementsByClassName("checkbox");
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", toggleButtons);
  }
function showEditPopup(element) {
	  alert("Edit the details");
	}

  var table = document.getElementById("myTable");
  var rows = table.rows;
  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].cells;
    if (cells.length > 10) {
      var cell10 = cells[10];
      cell10.parentNode.removeChild(cell10);
    }
  }

