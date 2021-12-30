from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import config

db = SQLAlchemy()


def create_app():
    app = Flask(__name__)

    app.config.from_object(config)  # config 에서 가져온 파일을 사용합니다.

    db.init_app(app)  # SQLAlchemy 객체를 app 객체와 이어줍니다.
    Migrate().init_app(app, db)

    from api import main_api
    from models import models
    app.register_blueprint(main_api.bp)

    return app


if __name__ == "__main__":
    create_app().run(debug=True, port=5000, host='0.0.0.0')
