//form to ask questions and post them via ajax

$('#submit').click(function(event) {
    event.preventDefault();
    console.log("hoi");
    let $form = $('#q_form :text');
    console.log($form);
    $.ajax({
        type:'POST',  //127.0.0.1:8000/ask
        url: '/api/question/',
        data: $form,
        success: function(result) {
            alert("Question added!");
        }
    })
});
