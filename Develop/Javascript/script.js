//function to display current date in header
$(function(){
    var dateElement = $('#currentDay');
    dateElement.text(moment().format('dddd MMMM Do'))
})

//empty object to store tasks
var tasks = [];

//function to load tasks from local storage
var loadTasks = function() {
    //get items from local storage
    localStorage.getItem(JSON.stringify(tasks[i].id), JSON.stringify(tasks[i].text))
     //if nothing in local storage create new array
    if (!tasks) {
     tasks = []
    }

     for (var i = 0; i < tasks.length; i++) {
    localStorage.getItem(JSON.stringify(tasks[i].id), JSON.stringify(tasks[i].text))
     }
     
    }



//function that saves task array to local storage
var saveTasks = function() {
    for (var i = 0; i < tasks.length; i++) {
    localStorage.setItem(JSON.stringify(tasks[i].id), JSON.stringify(tasks[i].text));
    }
};

//function to save text after user as entered
$(".sv-btn").click(function(){
    
    //variable to select all task text forms
    var allTasks = document.querySelectorAll('.form-control');

    //loop through each text form 
    for (var i = 0; i < allTasks.length; i++) {
        
        var taskId = allTasks[i].id;
        var taskText = allTasks[i].value; 

        console.log(allTasks[i].id);

        tasks.push({
            id: taskId,
            text: taskText
        })
       
        //tasks.push(allTasks[i].value);
    }

    //get form values
    //var taskText = $("#12pmTasks").val();
    //console.log($("#12pmTasks").val());
    //save in tasks array
    //tasks.push(taskText);
    
    saveTasks();

});

$("#clear-storage").click(function(){
    localStorage.clear();
    console.log("storage cleared")
});
//load tasks for the first time
//loadTasks();