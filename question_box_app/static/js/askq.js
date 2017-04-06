//form to ask questions and post them via ajax

$('#submit').click(function(event) {
    event.preventDefault();
    console.log("hoi");

    $.ajax({
        type:'POST',
        url: 'api/question/',
        success: function(result) {
            alert("Question added!")
        }




    })

});
