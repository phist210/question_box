//new answer file
//will submit answers, show ans text, author, time, score, and commentanswer
//three models, probably should be one next time, but a promise is useful here.
//ajax gets from Answer, VoteAnswer, AnswerComments models

//get the page information
function getAnswer() {
    q_id = document.URL.slice(-1);
    count = 0;
    score = 0;
    scores = new Array();
    answers = new Array();
    $.when(
       $.get('/api/answer/', function(result) {
           count = result.length;
           for(var i = 0; i < result.length; i++) {
                if(q_id == result[i].question) {
                    answers.push(result[i]);
                }
            }
       }),
    //    $.get('/api/commentanswer/', function(result) {
    //        console.log('line 14', result);
    //        for(var i = 0; i < result.length; i++) {
    //            if(q_id == result[i].a) {
    //                $('#' + result[i].answer + '.answer').append('<div class=answer_comment id=' + result[i].id + '>' + result[i].user + " commented: " + '</br>' + result[i].answer + "</div>");
    //        }
    //      }
    //    }),
       $.get('/api/voteanswer/', function(result) {
           console.log('line 18', result, q_id);
           scores = new Array();
           for(var i = 0; i < result.length; i++) {
               if(q_id == result[i].question) {
                   score += result[i].score;
                   console.log('hi', score);
               }
            }
            scores.push(score)
       }).then(function() {
           console.log('finish', answers, scores);
           for(var i = 0; i < count; i++) {
               if(scores[i] != 0) {
                  $('div.vote_total.' + i).append(scores[i]);
              } else {
                  $('div.vote_total.' + i).append(0);
              }
               $('div.answer_body.' + i).append(answers[i]);
           }

       }));
    }


// $('div.answer_block').append('<div class=answer id=' + result[i].id + '\'>' + result[i].user + " said: " + '<br>' + result[i].text + '</br>' + "<a class=answer_comment_link>" + "Comment" + "</a>" + "</div>");

getAnswer();
