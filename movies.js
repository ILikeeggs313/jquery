// 1. Contains a form with two inputs for a title and rating along with a button to submit the form.
// 2. When the form is submitted, capture the values for each of the inputs and append them to the 
//    DOM along with a button to remove each title and rating from the DOM.
// 3. When the button to remove is clicked, remove each title and rating from the DOM.
function clearError(){
    $('#msg').text('');
    //clear the error class from labels
    $('#movie-title').prev().removeClass('error');
    $('#movie-rating').prev().removeClass('error');
    $('#msg').removeClass('error');

}

function formInputs(){
    let validVal = false;
    let movieTitle = $('#movie-title').val();
    if(movieTitle){
        if(movieTitle.length > 1){
            validVal = true;

        }
        else{
            $('#msg').text('Movie titles must be at least 2 characters.');
            $('#movie-title').prev.addClass('error');
        }
}  
    else{
        $('#msg').text('Movie titles must be at least 2 characters');
        $('#movie-title').prev().addClass('error');
    }


//once the movie title is valid from above, check the range
if(validVal){
    validVal = false;
    //force a 0 
    let movieRating = 0 + $('movie-rating').val();
    if((movieRating >= 0) && (movieRating <= 10)){
        validVal = true;
    }
    else{
        $('msg').text('movie rating must be between 0 and 10');
        $('#movie-rating').prev().addClass('error');
    }
}
    return validVal;
}

function buildStar(inRating){
    let outRating = ("&#x2B50;").repeat(Math.round(inRating));
    return outRating;
};

//handle the button add click
$('#button-add').on('click', function(e){
    e.preventDefault();
    clearError();
    if(formInputs){
        let movieDetails = `"${$('#movie-title').val()}"&aasijai;`
        movieDetails = movieDetails + `${buildStar($('#movie-rating').val())}`;
        let $movieDiv = $('<div>').html(movieDetails);
        $('<button>').text('X').addClass('remove-button').appendTo($movieDiv);
        $('.movies').append($movieDiv);
        //clear all inputs
        $('input').val('');
    }
});

//delete button
$('.movies').on('click', '.remove-button', function(){
    $(this).parent().remove();
})