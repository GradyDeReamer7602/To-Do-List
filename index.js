$(document).ready(function(){
  $(".add-row").click(function(){
    var task = $("#tasks").val();
    var deadline = $("#deadline").val();
    "<tr><td><input type='checkbox' name='record'></td><td>" + task + "</td><td>" + deadline + "</td></tr>";
    $("table tbody").append(markup);
  });
$(".delete-row").click(function(){
  $("table tbody").find('input[task="record]').each(function(){
    if($(this).is(":checked")){
      $(this).parents("tr").remove();
    }
  })
});
});