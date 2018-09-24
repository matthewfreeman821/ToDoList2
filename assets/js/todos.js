// Check off a specific todo by click
$('li').click(function(){
    $(this).toggleClass('completed');
})

// Click on X to delete todo
$('span').click(function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();//prevents bubbling into the li click function
})