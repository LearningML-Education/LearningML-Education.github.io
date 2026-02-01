---
title: "Reconocimiento de sonidos en LearningML V2"
date: 2025-02-19
categories: 
  - "blog"
  - "desarrollo"
  - "informacion-es"
  - "inteligencia-artificial"
translation: sound-recognition-in-learningml-v2
---

**La re-escritura de LearningML,** que ha dado lugar a la **versión 2,** la he realizado con la finalidad de **mejorar la estructura del código** para conseguir una mayor modularidad **que facilite la incorporación de nuevas funcionalidades.** Así que, una vez finalizada dicha re-escritura llegó el momento de trabajar en nuevos componentes de LearningML, y lo primero ha sido **el reconocimiento de sonidos.** La idea es hacer algo similar al reconocimiento de sonidos de [Teachable Machine](https://teachablemachine.withgoogle.com/).

#### ¿Cómo se llega a esta incorporación?

Comencé estudiando el **[Trabajo Fin de Grado que realizó Álvaro del Hoyo Arias](https://web.learningml.org/wp-content/uploads/2023/10/Implementacion-de-funcionalidades-en-LearningML-TFG-Alvaro-del-Hoyo-Arias-1.pdf).** Este estudiante de la URJC incorporó en una copia de la versión 1.3 de LearningML el reconocimiento de sonidos. **Adapté su código** para incorporarlo en la nueva versión 2 de LearningML **y, aunque funcionaba, no lo hacía tan bien como [Teachable Machine](http://teachablemachine.withgoogle.com).** El trabajo de Álvaro se basaba en grabar muestras de audio y crear directamente una representación en frecuencia mediante FFT (_Fast Fourier Transform_). Esta última constituía la entrada al algoritmo de Machine Learning. Es conocido que una muestra en frecuencia del sonido ofrece una caracterización más sencilla de analizar que la muestra en el dominio del tiempo. Y en efecto, la implementación de Álvaro funcionaba. Pero...

#### ¿Por qué [Teachable Machine](http://teachablemachine.withgoogle.com) funcionaba mejor**?**

Aunque **no todo el código de _teachable machine_ es _open source_, los algoritmos que usa sí que están publicados en un repositorio de** [**_github_**](https://github.com/googlecreativelab/teachablemachine-community). Fue ahí mismo donde descubrí que para reconocer sonidos, [Teachable Machine](http://teachablemachine.withgoogle.com) usaba la **librería `_@tensorflow-models/speech-commands_`**. Esta **realiza una representación del sonido que se denomina espectrograma y que usa una serie de FFT aplicadas a segmentos temporales sucesivos de la señal.** El espectrograma representa cómo cambian las frecuencias en el tiempo, proporcionando información sobre la evolución del sonido y es especialmente útil para analizar sonidos complejos, como la voz humana, el canto de los pájaros o señales de radar.

**La información recogida es más rica que una FFT directa** puesto que esta última no muestra cómo varían las frecuencias a lo largo del tiempo. Para entender la diferencia podemos pensar en la FFT como si fuera una "foto" del contenido frecuencial de la señal en un instante dado, mientras que un espectrograma es como una "película", donde cada fotograma es una FFT y se ve cómo evoluciona la señal en el tiempo.

#### La solución estaba clara

**Usar la librería `_@tensorflow-models/speech-commands_` en LearningML V2.**

El resultado ha sido que el reconocimiento de sonidos ha mejorado sustancialmente respecto a la primera solución de Álvaro. Por ello, **aprovecho este post para anunciar que en unos días podréis disfrutar del reconocimiento de sonidos con LearningML V2.**

**¡Estad atentos!**
