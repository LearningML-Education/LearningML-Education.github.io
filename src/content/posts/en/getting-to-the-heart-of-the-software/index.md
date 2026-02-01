---
title: "Getting to the heart of the software"
date: 2025-02-24
categories: 
  - "blog-en"
  - "develop"
  - "education"
  - "information"
translation: llegar-a-las-entranas-del-software
---

Sometimes, when we implement a software solution, no matter how much we study its documentation, we do not find the answer to some problem that arises and prevents us from completing our objective. Normally, **by reading it more carefully and patiently, it is usually solved.** But **this does not always happen,** no matter how hard we try, **because our problem is simply not documented or the documentation is outdated.**

#### What to do in such cases?

If the technology we are using is proprietary, we can only pray to all the gods we know so that the technical service knows the problem and enlightens us. Unfortunately, it is very common for the answer to be: ‘_read this or that part of the manual_’, entering a perverse vicious circle with no solution.

###### And what if the technology we use is open?

Even if it costs us waking hours, we can always go into the code and study it to find out how to solve our problem. Yes, it can be hard work, but sometimes it's easier than you might think. But, **be that as it may, the solution is in the code. And if it isn't, we can always modify it so that it is.** We can even notify the developer of the change we have made and ask them to integrate it in the next version (this is called a Pull Request or Merge Request).

#### Using open source solutions, it pays off

This is not just theory. It is something that happens frequently.

Recently, while working on the development of the new version of [Exelearning](http://exelearning.net) (still under development), it happened to us. To implement real-time editing of shared resources we have chosen to use an open SSE (Server-Sent Events) solution called [mercure](http://mercure.rocks).

For reasons that are not relevant, we need the application to be behind an nginx reverse proxy in some deployments. The issue is that when we implemented this configuration, the events sent by the mercure server stopped working, **and the documentation didn't explain why!**

**The solution is to get into the guts of the code!** One of the team members rolled up his sleeves and, by studying the code, managed to find the problem. **Challenge overcome thanks to the mercure licence and, of course, to the skill of our colleague.**
