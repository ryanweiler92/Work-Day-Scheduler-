//function to display current date in header
$(function(){
    var dateElement = $('#currentDay');
    dateElement.text(moment().format('dddd MMMM Do'))
    
})

//color setting function
var colorChanger = function(){
    //variables for textarea and div
    var allTextArea = $(".form-control");
    var allDivBg = $(".div-background");
   
    //get current time and parse into number format
    var currentTime = parseInt( moment().format("H") );

    //variable that houses time id
    var translateHours = $(".task-time")
    
    //loop through each textarea
    for (var i = 0; i < translateHours.length; i++) {

        //get the id from each text area and format as number
        var hours = parseInt( translateHours[i].id );

        console.log(currentTime)
        console.log(hours)

        //remove current classes from each div
        $(allTextArea[i]).removeClass("bg-success bg-danger bg-secondary");
        $(allDivBg[i]).removeClass("bg-success bg-danger bg-secondary");

        //set background colors based on the current time relative to each div's time
        if (hours < currentTime) {
            $(allTextArea[i]).addClass("bg-secondary")
            $(allDivBg[i]).addClass("bg-secondary")
        } else if (hours > currentTime) {
            $(allTextArea[i]).addClass("bg-success")
            $(allDivBg[i]).addClass("bg-success")
        } else {
            $(allTextArea[i]).addClass("bg-danger")
            $(allDivBg[i]).addClass("bg-danger")
        }
    }
}

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

//function to clear storage and erase tasks
$("#clear-storage").click(function(){
    colorChanger();
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

//update div colors with color changer function every 30 minutes
setInterval(colorChanger(), (1000 * 60) * 30);

//execute color changer for the first time
colorChanger();

//load tasks for the first time
loadTasks();