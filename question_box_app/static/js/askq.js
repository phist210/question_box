//form to ask questions and post them via ajax


$('#submit').click(function(event) {
    console.log($('form').serializeArray());
    event.preventDefault();
    let $info = $('#q_form :input');
    let $title = $info[1].value;
    let $text = $info[2].value;
    let $form = {
        "title": $title,
        "text": $text,
        "user": 1,
        "created": "2017-04-06T19:08:23.665288Z",
        'csrfmiddlewaretoken': $('[name="csrfmiddlewaretoken"]').val()
    }
    $.ajax({
        type:'POST',  //127.0.0.1:8000/ask
        url: '/api/question/',
        data: $form,
        success: function(result) {
            alert("Question added!");
        }
    })
});
