function getMyQuestions() {
  var questionApi = "/api/question/";
  $.ajax({url: questionApi, success: function(result) {
    var questionLength = result.length;
    for(var i = 0; i < questionLength; i++){
      if (result[i].user === user_id){
        var questionTitle = result[i].title;
        var questionText = result[i].text;
        var questionID = result[i].id;
        $('div.question_block').append('<div class=question id=' + questionID + '>' + "<a href=/question/" + questionID + ">" + questionTitle + "</a>" + '<br>' + questionText + "</div>");
      }
    };
  }
  });
}

getMyQuestions();


function getMyAnswers() {
  var answerApi = "/api/answer/";
  $.ajax({
    url: answerApi,
    success: function(result) {
    var answerLength = result.length;
    for(var i = 0; i < answerLength; i++){
      console.log(result[i]);
      if (result[i].user === user_id){
      var answerText = result[i].text;
      var answerID = result[i].id;
        $('div.answer_block').append('<div class=answer id=' + answerID + '>' + "<a href=/answer/" + answerID + "></a>" + '<br>' + answerText + "</div>");
      }
      };
    }
  });
}

getMyAnswers();
