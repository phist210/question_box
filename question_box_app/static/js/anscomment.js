// answer comment js file

$('#comment').click(function(event) {

    event.preventDefault();
    let $info = $('#comment_form :input');
    console.log($info.serializeArray())
    for(var i = 0; i < $info.length; i++) {
        console.log($info[i]);
    }
    let $text = $info[1].value;
    let $answer = $info[2].value;
    let $user = $info[3].value;

    let $form = {
        "text": $text,
        "user": $user,
        "answer": $answer,
        'csrfmiddlewaretoken': $('[name="csrfmiddlewaretoken"]').val()
    }
    console.log($form);

    $.ajax({
        type: "POST",
        url: "/api/commentanswer/",
        data: $form,
        success: function(result) {
            alert("commented!");
            window.location.href = '/';
        }
    })
});
