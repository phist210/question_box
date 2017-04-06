function getQuestions() {
  var questionApi = "http://127.0.0.1:8000/api/question/";
  $.ajax({url: questionApi, success: function(result) {
    var questionLength = result.length;
    console.log(result);
    console.log(questionLength);
    for(var i = 0; i < questionLength; i++){
      var questionTitle = result[i].title;
      var questionText = result[i].text;
      console.log(result[i].title);
      var questionID = i;
      console.log(questionID);
        $('div.block').append('<div class=question id=' + questionID + '>' + questionTitle + '<br>' + questionText + "</div>");
        };
      }
    });
}
getQuestions();
