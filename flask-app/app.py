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
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
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
        f = request.files['file']
        f.save(f.save(os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(f.filename))))
    return 'file uploaded successfully'
"""def upload_file():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            print('No file part')
            return redirect(request.url)
        file = request.files['file']
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == '':
            print('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return redirect(url_for('download_file', name=filename))
    return ' ' 
    """

"""def upload_file():
    try:
        file = request.files['file']
        print(file.filename)
        if file:
            extension = os.path.splitext(file.filename)[1].lower()

        if extension not in app.config['ALLOWED_EXTENSIONS']:
            return 'File is not an image.'
        print(file.filename)
        file.save(os.path.join(
            app.config['UPLOAD_FOLDER'],
            secure_filename(file.filename)
        ))
  
    except RequestEntityTooLarge:
        return 'File is larger than the 16MB limit.'
  
    return jsonify({'yo':'upload mregel'})"""
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
