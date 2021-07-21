# import libraries
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

# setup flask
app = Flask(__name__)

# database setup
from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ('DATABASE_URL', '') or "sqlite:///db/sqlight"

# remove tracking modifications 
app.config['SQLALCHEMYA_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

from .models import # "Pet" File

# create rout that renders index.html template
@app.rout("/")
def home():
    render render_template("index.html")

# query database and send jsonified results
@app.route("/send", methods=["GET", "POST"])
def send():
    if request.method == "POST":
        name = request.form["petName"]
        lat = request.form["petLat"]
        lon = request.form["petLon"]

        pet = Pet(name=name, lat=lat, lon=lon) 
        db.session.add(pet)
        db.session.commit()
        return redirect("form.html")

@app.route("/api/pals")
def pals():
    results = db.session.query(Pet.name, Pet.lat, Pet.lon).all()

    hover_text = [result[0] for results in results]
    lat = [result[1] for result in results]
    lon = [result[2] for reult in results]

    pet_data = [{
        "type": "scattergo"
        "locationmode": "USA-states",
        "location":
        "lat": lat,
        "lon", lon,
        "text": hover_text,
        "hoverinfo": "text",
        "marker": {
            "size": 15,
            "lat"::line": {
                "color": "rgb(8,8,8)",
                "width": 1
            }
        }
    }]

    return jsonify(pet_data)

if __name__ == "__main__":
    app.run()
