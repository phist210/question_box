//js file for question voting, click on plus is 1, click on minus is -1,
//takes user, answer, score


function upVote(n) {
    console.log("plus");
    var $form = {
        "user":  $('[name="user_id"]').val(),
        "answer": n,
        "score": 1,
        "question": $('[name="q_id"]').val(),
        'csrfmiddlewaretoken': $('[name="csrfmiddlewaretoken"]').val(),
    }
    console.log($form);
    $.ajax({
        type: 'POST',
        url: '/api/voteanswer/',
        data: $form,
    })
}

function downVote(n) {
    console.log("minus");
    var $form = {
        "user": $('[name="user_id"]').val(),
        "answer": n,
        "score": -1,
        "question": $('[name="q_id"]').val(),
        'csrfmiddlewaretoken': $('[name="csrfmiddlewaretoken"]').val(),
    }

    $.ajax({
        type: 'POST',
        url: '/api/voteanswer/',
        data: $form,
        success: function(result) {
            console.log('success');
        }
    })
}


function getNum(idTag) {
    for(i = 0; i < idTag.length; i++) {
        if(idTag[i] == 's') {
            return idTag.slice(i+1);
        }
    }
}

$('.plus_vote_ans').click(function(event) {
    console.log('hi');
    plusId = event.target.id
    $('#' + plusId).click(upVote(getNum(plusId)));
});

$('.minus_vote_ans').click(function(event) {
    console.log('hi minus');
    minusId = event.target.id
    $('#' + minusId).click(downVote(getNum(minusId)));
})
