let searchBox = document.getElementById("search-box");
let submit = document.getElementById("Submit");
showEvent();

submit.addEventListener("click", function(){
  Data = searchBox.value; 
  
  console.log(Data.length);
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
})


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
      <th>${i+1}</th>
      <td>${ item }</td>
      <td>Edit</td>
      <td>Delete</td>
    </tr>`;
    });
    tableDataList.innerHTML = content;
}

