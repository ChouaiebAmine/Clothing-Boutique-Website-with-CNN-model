from flask import Flask, render_template, flash, request
import picturesRandomizer
from PIL import Image
import base64
import io


im = picturesRandomizer.get_clothing_piece()
im = Image.fromarray(im, "RGB")
data = io.BytesIO()
im.save(data, "JPEG")
encim = base64.b64encode(data.getvalue())


# Create a Flask application instance
app = Flask(__name__, template_folder="template")


# Define a route for the root URL
@app.route("/")
def index():
    return render_template("index.html")


@app.route("/welcome", methods=["POST", "GET"])
def greet():
    return render_template("index.html")


# Run the Flask application
if __name__ == "__main__":
    app.run(debug=True)
