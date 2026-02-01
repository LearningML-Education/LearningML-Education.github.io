---
title: "Disponible la versión 1.3 de LearningML"
date: 2021-11-21
categories: 
  - "desarrollo"
  - "inteligencia-artificial"
tags: 
  - "inteligencia-artificial"
  - "learningml-es"
  - "pensamiento-computacional"
translation: learningml-version-1-3-available
---

Desde hoy, puedes disfrutar de la **Nueva Versión (1.3) de LearningML.** Agregué nuevas **funcionalidades, encaminadas a explorar los algoritmos de Machine Learning para entenderlos mejor.** Hasta ahora, eran una caja negra sobre la que el usuario no tenía ningún control.

Entre ellas está la **incorporación del reconocimiento de datos numéricos,** es decir, de conjuntos de números organizados tabularmente (como en las hojas de cálculo). Así, podremos **crear modelos de Machine Learning a partir de conjuntos de datos (_datasets_)**. Obtenidos mediante la lectura de experimentos con sensores o a partir de _datasets_ conocidos y disponibles de manera abierta en la red. Como pueden ser: el _[iris dataset](https://es.wikipedia.org/wiki/Conjunto_de_datos_flor_iris)_ o el _[boston house dataset](https://www.kaggle.com/c/boston-housing)_.

Puedes acceder a esta nueva versión desde el botón **"Versión 1.3 (beta)"** de la página principal, que enlaza con la siguiente _url_: [https://beta.learningml.org/editor](https://beta.learningml.org/editor).

#### Algunas novedades introducidas:

A nivel de **código**

- Separación de la extracción de _features_ y del algoritmo de ML.

- Actualización de _lml-editor_ a _Angular 12_.

- Reorganización de los _repos_ de _lml-scratch_ (para sincronizar con la rama _develop_ de Scratch).

- Implementación de un protocolo de mensajes (para solicitar servicios de ML desde _lml-scratch_ a _lml-editor (lml-message-protocol))._

- Y, simplificación del código de _lml-scratch_ gracias al _lml-message-protocol_.

Y, a nivel de **funcionalidades**

- **En modo avanzado**
    - Selección de distintos algoritmos de Machine Learning. Por lo pronto se ofrecen los algoritmos: _KNN_ y red neuronal.
    
    - Ajuste de los parámetros de entrenamiento típico de cada algoritmo.
    
    - Definición (opcional) de un porcentaje de datos de entrenamiento (para el cálculo de una matriz de confusión con la que evaluar la precisión del modelo construido).
    
    - Visualización de una matriz de confusión (para evaluar el modelo construido).
    
    - Visualización del proceso de aprendizaje (para la red neuronal).

- **Y, reconocimiento de conjuntos de datos numéricos**
    - Visualización de los límites de decisión del algoritmo (para modelos numéricos bidimensionales).

Poco a poco, haré nuevas entradas y actividades prácticas para explicar con más detalle estas **nuevas funcionalidades.** Están pensadas para que **el funcionamiento de los algoritmos de Machine Learning sea más intuitivo.** Por lo pronto, **puedes ver en el [manual de LearningML](https://web.learningml.org/manual-de-learningml/)** como se usan, aunque no hay ninguna explicación pedagógica.

Es importante que tengas en cuenta que se trata de una versión _beta_, todavía puede presentar algún fallo que otro. **Si encuentras algún error, envíame un mensaje mediante el formulario de contacto de esta web**. Cuando esta versión esté suficientemente depurada, ¡pasará a ser la versión estable! y comenzaré a trabajar en la nueva _beta_.

**¡Y eso es todo! Espero que disfrutéis de las nuevas funcionalidades de esta versión.**
