---
title: "Conectar LearningML-editor con LearningML Scratch"
date: 2021-09-17
categories: 
  - "desarrollo"
  - "inteligencia-artificial"
tags: 
  - "inteligencia-artificial"
  - "learningml-es"
  - "pensamiento-computacional"
---

Ya hemos visto, en una [entrada anterior](https://web.learningml.org/creacion-de-un-entorno-de-desarrollo-para-learningml/), que **la plataforma LearningML consta de dos aplicaciones:**

- el editor de modelos de Machine Learning **(_learningml-editor_)** y

- el editor de programas **(_lml-scratch_).**

En esa misma entrada se explicó cómo montar un entorno de desarrollo para poder trabajar localmente en la construcción de las aplicaciones.

Queda un pequeño detalle que resolver para disponer de un entorno de desarrollo completo, **conectar ambas aplicaciones para que los modelos de Machine Learning que se construyen en _lml-editor_ se puedan usar en los bloques de _lml-scratch_.**

Si pruebas a hacer lo siguiente en tu entorno de desarrollo:

1. **ejecutar ambas aplicaciones** en sus respectivos servidores de desarrollo,

3. **construir un modelo** de ML con _learningml-editor_ y

5. **abrir el editor de programación** picando en el botón del gatito,

Comprobarás que, aunque se abre _lml-scratch_, los modelos de ML no están disponibles. **¿Por qué sucede esto?, ¿cómo podemos arreglarlo?** Estas serán las preguntas que responderemos en esta entrada.

#### ¿Por qué no está disponible el modelo de ML en el editor de programación Scratch?

**La estrategia que utilicé** para poder usar en _lml-scratch_ el modelo construido con _learningml-editor_, se basa en **dos mecanismo ofrecidos por los navegadores web: El [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) y el [Broadcast Channel.](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel)** El primero sirve para almacenar datos en el navegador que pueden ser accedidos por aplicaciones que se ejecutan en distintas pestañas. Mientras que el segundo sirve para enviar mensajes entre aplicaciones que se ejecutan también en distintas pestañas del navegador.

**Cuando se crea un nuevo modelo con _learningml-editor_, este coloca en el _LocalStorage_ información sobre el tipo de modelo que se ha creado,** para que _lml-scratch_ sepa qué bloques de Machine Learning pueden usarlo. Por otra parte, **cuando se usa un bloque** de Machine Learning **en _lml-scratch_** (por ejemplo un bloque para clasificar un texto) **este envía un mensaje a _lml-editor_ solicitándole el resultado.** Cuando _lml-editor_ lo recibe, realiza la operación (por ejemplo clasificar el texto) y la devuelve al bloque que la pidió.

Pero resulta que **los mecanismos de _LocalStorage_ y _Broadcast Channel_ solo funcionan entre pestaña**s del navegador que han sido **cargadas desde el mismo dominio**. Y aquí es donde radica el problema: **los servidores de desarrollo de _learningml-editor_ y de _lml-scratch_ se levantan en puertos distintos,** de manera que a la primera aplicación se accede desde _http://localhost:4200_, y a la segunda desde _http://localhost:8601_. Y estas dos _urls_ **son consideradas por el navegador web como distintos dominios.** ¿Vaya cagada, no?

#### ¿Cómo podemos superar este problema?

La única manera de **resolver el problema** es **sirviendo a ambas aplicaciones desde el mismo dominio.** ¿Cómo podemos hacerlo? Tenemos dos posibilidades:

1. **Crear un desplegable de cada una de la aplicación** (ambas aplicaciones son estáticas, es decir, están compuestas únicamente por código HTML, Javascript y CSSs). **Desplegarlas en un servidor web** (_apache_ o _nginx_, por ejemplo) de manera que ambas sean servidas desde el mismo dominio (por ejemplo: _http://mi.dominio/learningml_ y _http://mi.dominio/scratch_).

3. **Colocar los servidores de desarrollo detrás de un _reverse proxy_** al que se acceda desde un mismo dominio.

**La primera solución** es adecuada para un entorno de producción. Pero **no es operativa en un entorno de desarrollo,** pues tendríamos que reconstruir los desplegables y colocarlos en su sitio cada vez que hagamos una modificación al código y queramos comprobar como funciona.

Así que solo nos queda la segunda :-)

#### Veamos en que consiste con más detalle

Un _reverse proxy_ no es más que un servidor que realiza consultas a distintos servidores, según la _url_ solicitada por el cliente (aquí cliente significa navegador web). Acto seguido, devuelve al cliente la respuesta obtenida del servidor como si la hubiese construido él mismo. Es decir, el cliente no conoce todo este batiburrillo que acabo de contar. **El siguiente esquema ayuda a entender el funcionamiento de un _reverse proxy._**

<figure>

![](images/Reverse_Proxy.png)

<figcaption>

Fuente: https://commons.wikimedia.org/wiki/File:Reverse\_Proxy.png

</figcaption>

</figure>

Lo que nos interesa de este "chisme" es que **peticiones que llegan con el mismo dominio pero con distintas rutas, se pueden resolver en servidores que escuchan en distintos puertos.** De esa manera, para el cliente que realiza la petición original, todas las respuestas provienen del mismo dominio. Es lo que intentamos conseguir para que el navegador web (es decir, el cliente), nos permita utilizar los mecanismos de _LocalStorage_ y _Broadcast Channel_.

**Existen muchas soluciones para desplegar un _reverse proxy_.** Contaré la que uso para el desarrollo de _LearningML_, basada en [Nginx](https://www.nginx.com/), suficiente para trabajar en los problemas que requieren conexión entre _learningml-editor_ y _lml-scratch_ en desarrollo.

#### **Instalar un servidor _Nginx_, y configurarlo** (archivo _nginx.conf_)

```
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;

    keepalive_timeout  65;

    server {
        listen       8080;
        server_name  localhost;

        proxy_buffering off;

        location / {
            proxy_pass http://localhost:4200/;
        }
        location /scratch/ {
            proxy_pass http://localhost:8601/;
        }
    }

    include servers/*;
}
```

Observa que **la parte interesante está en la sección _server_.** Viene a decir que, cuando el servidor proxy reciba una petición _http://localhost:8000/_, consulte al servidor de desarrollo de _learningml-editor_ (recuerda que este responde a _http://localhost:4200_), y devuelva el resultado al cliente. Y que cuando reciba una petición _http://localhost:8000/scratch_, consulte al servidor de desarrollo de _lml-scratch_ (recuerda que responde a _http://localhost:8601_), y devuelva el resultado al cliente (es decir, al navegador web).

De esta manera, **conseguimos que el cliente reciba las dos aplicaciones: _learningml-editor_ y _lml-_scratch desde el mismo dominio,** a saber: _localhost:8080_. Y por tanto, **que funcionen los mecanismos _LocalStorage_ y _Broadcast Channel_,** necesarios para que ambas aplicaciones se comuniquen.

**¡Y eso es todo!** Esta es la solución que se me ocurrió para que los mecanismos _LocalStorage_ y _Broadcast Channel_ funcionansen en mi entorno de desarrollo. **No sé si habrá otra más sencilla. Si a alguno de vosotros se os ocurre, por favor, no dudéis en contármela.** De todas formas, hay que tener en cuenta que normalmente se trabaja de forma independiente en cada una de las aplicaciones, y en ese caso no es necesario utilizar el _reverse proxy._ Solo cuando estemos liados con problemas relacionados con el uso del modelo de Machine Learning desde _lml-scratch_, será necesario usarlo.
