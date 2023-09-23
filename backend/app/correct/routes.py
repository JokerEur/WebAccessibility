from app.correct import correct 
from flask import request
import requests
from flask import current_app as app, make_response, jsonify
from flask_cors import cross_origin
from app.utils.how_to_use import correction


@cross_origin()
@correct.post('/api/correct')
def make_correction():
    data = request.json
    resp = {'corection': correction(data['search'])}
    return make_response(resp)