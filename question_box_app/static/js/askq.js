//form to ask questions and post them via ajax


$('#submit').click(function(event) {
    console.log($('form').serializeArray());
    event.preventDefault();
    let $info = $('#q_form :input');
    let $title = $info[1].value;
    let $text = $info[2].value;
    let $user = Number($info[3].value);
    let $form = {
        "title": $title,
        "text": $text,
        "user": $user,
        "created": " ",
        'csrfmiddlewaretoken': $('[name="csrfmiddlewaretoken"]').val()
    }
    console.log($form);
    $.ajax({
        type:'POST',  //127.0.0.1:8000/ask
        url: '/api/question/',
        data: $form,
        success: function(result) {
            alert("Question added!");
            window.location.href = '/';
        }
    })
});
