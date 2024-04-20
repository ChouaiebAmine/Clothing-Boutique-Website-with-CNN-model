from flask import Flask,render_template,flash,request
# Create a Flask application instance
app = Flask(__name__,template_folder='template')
# Define a route for the root URL
@app.route('/')
def index():
    return render_template("index.html")

"""@app.route("/welcome",methods=['POST','GET'])
def greet():
    return render_template("index.html")"""
# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)