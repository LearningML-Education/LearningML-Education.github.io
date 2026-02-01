---
title: "How LearningML code is organized"
date: 2021-09-06
categories: 
  - "artificial-intelligence"
  - "develop"
tags: 
  - "artificial-intelligence"
  - "computational-thinking"
  - "learningml-en"
---

With this post I start a series dedicated to the **development of LearningML.** The intention is to reveal, and at the same time document, how the tool has been built. I begin by describing the organization of the code at the repository level.

The LearningML platform **is composed of 7 code projects,** **each organized under version control in their respective Gitlab repositories.**

#### Code projects

| **URL del proyecto en gitlab** | **Descripción** |
| --- | --- |
| [https://gitlab.com/learningml/learningml-editor](https://gitlab.com/learningml/learningml-editor) | The LearningML **editor**. This is where the Machine Learning **models are created and evaluated.** From this same application you can access our Scratch clone to develop applications that use the model. So that we understand each other is [this application.](http://learningml.org/editor/)   The language used is Typescript and the framework is Angular. |
| [https://gitlab.com/learningml/lml-scratch-gui](https://gitlab.com/learningml/lml-scratch-gui) | It is the Scratch graphical interface, modified for LearningML.   The language used is Javascript and the React framework. |
| [https://gitlab.com/learningml/lml-scratch-vm](https://gitlab.com/learningml/lml-scratch-vm) | It is the Scratch **virtual machine**, modified to support LearningML models. The **virtual machine is the heart of Scratch,** where all the blocks are defined with the language instructions, including the LearningML blocks.   The language used is Javascript and the React framework. |
| [https://gitlab.com/learningml/lml-scratch-l10n](https://gitlab.com/learningml/lml-scratch-l10n) | This project **contains the translations of the Scratch blocks,** including those of LearningML and EchidnaScratch (in a future post I will clarify what this is).   The language used is Javascript and the React framework. |
| [https://gitlab.com/learningml/brain-bow](https://gitlab.com/learningml/brain-bow) | Both this project and the following one contain a series of **functions necessary for encoding text in numeric vectors.**   The language used is Javascript. |
| [https://gitlab.com/learningml/brain-text](https://gitlab.com/learningml/brain-text) | Idem |
| [https://gitlab.com/learningml/learningml-api](https://gitlab.com/learningml/learningml-api) | It is the software that makes possible the **creation of user accounts and the storage and sharing of projects in the cloud.**   The language used is Python and the Django framework. |

#### A brief explanation of the projects

The **[learningml-editor](http://gitlab.com/learningml/learningml-editor) and [learningml-api](http://gitlab.com/learningml/learningml-api) projects are completely original,** while the three Scratch projects: [lml-scratch-gui](http://gitlab.com/learningml/lml-scratch-gui), [lml-scratch-vm](http://gitlab.com/learningml/lml-scratch-vm) and [lml-scratch-l10n](http://gitlab.com/learningml/lml-scratch-l10n) are modifications made on the original [scratch-gui](http://github.com/LLK/scratch-gui), [scratch-vm](http://github.com/LLK/scratch-vm) and [scratch-l10n](http://github.com/LLK/scratch-l10n) projects respectively.

In a future post on LearningML development I will explain how the latest versions of the original Scratch are kept in sync with the modifications made for LearningML.

Finally, the code for [brain-text](http://gitlab.com/learningml/brain-text) and [brain-bow](http://gitlab.com/learningml/brain-bow) is a hodgepodge of functions that I picked up here and there on the net, especially from Stackoverflow. I must confess that these last two projects require a thorough reorganization, as many of their functions are not used in the current [learningml-editor](http://gitlab.com/learningml/learningml-editor\(abre en una nueva pestaña\)) code.

#### Organisation of the branches of the learningml-editor project

**In the learningml-editor project two branches are maintained: main and develop.** **The first** one contains the **stable code** that is deployed at [https://learningml.org/editor](https://learningml.org/editor), while **the second** one contains the **code** that will be part of the **next release.**

When a new feature is to be developed or a bug is to be fixed, the developer in charge of the task must fork the project and create a branch with the name of the feature in his local copy. Once finished, the task makes a push request on the develop branch of the original repository and, if everything works correctly, the changes are merged with the develop branch and later with the main branch, so the changes will be ready in the next release.

All this is explained in more detail in the **[CONTRIBUTING.md](http://gitlab.com/learningml/learningml-editor/-/blob/master/CONTRIBUTING.md)**

#### Organisation of the branches of the learningml-scratch projects

**In the [lml-scratch-gui](http://gitlab.com/learningml/lml-scratch-gui) and [lml-scratch-vm](http://gitlab.com/learningml/lml-scratch-vm\(abre en una nueva pestaña\)) projects,** **two branches are maintained: main and echidna. The first** one is the one that contains the **stable code** that is deployed **in [https://learningml.org/scratch](https://learningml.org/scratch)** while **the second** one is the one that contains the stable code deployed **in [https://scratch.echidna.es/](https://scratch.echidna.es/)**. **The latter** is a Scratch modification that, in addition to incorporating the LearningML blocks, **allows programming the [Echidna](http://echidna.es) boards.**

Less external contributions are expected in Scratch projects, that is why a develop branch has not been created in the repository. However, if circumstances require it, it will be done.

#### About licenses

The self-made applications: [**l**](http://gitlab.com/learningml/learningml-editor\(abre en una nueva pestaña\))[**earningml-editor**](http://gitlab.com/learningml/learningml-editor\(abre en una nueva pestaña\)) and [**learningml-ap**](http://gitlab.com/learningml/learningml-api)[**i**](http://gitlab.com/learningml/learningml-api), **I distributed them with a free license called [GNU Affero GPL](http://gnu.org/licenses/agpl-3.0.en.html).** This license has been specifically designed to ensure cooperation with the community, in the case of software running on network servers. The essential thing, besides maintaining the **author's attribution** in case of modifications, **is that if the modified application is deployed on a server, the new code must carry the same license and be freely distributed.**

The fundamental reason for choosing this type of license is to **make possible the collaboration with other developers, companies or institutions,** to improve and evolve the project through the **free software** philosophy. In the [CONTRIBUTING.md](http://gitlab.com/learningml/learningml-editor/-/blob/master/CONTRIBUTING.md) file of the project you can read **the rules to actively contribute to the development of LearningML.**

On the other hand, **the lml-scratch projects carry an MIT license. This is less restrictive, and practically does not bind you to anything.** Nevertheless, I preferred to publish the code I have modified under the same license. It is very important to realize the enormous contribution to software development that this kind of licenses make. Thanks to them I was able to start from a block programming platform like Scratch, well known and stable, and adapt it to incorporate blocks compatible with the models built with LearningML.

And that's all in this first entry, a general overview of how the LearningML platform code is organized.

#### In future entries…

In future posts I will explain other aspects such as:

- How the official version of Scratch is synchronized with the LearningML and Echidna modification.

- The architecture of the Learningml-editor project.

- The architecture of the lml-scratch projects.

- The new functionalities that are being added to the project.

- And all the things that come to my mind about the development of the platform.
