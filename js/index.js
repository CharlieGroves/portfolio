function sendMessage() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if((name != '') && (email != '') && (subject != '') && (message != '')) {

        console.log(name, email, subject, message);
        document.getElementById('success').innerHTML = 'Successful!';
    }

    else {
        document.getElementById('success').innerHTML = '';
    }
}