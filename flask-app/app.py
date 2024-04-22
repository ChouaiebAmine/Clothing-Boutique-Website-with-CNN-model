from flask import Flask, render_template, flash, request
import picturesRandomizer
import os
import random

# Create a Flask application instance
app = Flask(__name__, template_folder="template")


# make 9 random images to display at first in the grid
classes = [
    # "ankle boot",
    "bag",
    # "coat",
    "dress",
    # "pullover",
    "sandal",
    "shirt",
    # "sneakers",
    "t shirt",
    "trouser",
]
#test
# Define a route for the root URL
@app.route("/")
def index():
    imgs = []
    imnames = []
    for i in range(0, 9):
        randclass = random.randint(0, 5)
        randpic=random.randint(1,100)
        imgs.append(
            "static/images/"
            + str(classes[randclass])
            + "/"
            + str(classes[randclass])
            + " ("
            + str(randpic)
            + ").jpg"
        )
        imnames.append(str(classes[randclass]) + " (" + str(randpic) + ")")
    return render_template("index.html", im_info=zip(imgs, imnames))


"""@app.route("/welcome", methods=["POST", "GET"])
def greet():
    return render_template("index.html")
"""

# Run the Flask application
if __name__ == "__main__":
    app.run(debug=True)
