<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$usermail = $_POST['mail'];
$userpass = $_POST['pass'];
// Формирование самого письма
$title = "Новый пользователь EHYA";
$body = "
<h2>Новый пользователь</h2>
<b>Почта:</b> $usermail
<br>
<b>Пароль:</b> $userpass
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'goodwork1298@gmail.com'; // Логин на почте
    $mail->Password   = 'LM8-rqk-d3w-RVp'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('goodwork1298@gmail.com', 'Anastasia Zap'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('avzaporozhets@stud.etu.ru');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

header('Location: subscribe.html');
