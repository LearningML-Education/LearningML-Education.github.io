---
title: "En camino hacia la IA generativa en LearningML"
date: 2025-03-18
categories: 
  - "blog"
  - "desarrollo"
  - "educacion"
  - "informacion-es"
  - "inteligencia-artificial"
translation: on-the-road-to-generative-ai-in-learningml
---

Cuando inicié el desarrollo de LearningML **el gran reto fue conseguir que los algoritmos de _machine learning_ para la clasificación y el reconocimiento de "cosas" se pudieran ejecutar en el navegador del usuario.**

La idea era evitar el uso de la nube todo lo posible, evitando los servicios de IA de grandes tecnológicas y la necesidad de crear cuentas de usuario. De esa manera conseguiría **una herramienta independiente y respetuosa con la protección de datos, ¡tan necesaria en los entornos escolares!**

#### Y llegó "_Tensorflow.js_"...

Después de algún tiempo de estudio comprobé que existía la tecnología necesaria para conseguirlo: su nombre era _[Tensorflow.js](https://www.tensorflow.org/js),_ una librería _open source_ con todos los algoritmos necesarios para realizar machine learning discriminativo, es decir, **algoritmos con los que realizar tareas de clasificación, regresión y reconocimiento.**

Ahora, mi propósito es ampliar LearningML, para **que los usuarios puedan crear sus propios modelos de IA generativa.** La idea siempre es la misma: que los estudiantes adquieran intuición sobre los mecanismos que subyacen en la IA moderna a través de la realización de actividades prácticas. **Siendo protagonistas en la construcción de sus propios modelos de IA y programando aplicaciones que usan esos modelos.**

#### El problema de "_Transformer_"

El problema que se me plantea es que los algoritmos más potentes de IA generativa están basados en una arquitectura de red neuronal llamada "_transformer_". **Está basada en un revolucionario concepto conocido como mecanismo de auto-atención** y desarrollado en el paper de 2017 _["Atenttion is all you need"](https://arxiv.org/abs/1706.03762)._

**Esta arquitectura no es nada sencilla y requiere,** hasta donde yo sé, un gran número de neuronas y, sobre todo, **una gran cantidad de datos.** Lo cual, en principio, parece ser un _handicap_ para ser adaptado al navegador del usuario.

#### Hay esperanzas de conseguirlo

Existe la librería _javascript_ de _Hugginface_ ["Transjormer.js"](https://huggingface.co/docs/transformers.js/), con lo cual estos algoritmos se pueden ejecutar localmente en el navegador del usuario.

- Falta entender con más profundidad cómo trabajan los _transformer_

- Cuáles son los fundamentos del mecanismo de atención

- Y experimentar con las posibilidades de esta librería.

Así que, si no existiera la posibilidad de que me canse del proyecto, podría decir que, **en un futuro la IA generativa estará disponible en LearningML.** Qué pena que no pueda dedicarle el tiempo que esto se merece...

Os puedo asegurar no solo que **esta ampliación sería una realidad**, si no que, además, **¡lo sería en breve!**
