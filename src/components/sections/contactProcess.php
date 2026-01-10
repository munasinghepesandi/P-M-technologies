<?php

include "connection.php";

$fname = $_POST['fname'];
$email = $_POST['email'];
$message = $_POST['message'];

$q = "INSERT INTO client (name, email, message) VALUES ('$fname', '$email', '$message')";

if(empty($fname)){
    echo "Name is required";
} elseif(empty($email)){
    echo "Email is required";
} elseif(empty($message)){
    echo "Message is required";
} else {
    Database::iud("INSERT INTO `client` (`name`, `email`, `message`) VALUES ('".$name."', '".$email."', '".$message."')");
    echo "Your message has been sent successfully!";
}
?>
<ContactForm />
