from flask import (
    Flask,
    send_file,
    request,
    jsonify,
    send_from_directory,
    json,
    Response,
    redirect,
)
import os
import time
import picturesRandomizer
from flask_cors import CORS
import shutil

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

picturesRandomizer.get_clothing_piece(classes)


# Define a route for the root URL


@app.route("/", methods=["GET"])
def index():
    return jsonify({"data": [1, 2, 3]})

@app.route("/image/", methods=["GET"])
def image():
    return jsonify(
        {
            "urls": [
                "http://127.0.0.1:5000/image/img(" + str(i) + ").jpg"
                for i in range(1, 11)
            ]
        }
    )


@app.route("/image/<filename>", methods=["GET"])
def images(filename):
    return send_from_directory(directory="static/images/grid images/", path=filename)


# Run the Flask application
if __name__ == "__main__":
    app.run(debug=True)
