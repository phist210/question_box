function getQuestions() {
  var questionApi = "/api/question/";
  $.ajax({url: questionApi, success: function(result) {
    var questionLength = result.length;
    for(var i = 0; i < questionLength; i++){
      var questionTitle = result[i].title;
      var questionText = result[i].text;
      var questionID = result[i].id;
        $('div.block').append('<div class=question id=' + questionID + '>' + "<a href=/question/" + questionID + ">" + questionTitle + "</a>" + '<br>' + questionText + "</div>");
      };
    }
  });
}

getQuestions();
