
// AJAX for answering
$('#submit_answer').click(function(event) {
    console.log($('form').serializeArray());
    event.preventDefault();
    var $info = $('#a_form :input');
    var $text = $info[1].value;
    var $question = 1;
    var $form = {
        "text": $text,
        "question": 1,
        "user": 1,
        "created": " ",
        'csrfmiddlewaretoken': $('[name="csrfmiddlewaretoken"]').val()
    }
    $.ajax({
        type:'POST',
        url: '/api/answer/',
        data: $form,
        success: function(result) {
            alert("Answer added!");
            window.location.href = "#";
        }
    })
});

function getAnswers() {
  var answerApi = "/api/answer/";
  $.ajax({url: answerApi, success: function(result) {
    var answerLength = result.length;
    console.log(result);
    for(var i = 0; (i + 1) <= answerLength; i++){
      var answerTitle = result[i].title;
      var answerText = result[i].text;
      var answerID = i + 1;
        $('div.block').append('<div class=answer id=' + answerID + '>' + '<br>' + answerText + "</div>");
      };
    }
  });
}

getAnswers();
