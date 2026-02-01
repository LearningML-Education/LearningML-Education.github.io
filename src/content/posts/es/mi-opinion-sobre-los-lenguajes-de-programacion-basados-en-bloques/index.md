---
title: "Mi opinión sobre los lenguajes de programación basados en bloques"
date: 2020-12-14
categories: 
  - "blog"
  - "desarrollo"
  - "inteligencia-artificial"
tags: 
  - "inteligencia-artificial"
  - "learningml-es"
  - "pensamiento-computacional"
translation: my-opinion-on-block-based-programming-languages
---

**Mi opinión sobre los lenguajes de programación basados en bloques ha cambiado progresivamente.** Al principio no me parecían nada serios y tenía poca confianza en ellos, pero a medida que los he ido usando he cambiado de parecer.

Cuando comprobé que **niños de 6 a 8 años** eran **capaces de crear sencillos programas** en poco tiempo, **comprendí la potencia didáctica que tienen.** Después, **descubrí algunos videojuegos** espectaculares **desarrollados con Scratch,** como por ejemplo los que hace [https://scratch.mit.edu/users/griffpatch/](https://scratch.mit.edu/users/griffpatch/).

Pienso que, **como lenguajes para iniciarse en la programación,** **superan** con creces a **los lenguajes basados en texto.** No me imagino a un niño de 7 años (que no sea un Mozart de la programación) programar y disfrutar con el más sencillo de los lenguajes basados en texto. **Superar la barrera impuesta por la sintaxis del lenguaje** **ya les da una ventaja** considerable respecto a los lenguajes basados en texto. Además, **la representación visual bidimensional de los bloques de tipo lego**, ofrecen una potente metáfora al estudiante que, rápidamente **encaja la estructura y el flujo del programa.**

#### Lenguajes de programación basados en bloques

Sin embargo creo que **los lenguajes de programación basados en bloques presentan,** hoy por hoy, algunas **carencias** que les impiden ser utilizados de forma profesional. La primera de esas carencias es que **someterlos a control de versiones no es inmediato,** y mucho menos práctico. **En aplicaciones profesionales es imprescindible usar sistemas de control de versiones** para mantener varias ramas de desarrollo y **permitir el trabajo colaborativo,** en el que varios programadores pueden trabajar simultáneamente incluso sobre la misma parte del código. La fusión de código desde otras ramas y la resolución de conflictos que se producen en estas fusiones son tareas cotidianas en el ámbito profesional. Para ello, **es imprescindible contar con herramientas capaces de mostrar y localizar** con precisión las **diferencias entre dos versiones del mismo código.** Esto con ficheros de texto plano es inmediato, pero con bloques… no lo veo.

Otro problema que veo, en los lenguajes de programación basados en bloques, es lo que en un artículo que leí hace tiempo ([https://arxiv.org/pdf/1705.09413.pdf](https://arxiv.org/pdf/1705.09413.pdf)) llamaban "viscosidad". Se trata de que **realizar pequeños cambios en el código cuando usamos lenguajes de bloques es más costoso** que en su contrapartida de texto. De hecho, escribir una expresión algebraica en Scratch, si esta es mínimamente compleja, puede ser un trabajazo, y corregirla otro.

Otro problema (desde mi experiencia), es que me resulta **mucho más difícil analizar el código de un programa "grande" en Scratch que el de uno "grande" en,** por ejemplo, **Python.** Cuando estás analizando el funcionamiento de un código resulta vital poder hacer búsquedas (especialmente de variables) y hacer pequeños cambios para ver cómo afectan. Incluso, a veces, conviene tener abierto dos o más ficheros simultáneamente y a la vista para ir siguiendo un razonamiento. Y eso no veo cómo hacerlo con los lenguajes de bloques.

#### Lenguajes de texto

Finalmente, **cuando trabajamos con lenguajes de texto podemos estructurar el código en ficheros, siguiendo arquitecturas que son escalables** y permiten que el programa crezca y se pueda modificar sin que ello afecte al resto de la aplicación. Aquí, **las baterías de tests unitarios y de integración juegan un papel relevante.** Tampoco veo cómo hacer esto con los lenguajes de bloques actuales.

Posiblemente, la tendencia vaya por la senda del **camino mixto; plataformas como [pencilcode](https://pencilcode.net/)** pero que permitan trabajar en editores locales y guardar los ficheros en formato de texto plano, **de manera que podamos usar la fantástica ayuda que ofrecen los bloques sobre la sintaxis y la mejor visión que, en ocasiones, dan los bloques para entender alguna estructura o algoritmo.** También es importante que se pueda alternar fácilmente entre la edición de bloques y textos. Y que la traducción de texto a bloques sea tan eficaz como la de bloques a texto. Es decir, **tener la posibilidad de usar lo mejor de cada mundo.**

Todo está por ver, pero lo cierto es que, aunque el fin último de un lenguaje de programación sea dar instrucciones a una máquina, la función que tienen como medio para expresar y comunicar ideas es lo que los hace más o menos útiles, y en ese sentido **los lenguajes de programación basados en bloques tienen muchas ventajas. El futuro (próximo) nos dirá.**
