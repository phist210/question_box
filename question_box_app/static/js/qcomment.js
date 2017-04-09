//form to make a comment via ajax

$( function(){
    $('.question_comment_form').on('click', function(e){
        e.preventDefault();
        $(this).next('.question-comment-link').show();
    });
});

$('#submit_qcomment').click(function(event) {
    event.preventDefault();
    var $info = $('#qcomment_form :input');
    var $text = $info[1].value;
    var $questionid = Number($info[2].value);
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
            window.location.href = "";
            getQuestionComments();
        }
    })
});

function getQuestionComments() {
  var $questionCommentApi = "/api/commentquestion/";
  var $full_url = document.URL; // Get current url
  var $url_array = $full_url.split('/'); // Split the string into an array with / as separator
  var $last_segment = $url_array[$url_array.length-1];  // Get the last part of the array (-1)
  $.ajax({url: $questionCommentApi, success: function(result) {
    var questionCommentLength = result.length;

    //  need to access username from questionCommentOwner

    for(var i = 0; i < questionCommentLength; i++) {
      var $questionCommentQuestionID = result[i].question;
      var $questionCommentText = result[i].text;
      var $questionCommentID = result[i].id;
      var $questionCommentOwner = result[i].user;
      if ($questionCommentQuestionID == $last_segment) {
          $('div.comment_block').append('<div class=question_comment id=' + $questionCommentID + '>' + $questionCommentOwner + " said: " + '<br>' + $questionCommentText + '</br>' + "</div>");
        }
      };
    }
  });
}

getQuestionComments();
