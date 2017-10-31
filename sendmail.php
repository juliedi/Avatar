<?php
//création email avec header, etc//
$to = "julie.di@codeur.online";
$comments = $_POST['comments'];
$mail = $_POST['mail'];
$headers = 'MIME-Version: 1.0'."\r\n";
$headers = 'content-type: text/html; charset=UTF-8'."\r\n"; 

mail($to,$mail,$comments,$headers);

?>