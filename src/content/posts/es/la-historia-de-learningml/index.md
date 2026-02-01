---
title: "La historia de LearningML"
date: 2020-05-25
categories: 
  - "blog"
  - "informacion-es"
tags: 
  - "inteligencia-artificial"
  - "learningml-es"
  - "pensamiento-computacional"
translation: the-learningml-story
---

En diciembre de 2018, **[Jesús Moreno León](http://jemole.me/),** entonces jefe del departamento de "Experimentación en el Aula" del INTEF, me propuso elaborar un **[recurso didáctico](http://code.intef.es/inteligencia-artificial-en-el-aula-con-scratch-3-0/) sobre Inteligencia Artificial. Basado en** una herramienta que había descubierto: [**Machine Learning for Kids**](https://machinelearningforkids.co.uk) (ML4K) de Dave Lane. Un trabajador de IBM que ha desarrollado dicha herramienta dentro del [programa de voluntariado de IBM](https://www.ibm.org/initiatives/ibm-volunteers). La experiencia fue fascinante y me entusiasmó descubrir que algo tan complejo como el Machine Learning, podía ser explicado con eficacia en la escuela.

Decidí explorar este tema y construir el **prototipo** de una aplicación similar a ML4K, pero con una condición importante: **que no fuera necesario crear una cuenta** para su uso. Puede parecer una tontería, pero es algo que dificulta bastante la fluidez de la herramienta en el ambiente escolar.

El primer **problema** que surgió, fue que los **algoritmos** de Machine Learning **debían ejecutarse localmente en el propio navegador web del usuario.** Utilizar alguna de las plataformas de IA ofrecidas por compañías grandes como [IBM](https://www.ibm.com/es-es/cloud), o más modestas como [ClarifAI](https://www.clarifai.com/), implica necesariamente la creación de una cuenta.

#### ¿Podremos ejecutar "pesados" algoritmos de machine learning en el navegador web?

Investigué esa posibilidad, y... ¡El resultado fue alentador! Descubrí la sencilla **librería [Brain.js](https://brain.js.org/#/),** con la que realicé el primer prototipo **para el reconocimiento de textos.** Y la potentísima, profesional y no tan sencilla **librería [Tensorflow.js](https://www.tensorflow.org/js),** con la que implementé **el reconocimiento de imágenes.** **La conclusión fue clara: es posible ejecutar algoritmos de Machine Learning sin necesidad de depender de servicios de terceros.** La ejecución de algoritmos en el navegador web funciona. Aún más, **teniendo en cuenta** que la herramienta a desarrollar tiene **una finalidad pedagógica** y no vamos a usar cantidades masivas de datos como puede ocurrir en aplicaciones específicas de Machine Learning.

Poco después, de la mano de Jesús Moreno, conocí a **[Gregorio Robles](https://gsyc.urjc.es/~grex/) y [Marcos Román](http://portal.uned.es/portal/page?_pageid=93,25355626&_dad=portal&_schema=PORTAL),** dos investigadores que, junto con el primero, llevan varios años realizando interesantes **aportaciones al mundo del Computing Education Research.** Ellos vieron, por un lado, la posibilidad de construir una **herramienta útil para trabajar el pensamiento computacional.** Y por otro, la semilla para realizar una tesis en este campo. Me alentaron a iniciar esta intensa pero gratificante tarea. Y, aprovechando la oportunidad, me lancé (de nuevo) al mundo de la investigación. Y digo "de nuevo", porque hace más de 20 años que lo abandoné debido a circunstancias que ahora no vienen a cuento.

Algo más de un año después, tenemos una **primera versión operativa de LearningML con la que se pueden construir modelos de Machine Learning y programar aplicaciones con Scratch capaces de reconocer textos e imágenes.**

Ahora toca mostrarla a docentes, estudiantes e investigadores para que prueben y comprueben si lo que estamos haciendo es un buen **recurso para fomentar el pensamiento computacional y sirve para aprender contenidos sobre inteligencia artificial de manera práctica.** Y con el deseo de que así sea, continuaremos trabajando en mejorar LearningML.
