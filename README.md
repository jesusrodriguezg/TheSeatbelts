# The Seatbelts
### Página web dedicada al grupo _The Seatbelts_, creada con HTML, CSS y JavaScript

Éste es un proyecto desarrollado como trabajo práctico para la asignatura de Diseño de Interfaces Web (DIW) del ciclo formativo de grado superior en Desarrollo de Aplicaciones Web del IES Polígono Sur de Sevilla.

El objetivo del trabajo es crear una página web con diseño responsive y que integre HTML, CSS y JavaScript. La temática gira en torno a un grupo o estilo musical. En este caso hemos elegido la big band _The Seatbelts_, liderada por Yoko Kanno, que produjo la banda sonora del anime _Cowboy Bebop_ en 1998.

> **Aviso sobre derechos de autor:** en esta práctica se incluyen vídeos, canciones e imágenes con derechos de autor. El uso de dichos archivos es exclusivamente educativo y personal, nunca con fines comerciales o de lucro.

#### Funcionalidades

La web incluye las siguientes funcionalidades:

- Diseño responsive (con menos de 756px se despliega la vista de móvil)
- Menú desplegable (se mantiene en la vista de móvil, aunque el diseño no es óptimo)
- Animaciones en el footer para mostrar los créditos del autor
- Pantalla de bienvenida con autoreproducción de vídeo
- Autoreproducción de música en parte de las páginas
- Reproductor de música con lista desplegable y carátula

#### Antes de ejecutar

Dado que la página web incluye autoreproducción de vídeo y música, es conveniente que configures el navegador para que permita la autoreproducción multimedia antes de cargar la página. De lo contrario, algunas de las funcionalidades pueden no estar disponibles y el funcionamiento de la web puede no ser el correcto.

También hay que tener en cuenta que el proyecto subido en este repositorio incluye una buena cantidad de canciones, de modo que el peso total excede los 100 MB. Tenlo en cuenta antes de clonar o descargar el repositorio.

#### Ejecución

Para ejecutar la página, carga el archivo `index.html` que está en la carpeta raíz. Se desplegará el _landing_ de bienvenida y el botón para acceder al resto de contenidos. 

#### Código externo

Esta web cuenta con código externo para la función del reproductor de música. El código está tomado [de este tutorial en la web www.script-tutorials.com ](https://www.script-tutorials.com/html5-audio-player-with-playlist/). Se encuentra separado en un archivo .js independiente y acotado en la hoja de CSS.

#### Futuras mejoras

La intención es seguir optimizando el código y las funcionalidades de la web. Algunos de los elementos que hay que pulir o mejorar son:

- Incluir un menú oculto que se despliegue al pulsar un botón en la vista de móvil.
- Eliminar las etiquetas <iframe> de los vídeos de YouTube para incluir los propios archivos de vídeo con etiquetas <video>.
- Incluir nuevas animaciones con JavaScript.
- Pulir el posicionamiento de algunos elementos, como el botón de bienvenida (en el archivo `index.html`).
