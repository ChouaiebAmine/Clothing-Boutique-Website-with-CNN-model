from flask import (
    Flask,
    send_file,
    request,
    jsonify,
)
import picturesRandomizer
import os
import random
from flask_cors import CORS
import modules

from matplotlib.backends.backend_agg import FigureCanvasAgg
from matplotlib.figure import Figure
from io import BytesIO
import base64
from PIL import Image

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


# test
# Define a route for the root URL
@app.route("/", methods=["GET"])
def index():
    return jsonify({"data":[1, 2, 3]})

@app.route("/image",methods=['GET'])
def image():
    #filename = 'static/images/bag/bag (1).jpg'
    basename = os.path.basename(__file__)
    filepath = os.path.join(basename, '..', 'static', )
    return jsonify(filepath)


# Run the Flask application
if __name__ == "__main__":
    app.run(debug=True)
