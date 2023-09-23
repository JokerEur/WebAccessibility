from flask import Blueprint

products = Blueprint('products', __name__)

from app.products import routes
