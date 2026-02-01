---
title: "HuggingChat: like chatGPT, but with open models (taking care of your privacy)"
date: 2025-03-12
categories: 
  - "artificial-intelligence"
  - "blog-en"
  - "develop"
  - "information"
---

We all use [ChatGPT](http://chatgpt.com), although **we don't know what OpenAI does with our conversations.** **Nor do we know what the architecture of the neural network it uses is,** beyond the fact that it is based on the revolutionary transformers. And, of course, **we do not have access to the set of texts on which it has been trained.** The same is true of other conversation assistants such as [Claude](http://claude.ai), [Perplexity](http://perplexity.ai) or [Gemini](http://gemini.google.com), less popular options than [ChatGPT](http://chatgpt.com) but quite well known. **This opacity on the part of the big tech companies is the price** (probably high, although we don't realise it) **that we pay for using their solutions.**

#### The great news is…

**There are less obscure alternatives to conversational assistants.** If you want your conversations to stay on your computer, you can use [LMStudio](http://lmstudio.ai). An application **that you install on your computer** and that you can connect to a multitude of LLMs (Large Language Models) that you can also install on your machine.

###### LLMs are the key piece of any Generative AI solution

**It is the component that ‘understands’ what you want and creates the answer.** But they cannot be used in isolation, you need software that acts as a frontend, that is, as an interlocutor between the human and the LLM. This software is [LMStudio](http://lmstudio.ai).

**The LLMs you can use with [LMStudio](http://lmstudio.ai) are much more transparent.**

- You can download them to your computer.

- Moreover, their developers usually share the architecture and training data.

**The problem is that to use them you need a very powerful and expensive computer with a GPU** (the specialised CPUs for working with large models) and a lot of memory. Unfortunately, most of us mortals **don't have such a machine!**

#### We are in luck…

**The solution is called [Hugging Face](http://huggingface.co).** It is a platform that:

- has a multitude of **open source and publicly available models and datasets**.

- seeks to **democratize access to natural language technology**

- and enable developers and data scientists to **create more advanced and accurate language models and applications.**

Although it is not a platform designed for the common user, it has developed a conversational assistant in the style of [ChatGPT](http://chatgpt.com), with the advantage **that the LLMs it uses are open source** and, in its privacy policy, it states that it does not store personally identifiable information about the user:

- does not store personally identifiable user information,

- does not share chat data with third parties

- and only uses the conversation data to improve the language model and not for commercial purposes.

#### All this is an important difference

Which marks an important difference with [ChatGPT](http://chatgpt.com)\-type solutions.

###### And how to use it?

The same as [ChatGPT](http://chatgpt.com) but by pointing the browser to the URL https://huggingface.co/chat/. **It's that easy!**

###### Are you concerned about your privacy?

You probably prefer that the models you use are audited by a community of scientists. And that the code for those models, and the training datasets, are available to anyone who wants to study them.

Just use [Huggingchat](http://huggingface.co) instead of [ChatGPT](http://chatgpt.com) - **you no longer have to be in the hands of OpenAI (or other shady BigTechs) when you need AI to accompany you!**
