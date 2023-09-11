<?php

// Comprobar si se ha enviado un formulario POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    exit('<div class="error_message">No se ha enviado ningún formulario.</div>');
}

// Función para validar correo electrónico utilizando FILTER_VALIDATE_EMAIL
function validate_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Función para limpiar y escapar datos de entrada
function sanitize_input($input) {
    return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
}

// Recoger y validar datos de entrada
$name = sanitize_input($_POST['name']);
$email = sanitize_input($_POST['email']);
$phone = sanitize_input($_POST['phone']);
$comments = sanitize_input($_POST['comments']);

// Validar campos requeridos
if (empty($name)) {
    exit('<div class="error_message">Debe ingresar su nombre.</div>');
}

if (empty($email) || !validate_email($email)) {
    exit('<div class="error_message">Por favor, ingrese una dirección de correo electrónico válida.</div>');
}

if (empty($comments) || $comments == 'Your Message') {
    exit('<div class="error_message">Por favor, ingrese su mensaje.</div>');
}

// Evitar enlaces y etiquetas HTML peligrosas en los comentarios
if (stripos($comments, 'href') !== false || stripos($comments, '<a') !== false) {
    exit('<div class="error_message">Por favor, deje los enlaces como texto plano.</div>');
}

// Dirección de correo electrónico de destino
$address = 'ignacio@pkwdriveclub.com';

// Asunto del correo electrónico
$e_subject = 'Ha sido contactado por ' . $name;

// Cuerpo del correo electrónico
$e_body = "Ha sido contactado por $name desde su formulario de contacto. El mensaje es el siguiente:\n\n$comments\n\n";
$e_reply = "Puede ponerse en contacto con $name a través de su correo electrónico: $email";

// Encabezados
$headers = "From: $address\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=utf-8\r\n";

// Envío del correo electrónico
if (mail($address, $e_subject, $e_body . $e_reply, $headers)) {
    echo '<fieldset><div id="success_page"><p>Gracias, ' . $name . ', su mensaje ha sido enviado correctamente.</p></div></fieldset>';
} else {
    echo '<div class="error_message">Ocurrió un error al enviar el mensaje.</div>';
}
?>
