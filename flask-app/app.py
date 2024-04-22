from flask import Flask, render_template, flash, request
import picturesRandomizer
import os
# Create a Flask application instance
app = Flask(__name__, template_folder="template")



# remove pictures if there are any
try:
    for i in range(1,10):
        os.remove('static/images/'+str(i)+'.png')
except:
    pass
# make 9 random images to display at first in the grid
for i in range(1, 10):
    picturesRandomizer.get_clothing_piece(i)

# Define a route for the root URL
@app.route("/")
def index():
    return render_template("index.html")


"""@app.route("/welcome", methods=["POST", "GET"])
def greet():
    return render_template("index.html")
"""

# Run the Flask application
if __name__ == "__main__":
    app.run(debug=True)
