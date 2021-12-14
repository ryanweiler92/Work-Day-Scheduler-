//function to display current date in header
$(function(){
    var dateElement = $('#currentDay');
    dateElement.text(moment().format('dddd MMMM Do'))
})

//empty array to store tasks
var tasks = [];

//function that saves task array to local storage
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("another save by degea")
}

//function to save text after user as entered
$(".sv-btn").click(function(){
    console.log("david degea save button")
    //get form values
    var taskText = $(".form-control").val();

    //save in tasks array
    tasks.push(taskText)

    saveTasks();

});
