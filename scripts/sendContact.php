<?php

// FORM VARS

 $name = $_REQUEST['name'] ;
 $phone = $_REQUEST['phone'] ;
 $email = $_REQUEST['email'] ;
 $message = $_REQUEST['message'] ;
 
//  MESSAGE FIELDS
	$strMessage = " Name: " . $name . "\r\n\n";
	$strMessage .= "Phone: " . $phone . "\r\n\n";
	$strMessage .= "Email: " . $email . "\r\n\n";
	$strMessage .= "Message: " . $message . "\r\n\n";

// CONSTANTS
	$headers = "From: " . $email;
	$headers .= PHP_EOL;
	$headers .= "Reply-To: " . $_REQUEST['email'];

 	$strRecipient = "todd@mercenaryoffroad.com";
	$strSubject = "Web Site Contact";

// MAIL IT
  mail($strRecipient, $strSubject, $strMessage, $headers);

// THANK THE USER
  header( "Location: ../thanks.html" );

?>