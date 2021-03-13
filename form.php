<?php
	
	$mysqli = new mysqli("", "", "", "");
	$data = false;


	if(isset($_POST['email']) && isset($_POST['name']) && isset($_POST['phone'])){
		$email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
		$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
		$phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);

		$query = 'INSERT INTO callback (email, name, phone) VALUES ('.$email.', '.$name.', '.$phone.')';
		if ($mysqli->query($query) === TRUE) {
		    $data = true;
		} else {
		    $data = false;
		}

	}else{
		$data = false;
	}
	
	echo $data;
?>
