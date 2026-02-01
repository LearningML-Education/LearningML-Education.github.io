---
title: "HuggingChat: como chatGPT, pero con modelos abiertos (cuidando tu privacidad)"
date: 2025-03-12
categories: 
  - "blog"
  - "desarrollo"
  - "informacion-es"
  - "inteligencia-artificial"
translation: huggingchat-like-chatgpt-but-with-open-models-taking-care-of-your-privacy
---

Todos usamos [ChatGPT](http://chatgpt.com), aunque no sabemos **qué hace OpenAI con nuestras conversaciones**. Tampoco sabemos **cuál es la arquitectura de la red neuronal que utiliza,** más allá de que está basada en los revolucionarios _transformers_. Y, por supuesto **no tenemos acceso al conjunto de textos con los que se ha realizado su entrenamiento.** Lo mismo ocurre con otros asistentes de conversación como [Claude](https://claude.ai/), [Perplexity](https://www.perplexity.ai/) o [Gemini](https://gemini.google.com), opciones menos populares que [ChatGPT](https://chatgpt.com/) pero bastante conocidas. **Esta opacidad de las grandes tecnológicas es el precio** (seguramente alto, aunque no terminemos de darnos cuenta) **que pagamos por usar sus soluciones.**

#### La gran noticia, es...

**Existen alternativas menos oscuras de asistentes conversacionales.** Si quieres que tus conversaciones no salgan de tu computadora puedes usar **[LMStudio](https://lmstudio.ai/).** Una aplicación que **se instala en tu ordenador** y que puedes conectar a multitud de LLMs (_Large Language Models_) que también puedes instalar en tu máquina.

###### Los LLMs son la pieza clave de cualquier solución de IA Generativa

**Es el componente que "entiende" lo que tú quieres y confecciona la respuesta.** Pero no se pueden usar aisladamente, hace falta un _software_ que actúe de _frontend_, es decir, de interlocutor entre el humano y el LLM. Este software es [LMStudio.](http://lmstudio.ai)

**Los LLMs que puedes usar con [LMStudio](http://lmstudio.ai) son bastante más transparentes.**

- Puedes descargarlos en tu ordenador.

- Además, sus desarrolladores, suelen compartir la arquitectura y los datos de entrenamiento.

**El problema es que para usarlos necesitas un ordenador muy potente y caro,** con GPU (las CPUs especializadas para trabajar con grandes modelos) y mucha memoria. Desafortunadamente, la mayor parte de los mortales **¡no disponemos de una máquina así!**

#### Estamos de suerte...

**La solución se llama [Hugging Face](https://huggingface.co/).** Es una plataforma que:

- cuenta con multitud de **modelos y conjuntos de datos de código abierto** y disponibles públicamente

- **busca democratizar el acceso a la tecnología** de lenguaje natural

- y permitir a los desarrolladores y científicos de datos, **crear aplicaciones y modelos de lenguaje más avanzados y precisos.**

Aunque no es una plataforma pensada para el usuario común, sí que ha desarrollado un asistente conversacional al estilo de [ChatGPT](http://chatgpt.com), con la ventaja de que **los LLMs que usa son _open source_** y, en su política de privacidad afirma que:

- no almacena información personal identificable de los usuarios,

- no comparte datos de conversación con terceros

- y solo utiliza los datos de conversación para mejorar el modelo de lenguaje y no para fines comerciales.

#### Todo esto es una importante diferencia

Lo cual marca una importante diferencia con las soluciones de tipo [ChatGPT](http://chatgpt.com).

###### _¿Y como usarlo?_

Pues igual que [ChatGPT](http://chatgpt.com) pero apuntando el navegador a la URL https://huggingface.co/chat/. **¡Así de fácil!**

###### ¿Te preocupa tu privacidad?

Seguramente prefieras que los modelos que usas estén auditados por una comunidad de científicos. Y que el código de dichos modelos, y los conjunto de datos de entrenamiento estén disponibles para cualquiera que desee estudiarlo.

Solo tienes que usar [Huggingchat](http://huggingface.co) en lugar de [ChatGPT](http://chatgpt.com). **¡Ya no tienes que estar en manos de OpenAI (o de otras turbias BigTechs) cuando necesites que la IA te acompañe!**
