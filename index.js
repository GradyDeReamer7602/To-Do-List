$(document).ready(function() {
    
  var tasks = [];
  var deleteTodoItem = function(item) {
    // check the list for the item
    // remove it from the list
  };

  $("#add").click(function() {
    var task = $("#task").val();
    var btn = $("<button/>", {
      text: "X",
      value: task,
      click: function() {
        alert("clicked");
      }
    });

    console.log("Button was clicked!");

    $("#tasks").append("<li>");
    $("#tasks").append(task);
    $("#tasks").append(btn);
    $("#tasks").append("</li>");
    task.push(task);
  });

  // CRUD - Create Read Update Delete

  $("#clear").click(function() {
    $("#tasks").empty();
    tasks = [];
  });
});
