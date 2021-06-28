console.log('client.js sourced');

//Render joke data on load
fetchJokes();

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

// need to make fetch jokes function to run POST..
function fetchJokes() {
    $.ajax({
        method: 'GET',
        url: '/jokes'
    })
        .then(res => {
            console.log('GET', res);

            //ready to render
            let lastJoke = res[res.length -1];
            $('#outputDiv').text(lastJoke.output);
        
    
        // loop thru jokes
        //and render 'jokes'
        $('#outputDiv').empty();
        for(let jokes of res) {
            $('#outputDiv').append(`
            <li>
                ${jokes.whoseJoke} ${jokes.jokeQuestion} ${jokes.punchLine} = ${jokes.output}
                <li>
                `)
            }
        })
        .catch(err => {
            console.log('GET error', err);
        })
}