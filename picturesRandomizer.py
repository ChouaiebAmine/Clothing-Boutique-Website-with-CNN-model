import matplotlib.pyplot as plt
import random
import pandas as pd


def get_clothing_piece(x):
    df = pd.read_csv("fashion-mnist_train.csv").values  # get images
    i = random.randint(1, 60000)  # select any random image from 1 to 60,000
    im = df[i, 1:].reshape((28, 28))  # reshape it from array to 28x28 matrix
    plt.imsave("static/images/" + str(x) + ".png", im, cmap="gray")  # save image
