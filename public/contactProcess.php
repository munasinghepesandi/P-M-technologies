<?php

include "connection.php";

header("Content-Type: text/plain; charset=UTF-8");

$name = isset($_POST['name']) ? trim($_POST['name']) : "";
$email = isset($_POST['email']) ? trim($_POST['email']) : "";
$message = isset($_POST['message']) ? trim($_POST['message']) : "";

if (empty($name)) {
    echo "Name is required";
} elseif (empty($email)) {
    echo "Email is required";
} elseif (empty($message)) {
    echo "Message is required";
} else {
    Database::iud("INSERT INTO `client` (`name`, `email`, `message`) VALUES ('" . $name . "', '" . $email . "', '" . $message . "')");
    echo "success";
}
?>