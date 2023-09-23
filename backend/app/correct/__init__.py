from flask import Blueprint

correct = Blueprint('correct', __name__)

from app.correct import routes
