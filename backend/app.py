from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import requests

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


@cross_origin()
@app.route("/index")
def index():
    req = requests.get("https://jsonplaceholder.typicode.com/posts/1")
    return jsonify(req.json())


@cross_origin()
@app.route("/users")
def users():
    req = requests.get("https://jsonplaceholder.typicode.com/users")
    return jsonify(req.json())
