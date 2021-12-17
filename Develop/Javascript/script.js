//function to display current date in header
$(function(){
    var dateElement = $('#currentDay');
    dateElement.text(moment().format('dddd MMMM Do'))
})


//empty object to store tasks
var tasks = [];


//function to load tasks from local storage
var loadTasks = function() {
    
     //if nothing in local storage create new array
    if (!tasks) {
     tasks = []
    }

    //variable to capture each text area
    var allTasks = $(".form-control");

    //loop through each text area
    allTasks.each(function() {

        //variable to get the id of each text area
        var localStorageKey = $(this).attr("id")

        //variable to retrieve the value of each key in local storage
        var currentValue = localStorage.getItem(localStorageKey);
      
        //setting the text area value from local storage
        $(this).val(currentValue)
       
        })
    }



//function that saves task array to local storage
var saveTasks = function() {
    for (var i = 0; i < tasks.length; i++) {
    localStorage.setItem(tasks[i].id, tasks[i].text);
    }
};

//function to save text after user as entered
$(".sv-btn").click(function(){
    
    //variable to select all task text forms
    var allTasks = document.querySelectorAll('.form-control');

    //loop through each text form 
    for (var i = 0; i < allTasks.length; i++) {
        
        //variable to start id's for key
        var taskId = allTasks[i].id;
        
        //variable to store text from froms
        var taskText = allTasks[i].value; 

        //push id's and text to object array
        tasks.push({
            id: taskId,
            text: taskText
        })
    }

    saveTasks();

});

$("#clear-storage").click(function(){
    localStorage.clear();
    console.log("storage cleared")

    //variable to capture each text area
    var allTasks = $(".form-control");

    //loop through each text area
    allTasks.each(function() {
        //set each text area to blank
        $(this).val('')
})
});


//load tasks for the first time
loadTasks();