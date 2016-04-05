<?php 
	/**
	 * Simple PHP contact form using mail() function and Ajax form submission
	 */		
	
	// handle errors for missing required form fields - name, email, and message
	if(!$_POST['name']){
		$error = "Please Enter in a name";
		echo json_encode($error);
	} 
	elseif(!$_POST['email']){
		$error = "Please enter in an email address";
		echo json_encode($error);
	}
	
	elseif(!$_POST['message']){
		$error =  "Please enter in a message";
		echo json_encode($error);	
	} 
	elseif(isset($_POST['name'], $_POST['email'], $_POST['message'])){
		// send the email
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];

		$to = "hello@tomle.me";
		$from = "Contact Form - Test Sender";
		$subject = 'Test Message from tomle.me Contact form';

		$body = "From: " .$name ."\n E-mail: ".$email." \n Message:\n".  $message;

		if(mail($to, $subject, $body, $from)){
			echo json_encode("Success. Email sent.");	
		} else {
			echo json_encode($error);	
		}

	}



?>