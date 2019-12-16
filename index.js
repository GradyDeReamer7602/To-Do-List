var tasks = [];
$(document).ready(function() {
  $("#add").click(function() {
    var task = $("#task").val();
    var btn = $("<button/>", {
      text: "Done",
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
    // task.push(task);
  });

  $("#clear").click(function() {
    $("#tasks").empty();
    tasks = [];
  });
});
