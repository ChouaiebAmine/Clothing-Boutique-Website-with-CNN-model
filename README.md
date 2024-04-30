<span style="font-size:20px;">

<div style="font-size:25px;" align="center"> 

# Clothing Web App with CNN 
</div>


<div style="font-size:25px;">

## Description

 </div>


 ### This projects consists of a clothing web app containing some clothing products and a field where you can send a picture of a clothing piece (let's say for example a T-shirt) then : 

 1- It gets sent to the backend where it is processed and passed to the CNN
<br> <br>
 2- The CNN predicts what the class of the image is from the 10 classes it is trained on 
<br> <br>
 3- The server sends back recommendations of the predicted class (since you sent a shirt you will recieve T-shirt recommendations)
 <br>

##

# Deep Learning part
<img src="https://skillicons.dev/icons?i=py" height="40" alt="python logo"  />
<img width="10" />
<img src="https://skillicons.dev/icons?i=tensorflow" height="40" alt="tensorflow logo"  />
<img width="10" />

The model is a CNN made with Python and Tensorflow which was trained on the MNIST fashion dataset, you can get the data either by typing this line of Python code:
<br>

```
training, testing = tf.keras.datasets.fashion_mnist.load_data()
```
Or downloading it here:
<br>
https://www.kaggle.com/datasets/zalando-research/fashionmnist
<br>
<br>
The dataset contains 70000 pictures of clothing pieces and their classes are:

#### 0 => T-shirt/top
#### 1 => Trouser
#### 2 => Pullover
#### 3 => Dress
#### 4 => Coat
#### 5 => Sandal
#### 6 => Shirt
#### 7 => Sneaker
#### 8 => Bag
#### 9 => Ankle boot
##
#Web app part
<img src="https://skillicons.dev/icons?i=flask" height="40" alt="flask logo"  />
<img width="10" />
<img src="https://skillicons.dev/icons?i=react" height="40" alt="react logo"  />
<img width="10" />

It is made using Flask as the server and React JS as the Front end such that the server sends the client some recommendations and client searches for certain items or sends the server a picture and server responds accordingly
##
# Getting Started
### Dependencies

* Should work on any OS
* Python 
* Flask
* TensorFlow
* React JS

### Installing


* How/where to download

```
git clone https://github.com/ChouaiebAmine/Clothing-Boutique-Website-with-CNN-model
```
### or
* Download from the green 'code' section all the way above
##
# Execution
### Open the project directory and open 2 terminals 
* 1 to run the server in the flask directory
```
cd flask-app
python app.py
```
* 1 in the react directory to run the front end
```
cd react-app
npm start
```
- The front end should open a tab in your default browser by itself
##
## Help
If you encounter a problem with  react-scripts use this command.
```
npm install react-scripts
```
##
## Authors
Contributors names and Github links

[@MohamedAmineChouaieb](https://github.com/ChouaiebAmine)

[@Amen-Haj-Brahim](https://github.com/Amen-Haj-Brahim)
</span>
##