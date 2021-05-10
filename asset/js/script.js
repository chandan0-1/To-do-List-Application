let searchBox = document.getElementById("search-box");
let submit = document.getElementById("Submit");
showEvent();
showSize();

submit.addEventListener("click", function(){
  Data = searchBox.value; 

  if (Data.trim().length > 0){
    let task = localStorage.getItem("Tasks");
    if (task == null){
      taskObj = [];
    }
    else{
      taskObj = JSON.parse(task)//converting to the Obj so that 
      // can apply various method because in the local storage
      // everthing stored as string
    }
    taskObj.push(Data);
  }
  localStorage.setItem("Tasks", JSON.stringify(taskObj));//since everting converted to the string in the local storage
  
  showEvent();
  showSize();
})



// Showing the Data in the Browser
function showEvent(){
    let task = localStorage.getItem("Tasks");
    if (task == null){
      taskObj = [];
    }
    else{
      taskObj = JSON.parse(task);
    }
    let content = "";
    let tableDataList = document.getElementById("tableList");

    taskObj.forEach((item, i) => {
      content += `<tr>
      <td id="serial" colspan="8">${i+1}</th>
      <td id="task-name" colspan="10">${ item }</td>
      <td> <button id="edit" onclick="editItem(${i})"> <i class="fas fa-pen control-icon"></i> Edit&nbsp</button></td>
      <td > <button id="delete" onclick="deleteItem(${i})"><i class="far fa-trash-alt control-icon"></i> Delete</button></td>
    </tr>`;
    });
    tableDataList.innerHTML = content;
}


// to edit the existing task
function editItem(index){
  let saveIndex = document.getElementById("saveindex");
  let submitbtn = document.getElementById("Submit");
  let savebtn = document.getElementById("Savebtn");

  saveIndex.value = index;

  let task = localStorage.getItem("Tasks");
  let taskObj = JSON.parse(task);
  let searchBox  = document.getElementById("search-box");
  searchBox.value = taskObj[index];
  
  submitbtn.style.display = "none";
  savebtn.style.display = "block";
}


let savebtn = document.getElementById("Savebtn");
savebtn.addEventListener("click", function () {

  let submitbtn = document.getElementById("Submit");
  let task = localStorage.getItem("Tasks");
  let taskObj = JSON.parse(task);
  let saveIndex = document.getElementById("saveindex").value;
  taskObj[saveIndex] = searchBox.value;

  submitbtn.style.display = "block";
  savebtn.style.display = "none";
  searchBox.value = '';
  localStorage.setItem("Tasks", JSON.stringify(taskObj));//since everting converted to the string in the local storage
  showEvent();
  showSize();
})



// Deleting a task
function deleteItem(index){
  let task = localStorage.getItem("Tasks");
  let taskObj = JSON.parse(task);
  taskObj.splice(index,1);
  localStorage.setItem("Tasks", JSON.stringify(taskObj));
  showEvent();
  showSize();
}

// showing the size
function showSize(){
  let totalSize = document.getElementById("size")
  totalSize.innerHTML = taskObj.length +" Tasks left";
}

// clear Button
let clearButton = document.getElementById("clear-all");
clearButton.addEventListener("click",function(){
  localStorage.clear();
  showEvent();
  showSize();
})

// complete all button
let completeButton = document.getElementById("complete-all");
completeButton.addEventListener("click",function(){
  let td = document.getElementsByTagName("td")
  let s = document.getElementById("serial");
  let t = document.getElementById("display");
  t.style.opacity = "0.4";
  t.style.backgroundColor = "darkgrey";
  showEvent();
  showSize();
})