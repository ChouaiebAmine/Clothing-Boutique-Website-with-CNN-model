import matplotlib.pyplot as plt
import random
import numpy as np
import pandas as pd
from PIL import Image
def get_clothing_piece():
    df=pd.read_csv("fashion-mnist_train.csv").values
    i = random.randint(1,60000) # select any random index from 1 to 60,000
    im=df[i,1:].reshape((28,28))
    plt.imshow(im)
    plt.show()
    im = Image.fromarray(im, "RGB")
    im.save('static/images/1.jpg') # reshape and return the image
get_clothing_piece()