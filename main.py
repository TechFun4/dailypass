from flask import Flask, render_template, make_response, request
import os
import asyncio
import random

app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ["secret"]

@app.before_request
def before_request_site():
  if request.host not in ['dailypass.techfun.live']:
    return 'forbidden', 403

@app.route("/")
def home():
  return render_template("home.html")

@app.route("/result")
def about():
  return render_template("result.html")

@app.route('/home.css')
def home_css():
  response = make_response(render_template("home.css"), 200)
  response.headers['Content-Type'] = 'text/css'
  return response

@app.route('/home.js')
def home_js():
  response = make_response(render_template("home.js"), 200)
  response.headers['Content-Type'] = 'text/javascript'
  return response

@app.route('/arc-sw.js')
def arc_site():
  response = make_response(app.send_static_file('arc.js'), 200)
  response.headers['Content-Type'] = 'application/javascript'
  return response

@app.errorhandler(404)
def error_404(e):
  return "not found", 404

app.run(host="0.0.0.0")