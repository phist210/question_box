//js file for question voting, click on plus is 1, click on minus is -1,
//takes user, answer, score

$('#plus_vote').click(function(event) {
    event.preventDefault();
    console.log("plus");
    let $info = $("#vote_form :input");
    let $user_id = $info[2];
    //let $ans_id = $info[2];
    var $form = {
        "user":  $('[name="user_id"]').val(),
        "answer": $('[name="ans_id"]').val(),
        "score": 1,
        'csrfmiddlewaretoken': $('[name="csrfmiddlewaretoken"]').val(),
    }

    $.ajax({
        type: 'POST',
        url: '/api/voteanswer/',
        data: $form,
        success: function(result) {
            window.location.href = '';
        }
    })
});

$('#minus_vote').click(function(event) {
    console.log("minus");
    let $info = $("#vote_form :input");
    let $user_id = $info[2];
    //let $q_id = $info[2];
    var $form = {
        "user": $('[name="user_id"]').val(),
        "answer": $('[name="ans_id"]').val(),
        "score": -1,
        'csrfmiddlewaretoken': $('[name="csrfmiddlewaretoken"]').val(),
    }

    $.ajax({
        type: 'POST',
        url: '/api/voteanswer/',
        data: $form,
        success: function(result) {
            window.location.href = '';
        }
    })
});
