// answer comment js file

$('#comment').click(function(event) {
    console.log(event);
    event.preventDefault();
    let $info = $('#comment_form :input');
    console.log($info);

    $.ajax({
        type: "POST",
        url: "/api/commentanswer/",
        data: $info,
        success:
            alert("commented!")

    })
});
