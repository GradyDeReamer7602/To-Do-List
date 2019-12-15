var ul = document.getElementById("myUl");

function add(){
     var tasks = document.getElementById("todo-input").value;
     var taskText = document.createTextNode(tasks);
     var li = document.createElement("li");
     var button = document.createElement("button");
     var buttonDelete = document.createTextNode("x");
     button.setAttribute("onclick", "remove()");
     button.appendChild(buttonDelete);
     li.appendChild(taskText);
     li.appendChild(button);
     ul.appendChild(li);
     localStorage["list"] = ul.innerHTML
}

function remove(){
    var task = this.event.currentTarget.parentNode;
    ul.removeChild(task);
    localStorage["list"] = ul.innerHTML
}
if (localStorage["list"]){
    ul.innerHTML = localStorage["list"];
}