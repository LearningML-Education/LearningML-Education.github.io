---
title: "Sound recognition in LearningML V2"
date: 2025-02-19
categories: 
  - "artificial-intelligence"
  - "blog-en"
  - "develop"
  - "information"
translation: reconocimiento-de-sonidos-en-learningml-v2
---

**The rewrite of LearningML,** which resulted in **version 2**, was done with **the aim of improving the structure of the code** to achieve greater modularity **to facilitate the incorporation of new features.** So, once the rewrite was finished, it was time to work on new LearningML components, and the first one was **sound recognition.** The idea is to do something similar to [Teachable Machine's](http://teachablemachine.withgoogle.com) sound recognition.

#### How did you come to this incorporation?

I started by studying [Álvaro del Hoyo Arias' Final Degree Project](https://web.learningml.org/wp-content/uploads/2023/10/Implementacion-de-funcionalidades-en-LearningML-TFG-Alvaro-del-Hoyo-Arias-1.pdf). This URJC student incorporated sound recognition in a copy of version 1.3 of LearningML. **I adapted his code** to incorporate it in the new version 2 of LearningML and, **although it worked, it did not work as well as** [**Teachable Machine.**](http://teachablemachine.withgoogle.com) Alvaro's work was based on recording audio samples and directly creating a frequency representation using FFT (Fast Fourier Transform). The latter was the input to the Machine Learning algorithm. It is well known that a frequency sample of the sound offers a simpler characterisation to analyse than the time domain sample. And indeed, Alvaro's implementation worked. But…

#### Why did [Teachable Machine](http://teachablemachine.withgoogle.com) work better?

Although **not all of Teachable Machine's code is open source, the algorithms it uses are published in a [github](http://github.com/googlecreativelab/teachablemachine-community) repository.** It was there that I discovered that [Teachable Machine](http://teachablemachine.withgoogle.com) used the **@tensorflow-models/speech-commands library** to recognise sounds. **It makes a representation of the sound called a spectrogram, which uses a series of FFTs applied to successive time segments of the signal.** The spectrogram represents how frequencies change over time, providing information about the evolution of the sound and is especially useful for analysing complex sounds, such as the human voice, birdsong or radar signals.

**The information gathered is richer than a direct FFT** since the latter does not show how frequencies vary over time. To understand the difference, we can think of the FFT as a ‘snapshot’ of the frequency content of the signal at a given instant, whereas a spectrogram is like a ‘movie’, where each frame is an FFT and shows how the signal evolves over time.

#### The solution was clear

**Use the @tensorflow-models/speech-commands library in LearningML V2.**

The result has been that sound recognition has improved substantially compared to Alvaro's first solution. Therefore, **I take this post to announce that in a few days you will be able to enjoy sound recognition with LearningML V2.**

**Stay tuned!**
