function getQuestions() {
  var questionApi = "/api/question/";
  $.ajax({url: questionApi, success: function(result) {
    var questionLength = result.length;
    for(var i = 0; (i + 1) <= questionLength; i++){
      var questionTitle = result[i].title;
      var questionText = result[i].text;
      var questionID = i + 1;
        $('div.block').append('<div class=question id=' + questionID + '>' + "<a href=/question/" + questionID + ">" + questionTitle + "</a>"  + '<br>' + questionText + "</div>");
      };
    }
  });
}
getQuestions();
