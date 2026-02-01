---
title: "Generación de texto con n-gramas"
date: 2024-12-18
categories: 
  - "blog"
  - "desarrollo"
  - "informacion-es"
  - "inteligencia-artificial"
translation: text-generation-with-n-grams
---

Recientemente he descubierto una idea fascinante: **la generación de texto** (o de cualquier otra cosa que ocurra en secuencia, como música o trazos de dibujo) **mediante modelos estadísticos basados en _n-gramas_**. Jens Mönig, líder del proyecto [Snap!](https://snap.berkeley.edu/), propone una estrategia reveladora para explicar los fundamentos de la IA Generativa utilizando este tipo de modelos en Snap!.

#### Ventajas

La gran ventaja de estos modelos es **su simplicidad y facilidad de comprensión** en comparación con los avanzados _transformers_ que sustentan los modernos modelos de lenguaje, como GPT. Esto los convierte en una herramienta ideal para enseñar a los estudiantes el funcionamiento básico de la IA Generativa.

Jens Mönig se inspira, a su vez, en el trabajo de Michael Hielscher, quien ha desarrollado la herramienta [SoekiaGPT](https://www.soekia.ch/GPT/), una solución que complementa este enfoque educativo.

##### El procedimiento se puede resumir en los siguientes pasos:

1. **Preparación de los Datos.** Primero, se necesita una colección de textos que servirá como base para el modelo, como por ejemplo cuentos de hadas. Estos textos se dividen en unidades más pequeñas, como palabras o letras. Este proceso se denomina _tokenización_. Es importante destacar que **el contenido de los datos no es tan importante como el orden en que aparecen las unidades.**

3. **Creación del Modelo de Lenguaje (N-gramas).** Se construye un modelo de lenguaje basado en n-gramas. Un n-grama es una secuencia de n unidades (palabras, letras, etc.). El modelo registra la frecuencia con la que aparecen diferentes n-gramas en los datos. Por ejemplo, un modelo de 3-gramas (trigrama) registraría la frecuencia con la que aparece la secuencia "Erase una vez" en los cuentos de hadas. Este modelo **sirve como una base de datos que el generador de texto utilizará para predecir la siguiente unidad en una secuencia.**

5. **Generación de Texto.** Para generar texto, el modelo utiliza una cadena de Markov. Este proceso implica tomar las últimas n unidades del texto generado y buscar en el modelo los n-gramas que comienzan con esas unidades. El modelo selecciona aleatoriamente uno de los n-gramas coincidentes y agrega la última unidad del n-grama al texto generado. Este proceso se repite hasta que se genera un texto de la longitud deseada. **La aleatoriedad en la selección del siguiente n-grama introduce un elemento de "creatividad" en el texto generado.**

7. **Ajustes y Parámetros.** Se pueden ajustar varios parámetros para controlar la generación de texto. Un parámetro importante es la "temperatura," que controla el grado de aleatoriedad en la selección del siguiente n-grama. **Una temperatura alta genera textos más "creativos", mientras que una temperatura baja produce textos más predecibles.** Además, se pueden incorporar técnicas adicionales para mejorar la calidad del texto generado, como la inclusión de sinónimos o la consideración de la distancia de edición entre palabras.

9. **Interacción con el Usuario.** El generador de texto **se puede integrar en una interfaz interactiva** que permite al usuario proporcionar las primeras unidades de una secuencia y observar cómo el modelo genera el resto.

#### ¿De qué calidad estamos hablando?

Es importante tener en cuenta que **la calidad del texto generado depende en gran medida de la calidad y cantidad de los datos utilizados para entrenar el modelo.** También es importante comprender las limitaciones de los modelos generativos de lenguaje. Estos modelos **son capaces de generar textos que** suenan plausibles, pero **no necesariamente son precisos o reflejan la realidad.** Es fundamental ser conscientes de que estos modelos **se basan en estadísticas y no en un conocimiento real del mundo.**

#### Principio pedagógico construccionista

Esta brillante idea encaja perfectamente con los principios pedagógicos construccionistas que definen la herramienta **LearningML**. Además, **permite seguir su misma secuencia lógica de uso: entrenamiento, aprendizaje, evaluación y programación** de una aplicación informática. Esto facilita su integración natural en la interfaz de usuario.

Por este motivo, **queremos anunciarles**, estimados usuarios de LearningML, **que estamos trabajando para implementar esta propuesta.** Aunque no podemos precisar aún una fecha, confiamos en que sea pronto. **Con esta mejora, estaremos en condiciones de enseñar los fundamentos de la IA Generativa a través de LearningML.**

¡Estamos emocionados por lo que está por venir!
