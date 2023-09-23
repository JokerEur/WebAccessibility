from app.categories import categories 
from flask import request
import requests
from flask import current_app as app, make_response, jsonify
from flask_cors import cross_origin
import sqlite3

@cross_origin()
@categories.post('/api/categories')
def get_categories():
    with sqlite3.connect(app.config['DATABASE']) as sqliteConnection:
        cursor = sqliteConnection.cursor()
        query = cursor.execute('''SELECT
                                    Categories.category_id,
                                    Categories.category_name,
                                    COUNT(Products.product_id) AS product_count
                                FROM
                                    Categories 
                                LEFT JOIN
                                    Products ON categories.category_id = Products.category_id
                                GROUP BY
                                    Categories.category_id, Categories.category_name;
                               ''').fetchall()

        json_data = [{'category_id': row[0],'category_name': row[1], 'number_of_elements': row[2]} for row in query]
        resp = jsonify(json_data)

    return make_response(resp)

@cross_origin()
@categories.post('/api/category/<id>')
def get_category(id):
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
                                    Categories ON Categories.category_id = Products.category_id
                                LEFT JOIN
                                    Manufacturers ON Manufacturers.manufacturer_id = Products.manufacturer_id
                                LEFT JOIN
                                    Price_change On Price_change.product_id = Products.product_id
                                WHERE
                                    Categories.category_id = ?
                               ''', (id,)).fetchall()

    json_data = [{'product_id': row[0],'product_name': row[1], 'category_id': row[2], 'manufacturer_name': row[3], 'price': row[4], 'image': row[5]} for row in query]
    resp = jsonify(json_data)

    return make_response(resp)
