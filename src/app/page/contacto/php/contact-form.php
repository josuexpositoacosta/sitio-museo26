<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "{{usuarios[0]?.email}}";
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];
    $correoOrigen = $_POST["correoOrigen"];
    $nombreCompleto = $_POST["nombreCompleto"]; 

    $headers = "From: " . $nombreCompleto . " <" . $correoOrigen . ">\r\n" .
        "Reply-To: " . $nombreCompleto . " <" . $correoOrigen . ">\r\n" .
        "X-Mailer: PHP/" . phpversion();

    if (mail($to, $asunto, $mensaje, $headers)) {
        echo "Correo enviado con éxito";
    } else {
        echo "Error al enviar el correo";
    }
}
?>