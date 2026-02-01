---
title: "Organización del código de LearningML"
date: 2021-09-06
categories: 
  - "desarrollo"
  - "inteligencia-artificial"
tags: 
  - "inteligencia-artificial"
  - "learningml-es"
  - "pensamiento-computacional"
---

Con esta entrada inicio una serie dedicada al **desarrollo de LearningML.** La intención es revelar, y a la vez documentar, cómo se ha construido la herramienta. Comienzo describiendo la organización del código a nivel de repositorios.

La plataforma LearningML **está compuesta por 7 proyectos de código,** cada uno **organizado bajo control de versiones** en sus respectivos repositorios de **Gitlab.**

#### Proyectos de código

| **URL del proyecto en gitlab** | **Descripción** |
| --- | --- |
| [https://gitlab.com/learningml/learningml-editor](https://gitlab.com/learningml/learningml-editor) | El **editor** de LearningML. Es donde **se crean los modelos** **de Machine Learning y se evalúan.** Desde esta misma aplicación se puede acceder a nuestro clon de Scratch para desarrollar aplicaciones que usan el modelo. Para que nos entendamos es [esta aplicación](https://learningml.org/editor/).      El lenguaje utilizado es Typescript y el _framework_ es Angular. |
| [https://gitlab.com/learningml/lml-scratch-gui](https://gitlab.com/learningml/lml-scratch-gui) | Es la interfaz gráfica de Scratch, modificada para LearningML.      El lenguaje utilizado es Javascript y el _framework_ React. |
| [https://gitlab.com/learningml/lml-scratch-vm](https://gitlab.com/learningml/lml-scratch-vm) | Es la **máquina virtual** de Scratch, modificada para soportar los modelos de LearningML. La máquina virtual **es el corazón de Scratch,** en ella se definen todos los bloques con las instrucciones del lenguaje, incluidos los bloques de LearningML.      El lenguaje utilizado es Javascript y el _framework_ React |
| [https://gitlab.com/learningml/lml-scratch-l10n](https://gitlab.com/learningml/lml-scratch-l10n) | Este proyecto **contiene las traducciones de los bloques** de Scratch, incluido los de LearningML y los de EchidnaScratch (en una próxima entrada aclararé que es esto).      El lenguaje utilizado es Javascript y el _framework_ React. |
| [https://gitlab.com/learningml/brain-bow](https://gitlab.com/learningml/brain-bow) | Tanto este proyecto como el siguiente, contienen una serie de **funciones necesarias para la codificación de textos en vectores numéricos.**      El lenguaje utilizado es Javascript. |
| [https://gitlab.com/learningml/brain-text](https://gitlab.com/learningml/brain-text) | Idem |
| [https://gitlab.com/learningml/learningml-api](https://gitlab.com/learningml/learningml-api) | Es el _software_ que hace posible la **creación de cuentas de usuario** y el **almacenamiento** y la **compartición de proyectos** en la nube.      El lenguaje utilizado es Python y el _framework_ Django. |

#### Una breve explicación sobre los proyectos

Los proyectos **[learningml-editor](https://gitlab.com/learningml/learningml-editor) y [learningml-api](https://gitlab.com/learningml/learningml-api) son completamente originales,** mientras que los tres proyectos de Scratch: [lml-scratch-gui](https://gitlab.com/learningml/lml-scratch-gui), [lml-scratch-vm](https://gitlab.com/learningml/lml-scratch-vm) y [lml-scratch-l10n](https://gitlab.com/learningml/lml-scratch-l10n) son modificaciones realizadas sobre los proyectos originales [scratch-gui](https://github.com/LLK/scratch-gui), [scratch-vm](https://github.com/LLK/scratch-vm) y [scratch-l10n](https://github.com/LLK/scratch-l10n) respectivamente.

En una próxima entrada sobre el desarrollo de LearningML explicaré cómo se mantienen sincronizados las últimas versiones del Scratch original con las modificaciones realizadas para LearningML.

Por último, el código de [brain-text](https://gitlab.com/learningml/brain-text) y [brain-bow](https://gitlab.com/learningml/brain-bow) es un batiburrillo de funciones que pillé de acá y allá por la red, especialmente de Stackoverflow. He de confesar que, estos dos últimos proyectos, requieren una reorganización profunda, pues muchas de sus funciones no se utilizan en el código actual de [learningml-editor](https://gitlab.com/learningml/learningml-editor).

#### Organización de las ramas del proyecto learningml-editor

**En el proyecto learningml-editor se mantienen dos ramas: _main_ y _develop_. La primera** es la que contiene el **código estable** que se encuentra desplegado en [https://learningml.org/editor](https://learningml.org/editor), mientras que **la segunda** contiene el **código** que formará parte de la **siguiente _release_.**

Cuando se pretende desarrollar alguna nueva funcionalidad o corregir un error, el desarrollador que se encargue de dicha tarea debe hacer un _fork_ del proyecto y crear una rama con el nombre de la funcionalidad en su copia local. Una vez que termina, la tarea hace un _push request_ sobre la rama _develop_ del repositorio original y, si todo funciona correctamente, se fusionan los cambios con la rama _develop_ y más tarde con la _main_, con lo que los cambios estarían listos en la próxima _release_.

Todo esto está explicado con más detalle en el archivo **[CONTRIBUTING.md](https://gitlab.com/learningml/learningml-editor/-/blob/master/CONTRIBUTING.md).**

#### Organización de las ramas de los proyectos lml-scratch

**En los proyectos [lml-scratch-gui](https://gitlab.com/learningml/lml-scratch-gui) y [lml-scratch-vm](https://gitlab.com/learningml/lml-scratch-vm) se mantienen dos ramas: _main_ y _echidna_. La primera** es la que contiene el **código estable** que se encuentra desplegado **en [https://learningml.org/scratch](https://learningml.org/scratch)** mientras que **la segunda** es la que contiene el código estable desplegado **en [https://scratch.echidna.es/](https://scratch.echidna.es/).** **Este último,** es una modificación de Scratch que, además de incorporar los bloques de LearningML, **permite programar las placas [Echidna](https://echidna.es/).**

En los proyectos de Scratch se esperan menos contribuciones externas, por eso no se ha creado una rama _develop_ en el repositorio. No obstante, si las circunstancias lo exigen, se hará.

#### Sobre las licencias

Las aplicaciones de factura propia: **[learningml-editor](https://gitlab.com/learningml/learningml-editor) y [learningml-api](https://gitlab.com/learningml/learningml-api), las distribuí con una licencia libre denominada [GNU Affero GPL](https://www.gnu.org/licenses/agpl-3.0.en.html).** Esta licencia se ha diseñado, específicamente, para asegurar la cooperación con la comunidad, en el caso de _software_ que corra en servidores de red. Lo esencial, además de mantener la **atribución del autor** en caso de modificaciones, es que **si se despliega la aplicación modificada en un servidor, el nuevo código debe llevar la misma licencia y distribuirse libremente.**

La razón fundamental para escoger este tipo de licencia, es **hacer posible la colaboración con otros desarrolladores, empresas o instituciones,** para mejorar y evolucionar el proyecto mediante la filosofía del **_software_ libre.** En el fichero [CONTRIBUTING.md](https://gitlab.com/learningml/learningml-editor/-/blob/master/CONTRIBUTING.md) del proyecto puedes leer las **normas para contribuir activamente al desarrollo de LearningML.**

Por otro lado, **los proyecto de lml-scratch llevan una licencia MIT. Esta es menos restrictiva, y prácticamente no obliga a nada.** No obstante, preferí publicar el código que he modificado con la misma licencia. Es muy importante darse cuenta de la enorme contribución al desarrollo de _software_ que suponen este tipo de licencias. Gracias a ellas pude partir de una plataforma de programación por bloques como Scratch, bien conocida y estable, y adaptarla para incorporar bloques compatibles con los modelos construidos con LearningML.

Y eso es todo en esta primera entrada, una panorámica general de cómo está organizado el código de la plataforma LearningML.

#### En próximas entradas...

En próximas entradas iré explicando otros aspectos como:

- Cómo se sincroniza la versión oficial de Scratch con la modificación de LearningML y Echidna.

- La arquitectura del proyecto Learningml-editor.

- La arquitectura de los proyectos lml-scratch.

- Las nuevas funcionalidades que se van añadiendo al proyecto.

- Y todas las cosas que se me vayan ocurriendo sobre el desarrollo de la plataforma.
