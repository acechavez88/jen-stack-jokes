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
    fetchjokes();
})
.catch(err => {
    console.log('POST failed', err);
})
}