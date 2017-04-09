//js file for question voting, click on plus is 1, click on minus is -1,
//takes user, answer, score

$('#plus_vote').click(function(event) {
    event.preventDefault();
    console.log("plus");
    let $info = $("#vote_form :input");
    for(var i = 0; i < $info.length; i++) {
        console.log($info[i]);
    }
    let $user_id = $info[2];
    //let $ans_id = $info[2];
    var $form = {
        "user":  $('[name="user_id"]').val(),
        "answer": 1, //needs to be ans_id
        "score": 1,
        'csrfmiddlewaretoken': $('[name="csrfmiddlewaretoken"]').val(),
    }

    $.ajax({
        type: 'POST',
        url: '/api/voteanswer/',
        data: $form,
        success: function(result) {
            alert("You Voted");
            window.location.href = '/';
        }
    })
});

$('#minus_vote').click(function(event) {
    console.log("minus");
    let $info = $("#vote_form :input");
    let $user_id = $info[2];
    //let $q_id = $info[2];
    console.log($user_id);
    var $form = {
        "user": $('[name="user_id"]').val(),
        "answer": 1,
        "score": -1,
        'csrfmiddlewaretoken': $('[name="csrfmiddlewaretoken"]').val(),
    }

    $.ajax({
        type: 'POST',
        url: '/api/voteanswer/',
        data: $form,
        success: function(result) {
            alert("You Voted");
            window.location.href = '/';
        }
    })
});
