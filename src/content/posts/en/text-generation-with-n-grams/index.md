---
title: "Text generation with n-grams"
date: 2024-12-18
categories: 
  - "artificial-intelligence"
  - "blog-en"
  - "develop"
  - "information"
---

I have recently discovered a fascinating idea: **the generation of text** (or anything else that happens in sequence, such as music or drawing strokes) **using statistical models based on n-grams.** Jens Mönig, leader of the [Snap](http://snap.berkeley.edu)! project, proposes a revealing strategy to explain the basics of Generative AI using such models in Snap!

#### Advantages

The great advantage of these models is **their simplicity and ease of understanding** compared to the advanced transformers that underpin modern language models, such as GPT. This makes them an ideal tool for teaching students the basic workings of Generative AI.

Jens Mönig is in turn inspired by the work of Michael Hielscher, who has developed the [SoekiaGPT](http://soekia.ch/GPT/) tool, a solution that complements this educational approach.

##### The procedure can be summarised in the following steps:

###### 1\. **Data Preparation**

First, a collection of texts is needed that will serve as the basis for the model, such as fairy tales. These texts are divided into smaller units, such as words or letters. This process is called tokenisation. It is important to note that **the content of the data is not as important as the order in which the units appear.**

###### **2**. **Creation of the Language Model (N-grams)**

A language model is constructed based on n-grams. An n-gram is a sequence of n units (words, letters, etc.). The model records the frequency with which different n-grams appear in the data. For example, a 3-gram (trigram) model would record the frequency with which the sequence ‘Once upon a time’ appears in fairy tales. This model **serves as a database that the text generator will use to predict the next unit in a sequence.**

###### 3\. **Text Generation**

To generate text, the model uses a Markov chain. This process involves taking the last n units of the generated text and searching the model for n-grams starting with those units. The model randomly selects one of the matching n-grams and adds the last unit of the n-gram to the generated text. This process is repeated until a text of the desired length is generated. **The randomness in the selection of the next n-gram introduces an element of ‘creativity’ into the generated text.**

###### 4\. **Settings and Parameters**

Several parameters can be set to control text generation. One important parameter is ‘temperature,’ which controls the degree of randomness in the selection of the next n-gram. **A high temperature generates more ‘creative’ text, while a low temperature produces more predictable text.** In addition, additional techniques can be incorporated to improve the quality of the generated text, such as the inclusion of synonyms or the consideration of the editing distance between words.

###### 5\. **User Interaction**

The text generator **can be integrated into an interactive interface** that allows the user to provide the first units of a sequence and observe how the model generates the rest.

#### What quality are we talking about?

It is important to note that **the quality of the generated text is highly dependent on the quality and quantity of the data used to train the model. It is also important to understand the limitations of generative language models.** These models **are able to generate plausible sounding texts,** but they are **not necessarily accurate or reflective of reality.** It is essential to be aware that these models **are based on statistics and not on real knowledge of the world.**

#### Constructionist pedagogical principle

This brilliant idea fits perfectly with the constructivist pedagogical principles that define the tool LearningML. Moreover, **it allows to follow the same logical sequence of use: training, learning, evaluation and programming** of a computer application. This facilitates its natural integration into the user interface.

##### The future of LearningML

For this reason, **we would like to announce to you,** dear users of LearningML, **that we are working to implement this proposal.** Although we cannot yet specify a date, we hope it will be soon. **With this enhancement, we will be able to teach the fundamentals of Generative AI through LearningML.**

We are excited about what is to come!
