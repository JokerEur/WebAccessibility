from flask import Blueprint

categories = Blueprint('categories', __name__)

from app.categories import routes
