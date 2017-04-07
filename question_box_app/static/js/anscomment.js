// answer comment js file

$('#comment').click(function(event) {

    event.preventDefault();
    let $info = $('#comment_form :input');
    for(var i = 0; i < $info.length; i++) {
        console.log($info[i]);
    }
    //let $title = $info[2].value;
    let $text = $info[1].value;
    let $user = $info[0].value;
    console.log($info[1].value);

    let $form = {
        "text": $text,
        "user": 1,
        "answer": 1,
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
