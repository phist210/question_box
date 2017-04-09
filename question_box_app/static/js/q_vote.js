//js file for question voting, click on plus is 1, click on minus is -1,
//takes user, answer, score

$('#plus_vote').click(function(event) {
    event.preventDefault();
    var $form = {
        "user": $('[name="user_id"]').val(),
        "question": $('[name="question_id"]').val(),
        "score": 1,
        'csrfmiddlewaretoken': $('[name="csrfmiddlewaretoken"]').val(),
    }

    $.ajax({
        type: 'POST',
        url: '/api/votequestion/',
        data: $form,
        success: function(result) {
            alert("You Voted");
            window.location.href = '/';
        }
    })
});

$('#minus_vote').click(function(event) {
    event.preventDefault();
    var $form = {
        "user": $('[name="user_id"]').val(),
        "question": $('[name="question_id"]').val(),
        "score": -1,
        'csrfmiddlewaretoken': $('[name="csrfmiddlewaretoken"]').val(),
    }

    $.ajax({
        type: 'POST',
        url: '/api/votequestion/',
        data: $form,
        success: function(result) {
            alert("You Voted");
            window.location.href = '/';
        }
    })
});
