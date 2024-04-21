import matplotlib.pyplot as plt
import random
import numpy as np
import pandas as pd
def get_clothing_piece():
    df=pd.read_csv("fashion-mnist_train.csv").values
    i = random.randint(1,60000) # select any random index from 1 to 60,000
    return df[i,1:].reshape((28,28)) # reshape and return the image