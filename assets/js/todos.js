// Check off a specific todo by click
//The on is used so this fucntion works on future LI's, but is added to the UL because it will not work on future LI's.
//This is why the LI is passed into the .on() function, this is because the UL has been created when the page loads, therefore it will apply to future LI's created in the UL
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});

// Click on X to delete todo
$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();//prevents bubbling into the li click function
});

//Enter a new todo in the text box
$("input[type='text']").keypress(function(event){
    if(event.which === 13){//13 is the key code for the enter key
        //saving new todo text from input box
        var toDoText = ($(this).val());
        $(this).val('');
        //create a new li and add to ul
        $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span> ' + toDoText +'</li>');
    }
});

//Toggle the textbox when the plus icon is clicked
$('#toggle-form').click(function(){
    $("input[type='text']").fadeToggle();
});