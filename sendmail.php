<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if(
            !empty($_POST['firstName'])
            && !empty($_POST['lastName'])
            && !empty($_POST['email'])
            && !empty($_POST['message'])
        ){
            $firstName = $_POST["firstName"];
            $lastName = $_POST["lastName"];
            $email = $_POST["email"];
            $phone = $_POST["phone"];
            $message = $_POST["request"];


            $to = "kyrylochuchula@gmail.com";
            $subject = "New Contact Form Submission";
            $body = "First Name: {$firstName}\nLast Name: {$lastName}\nEmail: {$email}\nPhone: {$phone}\nMessage: {$message}";
            $headers = "From: {$email}";


            if (mail($to, $subject, $body, $headers)) {
                echo "Message sent successfully!";
            } else {
                echo "Failed to send message.";
            }
        }
    }
?>