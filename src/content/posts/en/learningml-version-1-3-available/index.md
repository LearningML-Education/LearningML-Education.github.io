---
title: "LearningML version 1.3 available"
date: 2021-11-21
categories: 
  - "artificial-intelligence"
  - "develop"
tags: 
  - "artificial-intelligence"
  - "computational-thinking"
  - "learningml-en"
translation: disponible-la-version-1-3-de-learningml
---

_Tranlations made by googe translator_

From today, you can enjoy the **New Version (1.3) of LearningML.** I added new **functionalities, aimed at exploring Machine Learning algorithms to understand them better.** Until now, they were a black box over which the user had no control.

Among them is the **incorporation of numerical data recognition,** i.e., sets of numbers organized tabularly (as in spreadsheets). Thus, **we will be able to create Machine Learning models from data sets (datasets)**. Obtained by reading experiments with sensors or from known datasets and openly available on the network. Such as: the [iris dataset](http://es.wikipedia.org/wiki/Conjunto_de_datos_flor_iris) or the [boston house dataset](http://kaggle.com/c/boston-housing).

You can access this new version from the **“Version 1.3 (beta)”** button on the home page, which links to the following url: [https://beta.learningml.org/editor](https://beta.learningml.org/editor).

#### Some of the new features introduced:

At the **code level**

- Separation of feature extraction and ML algorithm.

- Update lml-editor to Angular 12.

- Reorganization of the lml-scratch repos to sync with the develop branch of scratch.

- Implementation of a message protocol to request ML services from lml-scratch to lml-editor (lml-message-protocol).

- Simplification of lml-scratch code thanks to lml-message-protocol.

At the level of **functionalities**:

- **Advanced mode**
    - Selection of different Machine Learning algorithms. For now, the algorithms are offered: KNN and neural network.
    
    - Adjustment of the typical training parameters of each algorithm.
    
    - Definition (optional) of a percentage of training data for the calculation of a confusion matrix with which to evaluate the precision of the constructed model.
    
    - Visualization of a confusion matrix to evaluate the built model.
    
    - Visualization of the learning process for the neural network.

- **And, recognition of numerical data sets.**
    - Visualization of algorithm decision limits for two-dimensional numerical models.

Gradually, I will make new entries and practical activities to explain in more detail these **new features**. They are designed **to make the operation of Machine Learning algorithms more intuitive.** For now, **you can see in the [L](https://learningml.org/lml-doc/)**[**earningML manual**](https://learningml.org/lml-doc/) how they are used, although there is no pedagogical explanation.

It is important to keep in mind that this is a beta version, it may still have some bugs. **If you find any error, send me a message through the contact form of this website.** When this version is sufficiently debugged, it will become the stable version! and I will start working on the new beta.

**And that's all! I hope you enjoy the new features of this version.**
