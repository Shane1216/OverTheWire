$(document).ready(function(){
    $('#zero').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('Leviathan Level 0');
        let desc = $('<p>').text('There is no information for this level, intentionally.')

        $('#container').append(title, desc);
    })
    $('#one').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('Leviathan Level 1');
        let desc = $('<p>').text('There is no information for this level, intentionally.')

        $('#container').append(title, desc);
    })
    $('#two').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('Leviathan Level 2');
        let desc = $('<p>').text('There is no information for this level, intentionally.')

        $('#container').append(title, desc);
    })
    $('#three').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('Leviathan Level 3');
        let desc = $('<p>').text('There is no information for this level, intentionally.')

        $('#container').append(title, desc);
    })
    $('#four').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('Leviathan Level 4');
        let desc = $('<p>').text('There is no information for this level, intentionally.')

        $('#container').append(title, desc);
    })
    $('#five').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('Leviathan Level 5');
        let desc = $('<p>').text('There is no information for this level, intentionally.')

        $('#container').append(title, desc);
    })
    $('#six').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('Leviathan Level 6');
        let desc = $('<p>').text('There is no information for this level, intentionally.')

        $('#container').append(title, desc);
    })
    $('#seven').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('Leviathan Level 7');
        let desc = $('<p>').text('There is no information for this level, intentionally.')

        $('#container').append(title, desc);
    })
})




let clearFunction = function(){
    $('#container').empty();
  }