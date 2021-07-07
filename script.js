 var selectedRow = null
 function onFormSubmit(){
     var formdata = readFormData();
    //  console.log("sbsjdjs",formdata);
    if (selectedRow == null)
     insertNewRecord(formdata);
     else 
     updateRecord(formData);
resetForm();

 }
 function readFormData(){
     var formData = {}; // inside form data we can push data
     formData["firstname"] = document.getElementById("firstname").value;
     formData["lastname"] = document.getElementById("lastname").value;
     formData["emailid"] = document.getElementById("emailid").value;
     formData["contactinfo"] = document.getElementById("contactinfo").value;
      return formData
      document.getElementById("onsubmit").value = "";
 }

 function insertNewRecord(data) {
     var table= document.getElementById("employeelist").getElementsByTagName("tbody")[0];
    //  console.log(table);
     var newRow = table.insertRow(table.length);
     var cell1 = newRow.insertCell(0);
     cell1.innerHTML = data.firstname;
     var cell2 = newRow.insertCell(1);
     cell2.innerHTML = data.lastname;
     var cell3 = newRow.insertCell(2);
     cell3.innerHTML = data.emailid;
     var cell4 = newRow.insertCell(3);
     cell4.innerHTML = data.contactinfo;
     var cell5 = newRow.insertCell(4);
     cell5.innerHTML= '<a onClick=onEdit(this)> Edit</a> <a onClick=onDelete(this)>Delete</a>';
     


 }

 function resetForm() {
     document.getElementById("firstname").value = "";
     document.getElementById("lastname").value = "";
     document.getElementById("emailid").value= "";
     document.getElementById("contactinfo").value= "";
     selectedRow = null;
 }

 function onEdit(td){
     selectedRow = td.parentElement.parentElement;
     document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
     document.getElementById("lastname").value =  selectedRow.cells[1].innerHTML;
     document.getElementById("emailid").value= selectedRow.cells[2].innerHTML;
     document.getElementById("contactinfo").value=  selectedRow.cells[3].innerHTML;
 }

 function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.firstname;
    selectedRow.cells[1].innerHTML = formData.lastname;
    selectedRow.cells[2].innerHTML = formData.emailid;
    selectedRow.cells[3].innerHTML = formData.contactinfo;


 }

 function onDelete(){
     if(confirm('Are you sure you want to delete the record?')){
    row = td.parentElement.parentElement;
     document.getElementById("employeeList").deleteRow(row.Rowindex);
     resetForm();
 }
}

