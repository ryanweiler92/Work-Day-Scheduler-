//function to display current date in header
$(function(){
    var dateElement = $('#currentDay');
    dateElement.text(moment().format('dddd MMMM Do'))
})

//empty object to store tasks
var tasks = [];

//function to load tasks from local storage
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    //if nothing in local storage create new array
    if (!tasks) {
        tasks = []
    };



}

//function that saves task array to local storage
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
};

//function to save text after user as entered
$(".sv-btn").click(function(){
    
    var allTasks = document.querySelectorAll('.form-control');

    for (var i = 0; i < allTasks.length; i++) {
        console.log(allTasks[i]);
    }

    //get form values
    //var taskText = $("#12pmTasks").val();
    //console.log($("#12pmTasks").val());
    //save in tasks array
    //tasks.push(taskText);
    
    saveTasks();

});

//load tasks for the first time
loadTasks();