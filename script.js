const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addnewTask(){
    if(inputBox.value === ''){
        alert("Add some task !!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTasks();
}
listContainer.addEventListener("click",function(c){
if(c.target.tagName === "LI"){
    c.target.classList.toggle("checked");
    saveTasks();
}
else if(c.target.tagName === "SPAN"){
    c.target.parentElement.remove();
    saveTasks();
}},false);

function saveTasks(){
    localStorage.setItem("tasks", listContainer.innerHTML);
}
function showTasks(){
    listContainer.innerHTML = localStorage.getItem("tasks");
}

showTasks();