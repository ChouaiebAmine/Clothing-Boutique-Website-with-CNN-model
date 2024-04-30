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
import picturesRandomizer,picturePrediction
from flask_cors import CORS
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
# Remember the 10 classes decoding is as follows:
# 0 => T-shirt/top
# 1 => Trouser
# 2 => Pullover
# 3 => Dress
# 4 => Coat
# 5 => Sandal
# 6 => Shirt
# 7 => Sneaker
# 8 => Bag
# 9 => Ankle boot
classes_rand = [
    "t shirt",
    "trouser",
    #"pullover",
    "dress",
    #"coat",
    "sandal",
    "shirt",
    #"sneakers",
    "bag",
    #"ankle boot",
]
classes = [
    "t shirt",
    "trouser",
    "pullover",
    "dress",
    "coat",
    "sandal",
    "shirt",
    "sneakers",
    "bag",
    "ankle boot",
]
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
           
picturesRandomizer.get_clothing_piece(classes_rand)
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
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == '':
            return 'No selected file'
        if file and allowed_file(file.filename):
            print('File uploaded successfully')
            filename = secure_filename('user_img.jpg')
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            predicted_class=picturePrediction.predictUserImage("uploads/user_img.jpg",classes)
            return redirect(url_for('predicted_pics',predicted_class=predicted_class))
        else:
            return 'Invalid file type'
    else:
        return 'Method not allowed'
#--------------------------------------------------
@app.route("/", methods=["GET"])
def index():
    return jsonify({"data": [1, 2, 3]})
#-----------------------------------------------------
@app.route("/predicted_pics/<predicted_class>", methods=["GET","POST"])
def predicted_pics(predicted_class):
    print(predicted_class)
    return predicted_class
    #picturesRandomizer.make_predicted_pics(predicted_class)
    """return jsonify(
        {
            "urls": [
                "http://127.0.0.1:5000/image/img(" + str(i) + ").jpg"
                for i in range(1, 11)
            ]
        }
    )"""
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
