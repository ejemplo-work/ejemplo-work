
<?php
// Obtener los valores enviados desde el formulario
$saludo = $_POST['title'];
$nombre = $_POST['fname'];
$apellido = $_POST['lname'];
$email = $_POST['email'];
$mensaje = $_POST['msg'];

// Realizar cualquier validación necesaria aquí

// Enviar el correo electrónico de respuesta
$to = 'ignazziopastore@gmail.com';
$subject = 'Nuevo mensaje de contacto';
$message = "Saludo: $saludo\n";
$message .= "Nombre: $nombre\n";
$message .= "Apellido: $apellido\n";
$message .= "Email: $email\n";
$message .= "Mensaje: $mensaje\n";
$headers = "From: $email\r\n";

// Enviar el correo electrónico
mail($to, $subject, $message, $headers);

// Redireccionar a una página de confirmación o mostrar un mensaje de éxito
header('Location: workshop.html');
exit();
?>
