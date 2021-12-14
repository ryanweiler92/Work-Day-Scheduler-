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
    
    //get form values
    var taskText = $(".form-control").val();
    
    //var taskTime = "9";
    //var taskTime = $(this).next(".task-time").val();

    //save in tasks array
    tasks.push({
        text: taskText,
        //time: taskTime
    });

    saveTasks();

});

//load tasks for the first time
loadTasks();