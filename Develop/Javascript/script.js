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

    //select all text forms
   var allTasks = document.querySelectorAll(".form-control");

    allTasks.forEach(a => {
        for (var i = 0; i < tasks.length; i++) {
            allTasks[a].value == tasks[i]
        }
    })


}

//function that saves task array to local storage
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
};

//function to save text after user as entered
$(".sv-btn").click(function(){
    
    //variable to select all task text forms
    var allTasks = document.querySelectorAll('.form-control');

    //loop through each text form 
    for (var i = 0; i < allTasks.length; i++) {
        console.log(allTasks[i].value);
        tasks.push(allTasks[i].value);
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