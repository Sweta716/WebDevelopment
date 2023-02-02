//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return this.mytitle;
};

var socialMedia = {
  facebook: "http://facebook.com",
  twitter: "http://twitter.com",
  flickr: "http://flickr.com",
  youtube: "http://youtube.com",
};

var t = new Title("CONNECT WITH ME!");
var count = 3;
var myArray = new Array();

var hideRow = document.getElementsByClassName("dropDownTextArea");
for (let i = 0; i < hideRow.length; i++) {
  hideRow[i].style.display = "none";
}

document.getElementById("button").disabled = "disabled";
var rowState = false;

function addNewRow() {
  var table = document.getElementById("myTable");
  var tbodyRef = document.getElementsByTagName("tbody")[0];
  console.log(tbodyRef);
  var lastStudent =
    table.lastElementChild.lastElementChild?.previousElementSibling
      ?.firstElementChild?.nextElementSibling?.innerHTML || "Student 0";
  var latestIndex = lastStudent.split(" ")[1];
  var tdNode = document.createElement("tr");
  var trCheckBoxCell = document.createElement("td");
  trCheckBoxCell.innerHTML =
    '<input id="checkbox" type = "checkbox" onclick="onCheckBoxClick(this)"/> <br /><br /><img src="down.png" width="25px" onclick="showDropDown(this)"/>';
  var trStudentCell = document.createElement("td");
  trStudentCell.innerHTML = "Student " + (parseInt(latestIndex) + 1);
  var trTeacherCell = document.createElement("td");
  trTeacherCell.innerHTML = "Teacher " + (parseInt(latestIndex) + 1);
  var trAwardStatusCell = document.createElement("td");
  trAwardStatusCell.innerHTML = "Approved";
  var trSemesterCell = document.createElement("td");
  trSemesterCell.innerHTML = "Fall";
  var trTypeCell = document.createElement("td");
  trTypeCell.innerHTML = "TA";
  var trBudgetCell = document.createElement("td");
  trBudgetCell.innerHTML =
    " " +
    (parseInt(latestIndex) + 1) +
    (parseInt(latestIndex) + 2) +
    (parseInt(latestIndex) + 3) +
    (parseInt(latestIndex) + 4) +
    (parseInt(latestIndex) + 5);
  var trPercentageCell = document.createElement("td");
  trPercentageCell.innerHTML = "100%";
  var trRow = document.createElement("tr");
  trRow.innerHTML = `<tr class="dropDownTextArea"><td colspan="8">Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br /></td></tr>`;

  tdNode.appendChild(trCheckBoxCell);
  tdNode.appendChild(trStudentCell);
  tdNode.appendChild(trTeacherCell);
  tdNode.appendChild(trAwardStatusCell);
  tdNode.appendChild(trSemesterCell);
  tdNode.appendChild(trTypeCell);
  tdNode.appendChild(trBudgetCell);
  tdNode.appendChild(trPercentageCell);
  tbodyRef.appendChild(tdNode);
  tbodyRef.appendChild(trRow);

  var middleRow = table.lastElementChild?.lastElementChild;
  middleRow.style.display = "none";

  alert("Record for " + trStudentCell.innerText + " is created successfully!");
}

function onCheckBoxClick(checkbox) {
  var rowSelect = checkbox.parentElement.parentElement;
  var colorChange = document.getElementById("button");

  if (checkbox.checked == true) {
    myArray.push(1);
    rowSelect.style.backgroundColor = "yellow";

    var deleteButton = document.createElement("td");
    deleteButton.setAttribute("id", "deleteTd");
    deleteButton.innerHTML =
      '<button id="delete" type ="button" onclick="deleteFn(this)">Delete</button>';

    var editButton = document.createElement("td");
    editButton.setAttribute("id", "editTd");
    editButton.innerHTML =
      '<button id="edit" type = "button" onclick="editFn(this)">Edit</button>';
    rowSelect.appendChild(deleteButton);
    rowSelect.appendChild(editButton);
    if (myArray.length > 0) {
      colorChange.style.backgroundColor = "orange";
      colorChange.style.border = "orange";
      colorChange.disabled = "";
    }
  } else {
    myArray.pop(1);

    if (myArray.length == 0) {
      colorChange.style.backgroundColor = "grey";
      colorChange.disabled = "disabled";
    }
    rowSelect.style.backgroundColor = "#fff";
    rowSelect.deleteCell(8);
    rowSelect.deleteCell(8);
  }
}

function showDropDown(element) {
  var tr = element.parentNode.parentNode;
  console.log(tr);
  let ti = tr.rowIndex;
  if (document.getElementsByTagName("tr")[ti + 1].style.display == "none") {
    document.getElementsByTagName("tr")[ti + 1].style.display = "table-row";
  } else {
    document.getElementsByTagName("tr")[ti + 1].style.display = "none";
  }
}

function deleteFn(row) {
  var colorChange = document.getElementById("button");
  var tr = row.parentElement.parentElement;
  var tr_1 = tr.nextElementSibling;
  console.log(tr_1);
  let ti = tr.rowIndex;
  console.log(ti);
  ti_1 = tr_1.rowIndex;
  document.getElementById("myTable").deleteRow(ti_1);
  document.getElementById("myTable").deleteRow(ti);

  alert(
    `Data of ${row.parentElement.parentElement.firstElementChild.nextElementSibling.innerText} deleted successfully`
  );
  var table_length = document.getElementById("myTable").rows.length;
  console.log(table_length);
  if (table_length == 1) {
    document.getElementById("button").style.backgroundColor = "grey";
  }
  myArray.pop(1);
  console.log(myArray.length);
  if (myArray.length == 0) {
    colorChange.style.backgroundColor = "grey";
    colorChange.disabled = "disabled";
  }
}

function editFn() {
  prompt("Edit the data below!");
}
