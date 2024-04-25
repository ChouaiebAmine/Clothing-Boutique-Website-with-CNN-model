from flask import Flask, render_template, flash, request, jsonify, send_from_directory
import picturesRandomizer
import os
import random
from flask_cors import CORS

# Create a Flask application instance
app = Flask(__name__)
cors=CORS(app,origins='*')
# make 9 random images to display at first in the grid
"""classes = [
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
]"""


# test
# Define a route for the root URL
@app.route("/", methods=["GET"])
def index():
    """imgs = []
    m = Markup("<p>helooooooooo<p>")
    imnames = []
    for i in range(0, 9):
        randclass = random.randint(0, 5)
        randpic = random.randint(1, 100)
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
    # render_template("template/build/index.html",m=m, im_info=zip(imgs, imnames))"""
    return jsonify({"test": ["wa1", "wa2", "wa3"]})


# Run the Flask application
if __name__ == "__main__":
    app.run(debug=True)