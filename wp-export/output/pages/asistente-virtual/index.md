---
title: "Actividad - Asistente virtual"
date: 2020-06-08
---

#### Objetivo

En esta actividad vas a construir un asistente virtual inteligente. Es decir, un programa informático que será capaz de **responder y reaccionar** adecuadamente a las órdenes que le damos a través de una entrada de texto. Lo interesante es que podemos usar cualquier frase que se te ocurra y que tenga que ver con las órdenes que queremos reconocer.

![](images/Captura-de-pantalla-2020-06-08-a-las-10.20.58.png)

#### Creación del modelo de reconocimiento de órdenes

El **primer paso** **es crear un** **modelo** que sea capaz de reconocer las órdenes que damos al asistente virtual. Puedes imaginarte al _modelo_ como una máquina. Por un lado le metemos un texto y entonces la máquina lo analiza sacando por otro lado el tipo de orden a la que pertenece ese texto. El editor de [LearningML](https://learningml.org/editor) es la herramienta que usarás para construir este **modelo**.

###### ¿Cómo creamos el modelo?

1. **Abre el editor de [LearningML](https://learningml.org/editor)**. Para ello, dirige tu navegador (_Chrome_ o _Firefox_) a la dirección [_ht_tps://learningml.org/editor](https://learningml.org/editor).

3. Como daremos las órdenes presentándole textos, pincha en el botón **_Reconocer Textos_**, y se abrirá la herramienta con las opciones necesarias para construir un modelo de reconocimiento de texto.

5. Ahora, en la sección  “_1\. Entrenar_”, vas a **añadir 4 clases** (o etiquetas, que también se llaman así), una para cada orden. El nombre de estas clases (o etiquetas) pueden ser: "_encender luz_", "_apagar luz_", _"encender ventilador_", "_apagar ventilador_". Para crear una nueva clase pincha en el botón **_Añadir nueva clase de texto_**. Con estas órdenes nuestro asistente virtual será capaz de reconocerlas para  encender o apagar una luz, o un ventilador. Pero si quieres puedes añadir más tipos de órdenes para controlar más aparatos.

7. **Agrega a cada clase varios textos** que tengan que ver con lo que la clase representa. Por ejemplo, en la clase encender luz puedes añadir textos como:
    - enciende la luz,
    
    - dale al interruptor de la lámpara,
    
    - qué oscura está la habitación,
    
    - ….

y así con las demás clases. Escribe, por lo menos, 8 o 10 frases en cada orden, es decir, en cada una de las clases.

###### ¿Y si queremos añadir nuevos textos a una clase?

Para ello, pincha en el botón _**+**_ de esa clase. Fíjate que cada clase tiene su propio botón **_+_** para añadir sus textos.

5. Muy bien, ya tienes el **conjunto de datos de ejemplo**! Ahora pincha en el botón **_Aprender a reconocer textos_** de la sección “_2\. Aprender_”. Asegúrate de que el desplegable **_Lenguaje de los textos_** esté en **_Español_**, a menos que hayas decidido dar las órdenes en otro idioma. 

Una vez que pinches en este botón, tu ordenador estará “aprendiendo” a partir de los textos que has escrito. Este aprendizaje se hace gracias a un algoritmo que denominamos **Algoritmo de Machine Learning**. Esto puede tardar un ratito. Sé paciente. Al final de este paso, el Algoritmo de Machine Learning ha creado lo que llamamos un **modelo**. Ese modelo es algo que tú puedes utilizar para que el ordenador reconozca nuevas órdenes parecidas aunque diferentes a las del conjunto de datos de entrenamiento.

###### ¿Cómo sabemos que funciona?

6. Para averiguarlo, utiliza la caja de texto de la sección “_3\. Probar_” para escribir textos que tengan que ver con las  órdenes "_encender luz_", "_apagar luz"_, "_encender ventilador"_, "_apagar ventilador"._ Pincha entonces en el botón **_Comprobar_** y observa si lo que dice LearningML coincide con la respuesta correcta. 

8. Enhorabuena! Ya tienes un modelo de inteligencia artificial que reconoce 4 órdenes.

Puede ocurrir que en el paso 6, lo que dice LearningML no coincide con el tipo de orden correcto. Por ejemplo, imagina que has usado como texto “_dale al interruptor de la lamparita_” y LearningML dice que ese texto pertenece a la orden "_apaga ventilador"_. Obviamente no ha funcionado bien. En ese caso, puedes añadir esa frase a la clase que realmente le corresponda y volver a ejecutar el algoritmo de Machine Learning, es decir, volver a pinchar en el botón **_Aprender a reconocer textos_**. Así crearás un nuevo modelo que habrá aprendido esa nueva frase y será más “potente”, pues es capaz de reconocer correctamente más textos. 

#### Programamos el asistente virtual

Ya tienes la pieza fundamental del asistente virtual, la que es capaz de reconocer a qué tipo de orden pertenece un texto. A esta pieza la hemos llamado **modelo**. Ahora usaremos esa pieza inteligente, es decir el **modelo**, para hacer un programa que controle el encendido y apagado de una luz y de un ventilador.

###### ¿Cómo hacerlo?

1. En la sección “3. Probar” del editor de LearningML, pincha en el botón que tiene el gato de Scratch… y se abre Scratch!

3. Fíjate que en la primera columna, donde aparecen los tipos de bloques, hay unos que se llaman “_learningml-texts_” y “l_earningml-images_”. Pincha sobre ellos y verás que contienen varios bloques nuevos. Estos bloques sirven para usar el modelo que acabas de construir hace un momento. Como has hecho un modelo de reconocimiento de textos, debes usar los bloques de la sección “learningml-texts”.

5. Coloca un bloque “_classify text <texto>_” en la zona de programación de Scratch y escribe en su entrada algún texto que tenga que ver con una de las órdenes de nuestro asistente. Por ejemplo: “enciende la luz, por favor”. Entonces pincha encima del bloque y observa lo que ocurre. Al lado del bloque aparece la clase de orden a la que pertenece el texto. Y así es, precisamente, cómo funciona ese bloque: Al ejecutarse calcula la clase a la que pertenece el texto que pongamos en su entrada. **Este hecho nos da la clave para construir nuestro asistente virtual**.

7. Ahora descarga el siguiente [**programa**](https://web.learningml.org/sb3/asistente_virtual.sb3), y lo abres con Scratch. Fíjate que no funciona porque no está completo. Tu misión consiste en completarlo para que funcione correctamente.

###### ¿Cómo lo completamos para que funcione?

Para completar el programa del personaje “Giga” ten en cuenta lo siguiente:

- Si en el bloque  “enviar <mensaje>”  colocas el texto “encender luz”, la lámpara se enciende.

- Si en el bloque  “enviar <mensaje>”  colocas el texto “apagar luz”, la lámpara se apaga.

- Si en el bloque  “enviar <mensaje>”  colocas el texto “encender ventilador”, el ventilador se enciende.

- Si en el bloque  “enviar <mensaje>”  colocas el texto “apagar ventilador”, el ventilador se apaga.

Ten en cuenta que el bloque “_classify <texto>_” devuelve la clase de orden a la que pertenece el texto, es decir alguna de las siguientes: 

- encender luz

- apagar luz

- encender ventilador

- apagar ventilador

Si quieres ver lo que se puede llegar a hacer con esta idea te aconsejo que veas el siguiente video realizado por María Loureiro (@tecnoloxia).

https://youtu.be/msSgOaQjBMw
