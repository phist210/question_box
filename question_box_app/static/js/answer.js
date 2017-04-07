
// AJAX for answering
$('#submit').click(function(event) {
    console.log($('form').serializeArray());
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
    console.log($form);
    $.ajax({
        type:'POST',
        url: '/api/answer/',
        data: $form,
        success: function(result) {
            window.location.href = "#";
        }
    })
});

function getAnswers() {
  var $answerApi = "/api/answer/";
  var $full_url = document.URL; // Get current url
  var $url_array = $full_url.split('/'); // Split the string into an array with / as separator
  var $last_segment = $url_array[$url_array.length-1];  // Get the last part of the array (-1)
  $.ajax({url: $answerApi, success: function(result) {
    var answerLength = result.length;
    console.log(result);

    //  need to access username from answerOwner

    for(var i = 0; i < answerLength; i++) {
      var $answerQuestionID = result[i].question;
      var $answerText = result[i].text;
      var $answerID = result[i].id;
      var $answerOwner = result[i].user;
      if ($answerQuestionID == $last_segment) {
          console.log($answerQuestionID);
          $('div.block').append('<div class=answer id=' + $answerID + '>' + $answerOwner + " said: " + '<br>' + $answerText + "</div>");
        }
      };
    }
  });
}

getAnswers();
