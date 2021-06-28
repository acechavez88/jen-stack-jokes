console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');


//creating ajax request 
$.ajax({
    method:'POST',
    url: '/jokes',
    // req.body
    data: {
        whoseJoke: $('#whoseJokeIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine: $('#punchlineIn').val(),
        
    }
})
.then(res => {
    console.log('POST res', res);
    fetchJokes();
})
.catch(err => {
    console.log('POST failed', err);
})
}

// need to make fetchjokes function to run POST..
function fetchjokes() {
    $.ajax({
        method: 'GET',
        url: '/jokes'
    })
        .then(res => {
            console.log('GET', res);

            //ready to render
            let lastJoke = res[res.length -1];
            $('#outputDiv').text(lastJoke.output);
        })
    
}