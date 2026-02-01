---
title: "I2C sensors"
date: 2025-01-27
categories: 
  - "artificial-intelligence"
  - "blog-en"
  - "education"
  - "information"
draft: true
---

**The [Echidna Education](http://echidna.es) team is redesigning the board** to replace the accelerometer chip with one based on a technology known as I2C (Inter-Integrated Circuit).

This is a **synchronous serial communication protocol** designed to connect multiple devices on the same bus, such as:

- microcontrollers,

- sensors,

- memories

- and peripherals

**It uses two lines: SDA (Serial Data) for data transmission and SCL (Serial Clock) for synchronisation**

**It operates on a master-slave model.** In this model, the master controls the communication, sending clock signals and addressing the slaves via unique addresses. **It is efficient for short distances and low speeds, and its simplicity makes it ideal for embedded applications with few pins available.**

This change would have the following **advantages:**

- **reduced manufacturing costs** as the I2C chip is cheaper, being a 3-axis accelerometer in addition to measuring acceleration in the x and y directions (which allows the tilt of the board relative to the ground to be calculated),

- **we can know the acceleration in the z-direction,** which allows us to detect, for example, falls of the board,

- offers a **new design line to incorporate new I2C sensors** occupying only two pins of the board.

I am working on the possibility of **incorporating this kind of sensors in EchidnaML,** the software based on Scratch and LearningML with which Echidna boards can be programmed. Thanks to the fact that the Firmata protocol also allows communication with I2C devices, this is possible.

**And the results are very encouraging!**

Translated with DeepL.com (free version)
