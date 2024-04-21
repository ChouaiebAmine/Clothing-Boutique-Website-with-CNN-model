from flask import Flask, render_template, flash, request
import picturesRandomizer
from PIL import Image
import base64
import io

# Create a Flask application instance
app = Flask(__name__, template_folder="template")


# Define a route for the root URL
@app.route("/")
def index():
    im = picturesRandomizer.get_clothing_piece()
    
    data = io.BytesIO()
    im.save(data, "JPEG")
    encim = base64.b64encode(data.getvalue())
    return render_template("index.html",img_data=encim.decode('utf-8'))


"""@app.route("/welcome", methods=["POST", "GET"])
def greet():
    return render_template("index.html")
"""

# Run the Flask application
if __name__ == "__main__":
    app.run(debug=True)
