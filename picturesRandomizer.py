import matplotlib.pyplot as plt
import random
import numpy as np
import pandas as pd
df=pd.read_csv("fashion-mnist_train.csv").values
i = random.randint(1,60000) # select any random index from 1 to 60,000
plt.imshow( df[i,1:].reshape((28,28)) ) # reshape and plot the image

plt.imshow( df[i,1:].reshape((28,28)) , cmap = 'gray') # reshape and plot the image