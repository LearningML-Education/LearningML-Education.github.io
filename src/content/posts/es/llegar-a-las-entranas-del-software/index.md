---
title: "Llegar a las entrañas del software"
date: 2025-02-24
categories: 
  - "blog"
  - "desarrollo"
  - "educacion"
  - "informacion-es"
translation: getting-to-the-heart-of-the-software
---

A veces, cuando implantamos una solución _software_, por más que estudiamos su documentación, no encontramos la respuesta a algún problema que nos surge y que nos impide concluir nuestro objetivo. Normalmente, **leyéndola con más atención y paciencia se suele resolver.** Pero **no siempre esto ocurre,** por mucho empeño que pongamos, **ya que sencillamente nuestro problema no está documentado o la documentación está desactualizada.**

#### ¿Qué hacer en esos casos?

Si la tecnología que estamos usando es propietaria, solo nos queda rezar a todos los dioses que conozcamos para que el servicio técnico conozca el problema y nos ilumine. Desgraciadamente, es muy habitual que la respuesta sea: _"lee esta o aquella parte del manual"_, entrando en un perverso círculo vicioso sin solución.

###### Y, ¿si la tecnología que usamos es abierta?

Aunque ello nos cueste horas de vigilia, siempre podemos entrar en el código y estudiarlo para conocer cómo resolver nuestro problema. Sí, puede ser un arduo trabajo, aunque en ocasiones es más fácil de lo que uno suponía. Pero, sea como sea, **en el código está la solución.** Y **si no lo está, siempre podemos modificarlo para que esté.** Incluso podemos avisar al desarrollador del cambio que hemos hecho y solicitar que lo integre en la próxima versión (es lo que se llama un _Pull Request_ o _Merge Request_).

#### Usar soluciones de código abierto, merece la pena

Esto que acabo de contar no es mera teoría. Es algo que sucede con frecuencia.

Recientemente, trabajando en el desarrollo de la nueva versión de [Exelearning](https://exelearning.net/) (aún en fase de desarrollo), nos ocurrió. Para implementar la edición de recursos compartidos en tiempo real hemos optado por usar una solución SSE _(Server-Sent Events)_ abierta denominada [mercure](https://mercure.rocks/).

Por razones que no vienen al caso, necesitamos que en algunos despliegues la aplicación se encuentre detrás de un _reverse proxy nginx_. La cuestión es que al implantar esta configuración, los eventos enviados por el servidor _mercure_ dejaban de funcionar. ¡**Y la documentación no aclaraba la razón!**

**¡La solución es entrar en las entrañas del código!** Uno de los compañeros del equipo se "arremangó" y, estudiando el código consiguió dar con el problema. **Reto superado gracias a la licencia de _mercure_ y, por supuesto, a la destreza de nuestro compañero.**
