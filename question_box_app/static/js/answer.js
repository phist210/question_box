from django.http import HttpResponseRedirect


// AJAX for answering
$('.button').click(function(event) {

    let form_data = {text: "foo", question_id: 4, user_id: 1}
    // let form_data = {text: event.text, question_id: question_id, user_id: user_id}

    event.preventDefault();
    console.log("Answer Question is working!") // sanity check
    $.ajax({
        url : "/api/answer/", // the endpoint
        type : "POST", // http method
        data : form_data,
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
    HttpResponseRedirect('/api/answer/')
});
