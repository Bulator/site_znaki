<?php

$recepient_2 = "ahtyamov99@gmail.com";
$siteName_2 = "Ajax-форма";

$name_2 = trim($_POST["name_2"]);
$phone_2 = trim($_POST["phone_2"]);
$comment = trim($_POST["comment"]);
$message_2 = "Имя: $name_2 \nТелефон: $phone_2 \nКомментарий: $comment";

$pagetitle_2 = "Заявка с сайта \"$siteName_2\"";
mail($recepient_2, $pagetitle_2, $message_2, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient_2");

?>