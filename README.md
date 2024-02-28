# BnapSuzZ
## informacion
permite capturar la pantalla del usuario junto con audio del micrófono, grabarlo en un formato de video webm y luego proporcionar la opción de descargar la grabación resultante.

## funciones 
Inicialización de variables y elementos del DOM: El código define algunas variables y obtiene referencias a elementos del DOM necesarios, como un lienzo (canvas), un video (video), botones para iniciar y detener la grabación (startButton, stopButton), y un enlace para descargar el video (downloadLink).

![image](https://github.com/AvastrOficial/BnapSuzZ/assets/91764815/f4ada2c0-e86d-4708-9f87-90fdf90935b7)

Función startRecording(): Esta función asincrónica se ejecuta cuando el usuario hace clic en el botón de inicio (startButton).

## Sintaxis de el codigo 
![image](https://github.com/AvastrOficial/BnapSuzZ/assets/91764815/5ea68c39-b331-466e-9b5f-9c97d72b8a6e)

## acciones del iniciar a grabar
![image](https://github.com/AvastrOficial/BnapSuzZ/assets/91764815/13bd1da4-2933-4a5f-876e-96034a80addb)


## Realiza lo siguiente:
Utiliza navigator.mediaDevices.getDisplayMedia() para obtener acceso al contenido de la pantalla del usuario junto con el audio del micrófono.
Crea un nuevo MediaRecorder utilizando el flujo de medios obtenido.

Establece el comportamiento cuando se recibe datos del MediaRecorder a través del evento ondataavailable, que guarda los datos en un array chunks.
Establece el comportamiento cuando se detiene la grabación a través del evento onstop, que convierte los chunks en un objeto Blob, crea una URL de objeto a partir del Blob y actualiza el elemento <video> con esta URL para que el usuario pueda reproducir la grabación.

![image](https://github.com/AvastrOficial/BnapSuzZ/assets/91764815/f07f9704-3322-4acb-936d-d4ed150c5e8e)

Muestra y oculta elementos del DOM para reflejar el estado de la grabación.
Función stopRecording(): Esta función se ejecuta cuando el usuario hace clic en el botón de detener (stopButton). Simplemente llama al método stop() del MediaRecorder para detener la grabación.

![image](https://github.com/AvastrOficial/BnapSuzZ/assets/91764815/d25160d3-4e3a-40a8-a6ee-a00b9f3a8f1f)

## Event listeners:
Se agregan event listeners a los botones de inicio y detención para llamar a las funciones startRecording() y stopRecording() respectivamente cuando se hace clic en ellos.

## En resumen
el código proporciona una manera de capturar la pantalla del usuario junto con el audio, grabarla y permitir la descarga del video resultante.

![image](https://github.com/AvastrOficial/BnapSuzZ/assets/91764815/66b27020-e2df-4a9b-bb83-2cf3b62180ad)

## link de la pagina funcionando :
https://fileboxbsz.foroactivo.com/h8-bnapsuzz	
