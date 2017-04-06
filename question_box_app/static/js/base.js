function getQuestions() {
  var questionApi = "/api/question/";
  $.ajax({url: questionApi, success: function(result) {
    var questionLength = result.length;
    console.log(result);
    console.log(questionLength);
    for(var i = 0; (i + 1) <= questionLength; i++){
      var questionTitle = result[i].title;
      var questionText = result[i].text;
      console.log(result[i].title);
      var questionID = i + 1;
      console.log(questionID);
        $('div.block').append('<div class=question id=' + questionID + '>' + "<a href=/question/" + questionID + ">" + questionTitle + "</a>"  + '<br>' + questionText + "</div>");
        };
      }
    });
}
getQuestions();
