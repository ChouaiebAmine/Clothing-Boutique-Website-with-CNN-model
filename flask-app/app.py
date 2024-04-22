from flask import Flask, render_template, flash, request
import picturesRandomizer
import os
# Create a Flask application instance
app = Flask(__name__, template_folder="template")


# make 9 random images to display at first in the grid
imgs=["static/images/T-shirt/tshirt ("+str(i)+").jpg" for i in range(1,10)]
imnames=[x[x.rfind("/")+1:x.rfind(".")] for x in imgs]
print(imnames)
# Define a route for the root URL
@app.route("/")
def index():
    return render_template("index.html",im_info=zip(imgs,imnames))

"""@app.route("/welcome", methods=["POST", "GET"])
def greet():
    return render_template("index.html")
"""

# Run the Flask application
if __name__ == "__main__":
    app.run(debug=True)
