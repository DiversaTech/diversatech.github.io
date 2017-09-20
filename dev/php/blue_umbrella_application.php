<?php
if($_POST["message"]) {
    mail("your@email.address", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>
