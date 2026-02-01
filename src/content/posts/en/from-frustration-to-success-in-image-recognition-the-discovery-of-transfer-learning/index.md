---
title: "From Frustration to Success in image recognition: the discovery of ‘Transfer Learning’"
date: 2024-11-27
categories: 
  - "blog-en"
  - "develop"
  - "education"
  - "information"
translation: de-la-frustracion-al-exito-en-el-reconocimiento-de-imagenes-el-descubrimiento-de-transfer-learning
---

While working on **LearningML image recognition I discovered ‘** _**transfer learning’**_**,** one of the techniques that I have found most useful and powerful in Machine Learning.

![](images/27.2.Aprendizaje-de-Transfer-learning-1-1024x585.webp)

#### The research begins and the potholes appear

The first thing I tried was to reduce the size of the images, transform them into greyscale and represent them as vectors of dimension width x height. I presented these vectors to a neural network that had as input a layer of the same dimension as the vectors, several hidden layers and an output layer with a number of neurons equal to the number of classes to be recognised. The result was disastrous! The classification was poor and most of the time wrong. It was one of the many **frustrating moments** I had during the development of LearningML.

#### Convolutional neural networks?!?!?!?!?!

**I continued researching and learned** that **the** _**Feed Foward**_ **architecture was not the most suitable** for dealing with images. The networks that were having the most success in handling images were the so-called **convolutional** networks. But even with this type of networks the classification, although improving, was still very poor. The reason was clear, **the training data sets were not large enough to successfully train any kind of neural network.**

It seemed that my problem was unsolvable. The datasets that students would be able to build when using **LearningML** would be no more than a few dozen images.

However, I knew that _**The Teachable Machine**_ was capable of very accurate classifications even with just a few images.

##### How did he do it?

**By researching!**

And finally the solution came: it was called _‘**Transfer Learning**_’**.** And what does it consist of? Reusing a pre-trained model in a specific task to apply it to a new task, saving time and resources. In the case of image classification, I used **MobileNet,** **an open source model pre-trained on a large number of categories, as a basis for recognising new objects with little data.**

#### Classify images with MobileNet:

- **Load the pre-trained model.** MobileNet is used without its final output layer, keeping only the layers that extract features. The penultimate layer has 1024 neurons and can be used as a representation of the image that is presented as input. That is, we use MobileNet without its final layer as an image encoder. What is relevant is that, encoding two similar images results in close vectors, whereas, if the images differ a lot, the distance between their encoded vectors increases.

- **Use a simple classifier, such as a feed-forward neural network or a KNN.** This model, which is the one we will train, will have it very easy, as the MobileNet-based encoder has already taken care of placing the images of each class in separate places in space.with Transfer Learning we take advantage of the effort previously invested in training MobileNet with approximately 1,200,000 images organised in about 1,000 classes. The model has already learned features like edges and textures and we adapt them to the new classification task, obtaining good results with less data and training.

> And that's how I solved the **image recognition in LearningML** and that's why this kind of model works so well, because **we are riding on the shoulders of giants**.
