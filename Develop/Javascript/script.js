//function to display current date in header
$(function(){
    var dateElement = $('#currentDay');
    dateElement.text(moment().format('dddd MMMM Do'))
})

//empty array to store tasks
var tasks = [];

//function to save text after user as entered
$(".sv-btn").click(function(){
    console.log("david degea")
    //get form values
    var taskText = $("#9amTasks").val();

    //save in tasks array
    tasks.push(taskText)

})
