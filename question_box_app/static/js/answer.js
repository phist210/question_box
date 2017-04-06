// AJAX for answering
$('#submit_answer').click(function(event) {
    event.preventDefault();
    console.log($('form').serializeArray());
    let $info = $('#ans_form :input');
    let $text = $info[1].value;
    let $form = {
      "text": $text,
      "question": "",
      "user": 1,
      "created": "",
      'csrfmiddlewaretoken': $('[name="csrfmiddlewaretoken"]').val()
    }
    // let form_data = {text: "foo", question_id: 4, user_id: 1}
    // let form_data = {text: event.text, question_id: question_id, user_id: user_id}

    $.ajax({
        url : "/api/question/", // the endpoint
        type : "POST", // http method
        data : $form,
        // handle a successful response
        success : function(json) {
            $('#answer_text').val(''); // remove the value from the input
            console.log(json); // log the returned json to the console
            console.log("success"); // another sanity check
        },

        // handle a non-successful response
        error : function(xhr,errmsg,err) {
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });
});
