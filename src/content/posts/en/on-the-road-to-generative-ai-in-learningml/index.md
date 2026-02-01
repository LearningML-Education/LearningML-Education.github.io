---
title: "On the Road to Generative AI in LearningML"
date: 2025-03-18
categories: 
  - "artificial-intelligence"
  - "blog-en"
  - "develop"
  - "education"
  - "information"
translation: en-camino-hacia-la-ia-generativa-en-learningml
---

When I started developing LearningML, **the biggest challenge was making machine learning algorithms for classification and object recognition run in the user's browser.**

The idea was to avoid using the cloud as much as possible, steering clear of AI services from big tech companies and eliminating the need for user accounts. This way, I could create **an independent tool that respects data privacy something essential in educational environments!**

#### Then Came "TensorFlow.js"…

After some research, I discovered that the necessary technology already existed: its name was [TensorFlow.js](http://tensorflow.org/js), an open-source library with all the algorithms needed for discriminative machine learning. That is, **algorithms capable of performing classification, regression, and recognition tasks.**

Now, **my goal is to expand LearningML so that users can create their own generative AI models.** The idea remains the same: students can gradually grasp modern AI mechanisms through hands-on activities. **By actively building their own models and programming applications, they deepen their understanding.**

#### The "Transformer" Problem

The challenge is that the most powerful generative AI algorithms rely on a "transformer" neural network architecture. **It relies on a groundbreaking concept known as the self-attention mechanism, introduced in the 2017 paper _"[Attention is All You Need.](http://arxiv.org/abs/1706.03762)"_**

**This architecture is anything but simple,** and as far as I know, it requires a large number of neurons and, most importantly, **vast amounts of data.** At first glance, this seems like a major obstacle to adapting it for execution in a user’s browser.

#### There’s Hope

Fortunately, Hugging Face offers the JavaScript library "[Transformer.js,](http://huggingface.co/docs/transformers.js/)" which allows these algorithms to run locally in the user’s browser.

However, I still need to:

- Gain a deeper understanding of how transformers work

- Explore the fundamentals of the attention mechanism

- Experiment with the possibilities of this library

So, if there were no chance of me getting tired of this project, **I could confidently say that generative AI _will_ be available in LearningML in the future.**

It's a shame I can’t dedicate the time this deserves...

**But I can assure you that not only will this expansion become a reality, but it will happen _soon!_**
