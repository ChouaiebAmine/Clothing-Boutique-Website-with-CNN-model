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

#upload_file function

def upload_file():
    if 'image' not in request.files:
        return 'no File'
    file = request.files['image']
    if file.filename =='':
        return 'No selected file'
    file.save('ChouaiebAmine/Clothing-Boutique-Website-with-CNN-model/flask-app/Images/image.jpg')
    return 'File uploaded'

@app.route('/display')

def display_image():
    return'<img src = ChouaiebAmine/Clothing-Boutique-Website-with-CNN-model/flask-app/Images/image.jpg>'

if __name__ == '__main__':
    app.run(debug=True)