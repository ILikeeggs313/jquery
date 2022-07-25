// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
$(function(){
    console.log("Let's get ready to party with jQuery!");


// Give all images inside of an article tag 
// the class of image-center (this class is defined inside of the style tag in the head).

    $('article img').addClass('image-center');
    // Remove the last paragraph in the article.
    // $('article').find('p: last-child');
    $('article p').children(":last-child").remove();
    //set the font size of the title to be a random pixel size from 0 to 10
    $('#title').css('font-size', Math.random() * 10);
    //add an item to the listl it can say whatever you want.
    $('ol').append($('<li>', {text:'I can do whatever I want with jquery'}));
    //the list is silly, empty the aside and put a p in it apologizing for the list's existence
    $('aside').empty().append($('<p>', {text: "the list is silly"}));
    //when you change the numbers in the 3 inputs on the bottom, background color should change
    $('.form-control').on('keyup blur change', 'input',function(){
        let red = $(this).eq(0).val();
        let blue = $(this).eq(1).val();
        let green = $(this).eq(2).val();
        $('body').css('background-color',
        "rgb(" + red +"," + green + "," + blue + ")");
    })
    //add an event listener so when you click on the img, it's removed from the dom.
    $('article img').on('click', function(){
        $(this).remove();
    })
})

//part two: movies app!
