from app.products import products 
from flask import request
import requests
from flask import current_app as app, make_response, jsonify
from flask_cors import cross_origin
import sqlite3

@cross_origin()
@products.post('/api/products')
def get_products():
    with sqlite3.connect(app.config['DATABASE']) as sqliteConnection:
        cursor = sqliteConnection.cursor()
        query = cursor.execute('''SELECT 
                                    Products.product_id,
                                    Products.product_name,
                                    Products.category_id,
                                    Manufacturers.manufacturer_name,
                                    Price_change.new_price,
                                    Products.images
                                FROM 
                                    Products
                                LEFT JOIN 
                                    Manufacturers ON Manufacturers.manufacturer_id = Products.manufacturer_id
                                LEFT JOIN
                                    Price_change On Price_change.product_id = Products.product_id;
                               ''').fetchall()

        json_data = [{'product_id': row[0],'product_name': row[1], 'category_id': row[2], 'manufacturer_name': row[3], 'price': row[4],'image': row[5] } for row in query]
        resp = jsonify(json_data)

    return make_response(resp)

@cross_origin()
@products.post('/api/product/<id>')
def get_product(id):
    with sqlite3.connect(app.config['DATABASE']) as sqliteConnection:
        cursor = sqliteConnection.cursor()
        query = cursor.execute('''SELECT
                                    Products.product_id,
                                    Products.product_name,
                                    Products.category_id,
                                    Manufacturers.manufacturer_name,
                                    Price_change.new_price,
                                    Products.images
                                FROM
                                    Products
                                LEFT JOIN
                                    Manufacturers ON Manufacturers.manufacturer_id = Products.manufacturer_id
                                LEFT JOIN
                                    Price_change On Price_change.product_id = Products.product_id
                                WHERE
                                    Products.product_id = ?
                               ''' , (id,)).fetchone()
        
        json_data = {'product_id': query[0],'product_name': query[1], 'category_id': query[2], 'manufacturer_name': query[3], 'price' : query[4], 'image': query[5]}
        resp = jsonify(json_data)

    return make_response(resp)