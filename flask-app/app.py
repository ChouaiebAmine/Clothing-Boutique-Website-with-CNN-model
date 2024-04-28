from flask import (
    Flask,
    send_file,
    request,
    jsonify,
    send_from_directory,
    json,
    Response,
    redirect,
    url_for
)
from werkzeug import Request
Request.max_form_parts = 5000
import os
import picturesRandomizer
from flask_cors import CORS
from io import BytesIO
from werkzeug.exceptions import RequestEntityTooLarge
from werkzeug.utils import secure_filename
# Create a Flask application instance
app = Flask(__name__)
cors = CORS(app, origins="*")
UPLOAD_FOLDER = 'uploads/'
app.config['UPLOAD_FOLDER']=UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 32 * 1024 * 1024 
app.config['ALLOWED_EXTENSIONS'] = ['.jpg', '.jpeg', '.png', '.gif']
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
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
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
           
picturesRandomizer.get_clothing_piece(classes)
# Define a route for the root URL
"""@app.route("/searchChoice", methods=["POST"])
def index():
    return jsonify()"""
#--------------------------------------------------
@app.route('/img_upload', methods=['POST'])

def upload_file():
    if request.method == 'POST':
        if 'image' not in request.files:
            return 'No file part'
        file = request.files['image']
        print('bruh')
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == '':
            return 'No selected file'
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return 'File uploaded successfully'
        else:
            return 'Invalid file type'
    else:
        return 'Method not allowed'
#--------------------------------------------------
@app.route("/", methods=["GET"])
def index():
    return jsonify({"data": [1, 2, 3]})
#--------------------------------------------------
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

#--------------------------------------------------
@app.route("/image/<filename>", methods=["GET"])
def images(filename):
    return send_from_directory(directory="static/images/grid images/", path=filename)

#--------------------------------------------------
# Run the Flask application
if __name__ == "__main__":
    app.run(debug=True)
