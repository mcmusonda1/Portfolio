function SendMail(params) {
    var Sending = {
        from_name: document.getElementById("name").value,
        message: document.getElementById("toName").value,
        reply_to: document.getElementById("email").value,
    };

    emailjs.send('registration_service', 'registration_form',Sending)
    .then(function(res){
        console.log("success", res.status);
    })
}