//form to make a comment via ajax

$('#submit_qcomment').click(function(event) {
    console.log($('form').serializeArray());
    event.preventDefault();
    var $info = $('#qcomment_form :input');
    var $text = $info[1].value;
    var $questionid = $info[2].value;
    var $user = Number($info[3].value);
    var $form = {
        "text": $text,
        "question": $questionid,
        "user": $user,
        "created": " ",
        'csrfmiddlewaretoken': $('[name="csrfmiddlewaretoken"]').val()
    }
    $.ajax({
        type:'POST',
        url: '/api/commentquestion/',
        data: $form,
        success: function(result) {
            alert("Comment added!");
            console.log($form);
            window.location.href = "#";
        }
    })
});
