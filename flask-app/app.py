from flask import (
    Flask,
    send_file,
    request,
    jsonify,
    send_from_directory,
    json,
    Response,
)
import picturesRandomizer
import os
import random
from flask_cors import CORS
import modules
from io import BytesIO

# Create a Flask application instance
app = Flask(__name__)
cors = CORS(app, origins="*")
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


# Define a route for the root URL
@app.route("/", methods=["GET"])
def index():
    return jsonify({"data": [1, 2, 3]})


@app.route("/image/<filename>", methods=["GET"])
def image(filename):
    modules.getRandomImageGrid(classes)
    return send_from_directory(
        directory="static/images/grid images",
        path=filename
    )


# Run the Flask application
if __name__ == "__main__":
    app.run(debug=True)
