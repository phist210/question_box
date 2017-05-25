
$('#submit_acomment').click( function(event) {
    event.preventDefault();
    let $info = $('#acomment_form :input');
    let $text = $info[1].value;
    let $answer = Number($info[2].value);
    let $user = Number($info[3].value);
    console.log($info);
    let $form = {
        "text": $text,
        "user": $user,
        "answer": $answer,  //  make this work with the respective answer after implementing the form on click
        "created": " ",
        'csrfmiddlewaretoken': $('[name="csrfmiddlewaretoken"]').val()
    }
    $.ajax({
        type: "POST",
        url: "/api/commentanswer/",
        data: $form,
        success: function(result) {
            window.location.href = '';
            getAnswerComments();
        }
    });
});

function getAnswerComments() {
  var $answerCommentApi = "/api/commentanswer/";
  var $full_url = document.URL; // Get current url
  var $url_array = $full_url.split('/'); // Split the string into an array with / as separator
  var $last_segment = $url_array[$url_array.length-1];  // Get the last part of the array (-1)
  $.ajax({url: $answerCommentApi, success: function(result) {
    var $answerCommentLength = result.length;

    //  need to access username from answerCommentOwner

    for(var i = 0; i < $answerCommentLength; i++) {
      var $answerCommentAnswerID = result[i].answer;
      var $answerCommentText = result[i].text;
      var $answerCommentID = result[i].id;
      var $answerCommentOwner = result[i].user;
      if ($answerCommentAnswerID == $answerCommentAnswerID) {
          $('#' + $answerCommentAnswerID + '.answer').append('<div class=answer_comment id=' + $answerCommentID + '>' + $answerCommentOwner + " commented: " + '</br>' + $answerCommentText + "</div>");
          };
        }
      }
  });
}

// get answer function

$('#submit_answer').click(function(event) {
    event.preventDefault();
    var $info = $('#a_form :input');
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
        url: '/api/answer/',
        data: $form,
        success: function(result) {
            window.location.href = "";
            getAnswers();
        }
    });
});
