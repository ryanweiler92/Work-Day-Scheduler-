//function to display current date in header
$(function(){
    var dateElement = $('#currentDay');
    dateElement.text(moment().format('dddd MMMM Do'))
})

//empty tasks variable to store tasks
var tasks = {}
