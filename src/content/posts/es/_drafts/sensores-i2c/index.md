---
title: "Sensores I2C"
date: 2025-01-27
categories: 
  - "blog"
  - "educacion"
  - "informacion-es"
  - "inteligencia-artificial"
draft: true
---

**El equipo de [Echidna Educación](https://echidna.es/) está rediseñando la placa** para sustituir el chip acelerómetro por otro basado en una tecnología conocida como I2C (_Inter-Integrated Circuit_).

Se trata de un **protocolo de comunicación serie síncrono,** diseñado para conectar múltiples dispositivos en un mismo bus, como microcontroladores, sensores, memorias y periféricos. **Utiliza dos líneas: SDA (_Serial Data_) para la transmisión de datos y SCL (_Serial Clock_) para la sincronización.**

**Funciona con un modelo maestro-esclavo**, donde el maestro controla la comunicación, enviando señales de reloj y direccionando a los esclavos mediante direcciones únicas. **Es eficiente para distancias cortas y bajas velocidades, y su simplicidad lo hace ideal para aplicaciones embebidas con pocos pines disponibles.**

Este cambio tendría las siguientes **ventajas**:

- **reducción de los costes de fabricación** al ser el chip I2C más barato, al ser un acelerómetro de 3 ejes además de medir la aceleración en las direcciones x e y (que permite calcular la inclinación de la placa respecto del suelo),

- **podemos saber la aceleración en la dirección z,** con lo que podremos detectar, por ejemplo caídas de la placa,

- ofrece una **nueva linea de diseño para incorporar nuevos sensores I2C** ocupando solo dos pines de la placa.

Estoy trabajando en la posibilidad de **incorporar este tipo de sensores en EchidnaML,** el _software_ basado en Scratch y LearningML con el que se pueden programar las placas Echidna. Gracias a que el protocolo Firmata también contempla la comunicación con dispositivos I2C esto es posible.

**¡Y los resultado están siendo muy esperanzadores!**
