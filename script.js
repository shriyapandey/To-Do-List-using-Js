const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("Value Entered must not be null");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; //text inside the li is entered
        listContainer.appendChild(li);//display of list
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //cross icon
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}
listContainer.addEventListener("click", function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
}
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();