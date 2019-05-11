$(document).ready(function(){
    $('#zero').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('Narnia Level 0');
        let desc = $('<p>').text('There is no information for this level, intentionally.')

        $('#container').append(title, desc);
    })
    $('#one').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('Narnia Level 1');
        let desc = $('<p>').text('There is no information for this level, intentionally.')

        $('#container').append(title, desc);
    })
    $('#two').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('Narnia Level 2');
        let desc = $('<p>').text('There is no information for this level, intentionally.')

        $('#container').append(title, desc);
    })
    $('#three').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('Narnia Level 3');
        let desc = $('<p>').text('There is no information for this level, intentionally.')

        $('#container').append(title, desc);
    })
    $('#four').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('Narnia Level 4');
        let desc = $('<p>').text('There is no information for this level, intentionally.')

        $('#container').append(title, desc);
    })
    $('#five').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('Narnia Level 5');
        let desc = $('<p>').text('There is no information for this level, intentionally.')

        $('#container').append(title, desc);
    })
    $('#six').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('Narnia Level 6');
        let desc = $('<p>').text('There is no information for this level, intentionally.')

        $('#container').append(title, desc);
    })
    $('#seven').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('Narnia Level 7');
        let desc = $('<p>').text('There is no information for this level, intentionally.')

        $('#container').append(title, desc);
    })
    $('#eight').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('Narnia Level 8');
        let desc = $('<p>').text('There is no information for this level, intentionally.')

        $('#container').append(title, desc);
    })
    $('#nine').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('Narnia Level 9');
        let desc = $('<p>').text('There is no information for this level, intentionally.')

        $('#container').append(title, desc);
    })
})




let clearFunction = function(){
    $('#container').empty();
  }