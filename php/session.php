<?php
	
	session_start();

	if ($_SESSION['folder'] != "Index") {

		echo "<center>Vous ne devriez pas être ici...</center>";

		// Redirection vers l'index du site.
		header("Refresh:2; url=../index.php");

	}

?>