// Problem: I need a way to save user inputs when the button is clicked and display it as a card with all the users information.
// 1) save users input when button clicked
// 2) delete users input from text fields
// 3) display user input details as a card straight after



$(document).ready(function() {


        $("#save").click(function() {
                firstName = $("#firstName").val();
                lastName = $("#lastName").val();
                description = $("#description").val();

                $("#holder").append("<div id='card'>" + "<p>" + firstName + "<br/> <br/>" + lastName + "<br/> <br/>" + description + "</p>" + "</div>");
                //$("#card").css({'background-color' : 'lightgrey', 'width' : '26.5%'}); this works only once. any other data typed in after doesn't have a back unless I do it all in my css file.
                //$("#card").css('background-color' ,'lightgrey', 'width' , '10%'); the code above is used if you want to add multiple css properties which is why it looks like an object and the code found on this line is used for a single property.
                firstName = $("#firstName").val("");
                lastName = $("#lastName").val("");
                description = $("#description").val("");



});














});
