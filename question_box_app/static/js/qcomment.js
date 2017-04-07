//form to make a comment via ajax

$('#submit_qcomment').click(function(event) {
    console.log($('form').serializeArray());
    event.preventDefault();
    var $info = $('#qcomment_form :input');
    var $text = $info[1].value;
    var $question = 1;
    var $form = {
        "text": $text,
        "question": 1,
        "user": 1,
        "created": " ",
        'csrfmiddlewaretoken': $('[name="csrfmiddlewaretoken"]').val()
    }
    $.ajax({
        type:'POST',
        url: '/api/answer/',
        data: $form,
        success: function(result) {
            alert("Comment added!");
            window.location.href = "#";
        }
    })
});
