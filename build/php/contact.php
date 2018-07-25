<?php
//3 lines of code to retrieve the form data sent via the "post" method
  $name=$_POST['name'];
  $tel=$_POST['tel'];
  $email=$_POST['email'];
  $comment=$_POST['message'];
  $rez='';
/*creation of the $msg variable and
supplementally adding more details to it.*/
  $msg="EMAIL SENT FROM WEBSITE:\r\n " ;
  $msg.="Senders Name: $name \r\n ";
  $msg.="Senders Phone: $tel \r\n ";
  $msg.="Senders E-mail: $email\r\n ";
  $msg.="Comment:    $comment ";

  $to="solaqua2018@gmail.com";   //where is the email to be sent
  $subject="Get a quote ";   //what subject should the email display
  $mailheaders="From: $email\r\n";  //what email  will display for the sender

  if(mail($to, $subject, $msg, $mailheaders)){
    die("true");
  }else{
    die("There was an error sending the email.");
  }

?>
