var name = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");

var f = new FormData();

f.append("name", name.value);
f.append("email", email.value);
f.append("message", message.value);

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        var response = request.responseText;
        if (this.responseText === "success") {
            document.getElementById("contact-form").innerHTML = "<h2>Thank you for contacting us. We will get back to you shortly.</h2>";
        } else {
            document.getElementById("contact-form").innerHTML = "<h2>There was an error submitting the form. Please try again later.</h2>";
        }
    }
}

request.open("POST", "contactProcess.php", true);
request.send(f);
