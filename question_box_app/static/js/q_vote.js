//js file for question voting, click on plus is 1, click on minus is -1,
//takes user, answer, score

$('#plus_vote').click(function(event) {
    event.preventDefault();
    console.log("hi");
    let $info = $("#vote_form :input");
    for(var i = 0; i < $info.length; i++) {
        console.log($info[i]);
    }
    let $user_id = $info[1];
    //let $q_id = $info[2];
    var $form = {
        "user": $user_id,
        "question": 1,
        "score": 1,
        'csrfmiddlewaretoken': $('[name="csrfmiddlewaretoken"]').val(),
    }

    $.ajax({
        type: 'POST',
        url: '/api/votequestion/',
        data: $form,
        success: function(result) {
            alert("You Voted");
        }
    })
});

$('#minus_vote').click(function(event) {
    console.log("ho");
});
