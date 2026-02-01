---
title: "The learningml story"
date: 2020-05-25
categories: 
  - "blog-en"
  - "information"
tags: 
  - "artificial-intelligence"
  - "computational-thinking"
  - "learningml-en"
translation: la-historia-de-learningml
---

**Note**: _this is an automatic translation of this [post](https://web.learningml.org/la-historia-de-learningml/) performed by [https://www.deepl.com](https://www.deepl.com)_

In December 2018, **[Jesús Moreno León](http://jemole.me),** then head of the "Classroom Experimentation" department at the INTEF, proposed me to develop a [**teaching resource**](http://code.intef.es/inteligencia-artificial-en-el-aula-con-scratch-3-0/) **on Artificial Intelligence**. **Based on** a tool I had discovered: **[Machine Learning for Kids](http://machinelearningforkids.co.uk)** (ML4K) by Dave Lane. An IBM worker who has developed this tool within the [IBM volunteer program](http://ibm.org/initiatives/ibm-volunteers). The experience was fascinating and I was excited to discover that something as complex as Machine Learning could be explained effectively in school.

I decided to explore this topic and build the **prototype** of an application similar to ML4K, but with one important condition: **that it was not necessary to create an account** to use it. It may seem silly, but it is something that makes the fluidity of the tool quite difficult in the school environment.

The first **problem** that arose was that the Machine Learning **algorithms had to be executed locally in the user's own web browser.** Using any of the AI ​​platforms offered by large companies like [IBM](http://ibm.com/es-es/cloud), or more modest ones like [ClarifAI](http://clarifai.com), necessarily involves creating an account.

#### Will we be able to run “heavy” machine learning algorithms in the web browser?

I investigated that possibility, and… The result was encouraging! I discovered the simple **[Brain.js](http://brain.js.org/#/) library,** with which I made the first prototype **for text recognition.** And the very powerful, professional and not so simple **[Tensorflow.js](http://tensorflow.org/js) library,** with which I implemented **image recognition.** **The conclusion was clear: it is possible to run Machine Learning algorithms without needing to rely on third-party services.** Running algorithms in the web browser works. Even more so, **taking into account** that the tool to be developed has a **pedagogical purpose** and we are not going to use massive amounts of data as can occur in specific Machine Learning applications.

Shortly after, with the help of Jesús Moreno, I met **[Gregorio Robles](http://gsyc.urjc.es/~grex/)** and [**Marcos Román**,](http://portal.uned.es/portal/page?_pageid=93,25355626&_dad=portal&_schema=PORTAL) two researchers who, together with the first, have been making interesting **contributions to the world of Computing Education Research for several years.** They saw, on the one hand, the possibility of building a useful **tool to work on computational thinking.** And on the other, the seed to carry out a thesis in this field. They encouraged me to start this intense but rewarding task. And, taking advantage of the opportunity, I launched myself (again) into the world of research. And I say "again", because more than 20 years ago I abandoned it due to circumstances that are irrelevant now.

#### First version of LearningML

A little more than a year later, we have a **first operational version of LearningML with which you can build Machine Learning models and program applications with Scratch capable of recognizing texts and images.**

Now it's time to show it to teachers, students and researchers so that they can test and see if what we are doing is a good **resource to promote computational thinking and serves to learn content about artificial intelligence in a practical way.** And with the hope that this is the case, we will continue working to improve LearningML.
