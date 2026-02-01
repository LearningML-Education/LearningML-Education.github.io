---
title: "My opinion on block-based programming languages"
date: 2020-12-14
categories: 
  - "artificial-intelligence"
  - "blog-en"
  - "develop"
tags: 
  - "artificial-intelligence"
  - "computational-thinking"
  - "learningml-en"
---

**My opinion on block-based programming languages ​​has progressively changed.** At first they didn't seem serious to me and I had little confidence in them, but as I've been using them I've changed my mind.

When I verified that **children from 6 to 8 years old were capable of creating simple programs** in a short time, **I understood the didactic power they have.** Later, **I discovered some spectacular video games developed with Scratch,** such as those made by [https://scratch.mit.edu/users/griffpatch/.](https://scratch.mit.edu/users/griffpatch/.)

I think that, **as languages ​​to start programming, they far surpass text-based languages.** I can't imagine a 7-year-old child (who is not a Mozart of programming) programming and enjoying the simplest of text-based languages. **Overcoming the barrier imposed by the syntax of the language already gives them a considerable advantage** over text-based languages. In addition, **the two-dimensional visual representation of the Lego-type** blocks offers a powerful metaphor to the student who **quickly fits the structure and flow of the program.**

#### Block-based programming languages

However, I believe that **block-based programming languages ​​present**, today, some **shortcomings** that prevent them from being used professionally. The first of these shortcomings is that **subjecting them to version control is not immediate,** much less practical. **In professional applications it is essential to use version control systems** to maintain several development branches **and allow collaborative work,** in which several programmers can work simultaneously even on the same part of the code. Merging code from other branches and resolving conflicts that occur in these mergers are everyday tasks in the professional field. To do this, **it is essential to have tools capable of accurately displaying and locating** the **differences between two versions of the same code.** This is immediate with plain text files, but with blocks... I don't see it.

Another problem I see, in block-based programming languages, is what an article I read some time ago ([](https://arxiv.org/pdf/1705.09413.pdf)[arxiv.org/pdf/1705.09413.pdf](https://arxiv.org/pdf/1705.09413.pdf)) called “viscosity”. It is that **making small changes in the code when using block languages is more expensive** than in its text counterpart. In fact, writing an algebraic expression in Scratch, if it is minimally complex, can be a pain, and correcting it another.

Another problem (from my experience), is that I find it **much more difficult to analyze the code of a “big” program in Scratch than a “big” one in**, for example, **Python**. When you are analyzing the operation of a code it is vital to be able to do searches (especially for variables) and make small changes to see how they affect it. Even, sometimes, it is convenient to have two or more files open simultaneously and at sight to follow a reasoning. And I don't see how this can be done with block languages.

#### Text languages

Finally, **when working with text languages we can structure the code in files, following architectures that are scalable** and allow the program to grow and be modified without affecting the rest of the application. Here, **the batteries of unit and integration tests play a relevant role.** I don't see how this can be done with today's block languages either.

Possibly, the tendency is to go down the **mixed path**; **platforms like [pencilcode](http://pencilcode.net)** but allowing to work in local editors and save the files in plain text format, **so that we can use the fantastic help that blocks offer on syntax and the better vision that, sometimes, blocks give to understand some structure or algorithm.** It is also important that you can easily switch between block and text editing. And that the translation from text to blocks is as efficient as from blocks to text. In other words, **having the possibility of using the best of each world.**

Everything remains to be seen, but what is certain is that, although the ultimate purpose of a programming language is to give instructions to a machine, the function they have as a means of expressing and communicating ideas is what makes them more or less useful, and in that sense block-based **programming languages have many advantages. The (near) future will tell.**

Translated with DeepL.com (free version)
