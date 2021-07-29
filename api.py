import flask

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return "<h1>Gun Violence Statistics</h1><p>This site provides a glimpse in Gun Violence across the U.S. from 2013-2016. </p>"

app.run()