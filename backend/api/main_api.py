import json

from flask import Blueprint, request, Response
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.orm import load_only

from app import db
from models.models import User, ott_usage_time_statistics, ott_frequency_of_use_statistics
from api.utility import AlchemyEncoder

'''
main_api.py
이 파일은 클라이언트와 통신하는 api를 작성하는 파일입니다.
'''


bp = Blueprint('main', __name__, url_prefix='/')

# 테스트중 cors 문제를 해결하기 위한 임시조치
resp = Response()
resp.headers['Access-Control-Allow-Origin'] = '*'


@bp.route('/register', methods=('POST',))
# 회원가입
def register():
    try:
        if request.method == 'POST':
            request_data = request.get_json()
            user = User.query.filter_by(
                id=request_data['user_id']).first()

            # 아이디 중복 체크
            if user is None:
                password = generate_password_hash(request_data['password'])

                user = User(id=request_data['user_id'], password=password,
                            nickname=request_data['nickname'], email=request_data['email'])

                db.session.add(user)
                db.session.commit()

                resp.status_code = 200
                resp.set_data(json.dumps({'result': "회원가입 성공"}))
                return resp
            else:
                resp.status_code = 400
                resp.set_data(json.dumps({'result': "이미 가입된 아이디입니다."}))
                return resp
    except Exception as e:
        print(e)
        resp.status_code = 500
        resp.set_data(json.dumps({'result': "서버 에러"}))
        return resp


@bp.route('/login', methods=('POST',))
# 로그인
def login():
    try:
        if request.method == 'POST':
            request_data = request.get_json()
            id = request_data['user_id']
            password = request_data['password']

            user_data = User.query.filter_by(id=id).first()

            if user_data is None:
                resp.status_code = 400
                resp.set_data(json.dumps({'result': "없는 아이디입니다."}))
                return resp
            elif check_password_hash(user_data.password, password) is False:
                resp.status_code = 400
                resp.set_data(json.dumps({'result': "비밀번호가 틀렸습니다."}))
                return resp
            else:
                resp.status_code = 200
                resp.set_data(json.dumps({
                    'result': "로그인 성공",
                    'nickname': user_data.nickname,
                    'access_token': create_access_token(id)
                }))
                return resp
    except Exception as e:
        print(e)
        resp.status_code = 500
        resp.set_data(json.dumps({'result': "서버 에러"}))
        return resp


@bp.route('/usagetest', methods=('POST',))
# OTT 사용 등급 테스트
def usagetest():
    try:
        if request.method == 'POST':
            request_data = request.get_json()
            age = request_data['age']
            usage_time = request_data['usage_time']
            print(usage_time)
            frequency_of_use = request_data['frequency_of_use']

            if 0 < age < 10:
                age = 10
            elif age < 20:
                age = 20
            elif age < 30:
                age = 30
            elif age < 40:
                age = 40
            elif age < 50:
                age = 50
            elif age < 60:
                age = 60
            elif age < 70:
                age = 70
            elif age < 1000:
                age = 1000

            # result_data = ott_usage_time_statistics.query.filter_by(
                # id=age).options(load_only(usage_time)).first()
            usage_time_value = db.session.execute(
                f'SELECT {usage_time} FROM ott_usage_time_statistics WHERE id = {age}').first()[0]
            frequency_of_use_value = db.session.execute(
                f'SELECT {frequency_of_use} FROM ott_frequency_of_use_statistics WHERE id = {age}').first()[0]
            result_value = (usage_time_value + frequency_of_use_value) / 2

            resp.status_code = 200
            resp.set_data(json.dumps({'result': result_value}))
            return resp

    except Exception as e:
        print(e)
        resp.status_code = 500
        resp.set_data(json.dumps({'result': "서버 에러"}))
        return resp
    finally:
        db.session.close()
