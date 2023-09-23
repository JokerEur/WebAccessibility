import os
import secrets
from datetime import timedelta

class Config(object):
    DEBUG = False
    TESTING = False
    DATABASE = os.path.join(os.path.dirname(__file__), 'database/goods.db')
    CSRF_ENABLED = True


class ProductionConfig(Config):
    DEBUG = False

class DevelopmentConfig(Config):
    ENV="development"
    DEVELOPMENT=True
    DEBUG=True
