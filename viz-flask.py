# stephen.peters@gmail.com
# Intro Project 2 flask app based on SQLalchemy Challenge homework
# Data Analytics Bootcamp, spring 2021

# let's make an API with Flask
from flask import Flask, jsonify, render_template
import numpy as np
import pandas as pd
import datetime as dt

# Python SQL toolkit and Object Relational Mapper
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from sqlalchemy import inspect

#create database path
database_path= "sqlite-data/project-2.db"

# create engine to our data file
engine = create_engine(f"sqlite:///{database_path}")

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

# View all of the classes that automap found
Base.classes.keys()

# Create our session (link) from Python to the DB
session = Session(engine)

# log some things to the shell console
print('Hello Friendly User!')
print('getting our heatmap data')
# here we collect the lat/lng data for the heatmap viz
lats = pd.read_sql_query("SELECT Latitude from gun_violence_data", engine)
lngs = pd.read_sql_query("SELECT Longitude from gun_violence_data", engine)
lats_lngs_df = pd.merge(lats, lngs, left_index=True, right_index=True)
lats_lngs_list = lats_lngs_df.values.tolist()

# setup our Flask app
app = Flask(__name__)

# create index route
@app.route("/")
def home():
  print("server received request for 'home' page...")
  return (
      f"<blockquote>"
      f"<center><h2>Welcome to our Project 2 Flask example home page</h2></center><br/>"
      f"<b>This was built on our climate flask api homework</b><br/>"
      f"<b>Available Routes:</b><br/>"
      f"<ul>"
      f"<li><a href='/api/heatmap' target='_blank'>/api/heatmap</a>  <br> -- Returns a the lat / lng coordinates of gun violence incidents. -- list of lists"

      f"<li><a href='/heatmap' target='_blank'>/heatmap</a>  <br> -- link to take us to our heatmap page" 
      f"</ul>"
      f"<br><b>NOTES:</b>"
      f"<li>I found that I had to do the 'dump cache and hard reload' to get it to reload the js scripts."
      f"</ul>"
      f"</blockquote>"
    )


@app.route("/api/heatmap")
def coords():
    """Return the gun violence incidents coords as json"""
    print("server received request for gun violence incidents coords...")
    return jsonify(lats_lngs_list) 

@app.route("/heatmap")
def heatmap():
    return render_template("heatmap.html")     

 
  
if __name__ == "__main__":
  app.run(debug=True)  
  
  