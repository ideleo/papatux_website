<?php

if (isset($_POST['email'])) {
  echo 'Success! Thanks for submitting';

  $admin_email =  "info@papatux.com";
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  mail($admin_email, "New Form Submission", $message . '-' . $phone, "From:" . $email);
 
  header('Location:https://papatux.com/submit-form.html
  ');
}

?>