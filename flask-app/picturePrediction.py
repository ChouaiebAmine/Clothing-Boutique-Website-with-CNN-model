import tensorflow as tf
from keras.models import load_model
from PIL import Image
import numpy as np
import os
def predictUserImage(image,classes):
    model=load_model("../cnn_clothing_model/clothing_cnn.h5")
    
    cwd=os.getcwd()
    img=Image.open(cwd+'/'+image).convert('L')
    img=img.resize((28,28))
    img=np.asarray(img)
    img=img.reshape(*(28,28,-1))
    
    prediction = model.predict(np.expand_dims(img, axis=0))
    argclass = np.argmax(prediction, axis=1)
    print(classes[argclass[0]])
    return argclass[0]