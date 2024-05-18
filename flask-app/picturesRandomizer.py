from random import randint
from PIL import Image
import os


def get_clothing_piece(classes):
    for i in range(1, 11):
        piece = classes[randint(0, 5)]
        rand_img_path = (
            "/static/images/"
            + str(piece)
            + "/"
            + str(piece)
            + " ("
            + str(randint(1, 100))
            + ").jpg"
        )
        cwd = os.getcwd()
        im = Image.open(cwd + rand_img_path)
        im.save("static/images/grid images/img(" + str(i) + ").jpg", format="JPEG")


def make_predicted_pics(predicted_class):
    for i in range(1, 11):
        img_path = (
            "/static/images/"
            + str(predicted_class)
            + "/"
            + str(predicted_class)
            + " ("
            + str(randint(1, 100))
            + ").jpg"
        )
        cwd = os.getcwd()
        im = Image.open(cwd + img_path)
        im.save("static/images/grid images/img(" + str(i) + ").jpg", format="JPEG")
