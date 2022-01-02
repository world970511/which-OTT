import json

from flask import Blueprint, request, Response
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash, check_password_hash

from app import db
from models.models import User

# from utility import AlchemyEncoder

'''
main_api.py
이 파일은 클라이언트와 통신하는 api를 작성하는 파일입니다.
'''


bp = Blueprint('main', __name__, url_prefix='/')

# 테스트중 cors 문제를 해결하기 위한 임시조치
resp = Response()
resp.headers['Access-Control-Allow-Origin'] = '*'


@bp.route('/')
def home():
    return


@bp.route('/register', methods=('POST',))
# 회원가입
def register():
    try:
        if request.method == 'POST':
            request_data = request.get_json()
            user = User.query.filter_by(
                user_id=request_data['user_id']).first()

            # 아이디 중복 체크
            # 사용자가 없다면 회원가입 로직 진행,
            # 사용자가 있다면 "이미 가입된 아이디입니다." + 400 response code
            if user is None:
                password = generate_password_hash(request_data['password'])

                user = User(user_id=request_data['user_id'], password=password,
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
            user_id = request_data['user_id']
            password = request_data['password']

            user_data = User.query.filter_by(user_id=user_id).first()

            if user_data is None:
                resp.status_code = 400
                resp.set_data(json.dumps({'result': "없는 아이디입니다."}))
                return resp
            elif check_password_hash(user_data.password, password) is False:
                resp.status_code = 400
                resp.set_data(json.dumps({'result': "비밀번호가 틀렸습니다."}))
                return resp
            else:
                # JWT 로그인 로직
                resp.status_code = 200
                resp.set_data(json.dumps({
                    'result': "로그인 성공",
                    'nickname': user_data.nickname,
                    'access_token': create_access_token(user_id)
                }))
                return resp
    except Exception as e:
        print(e)
        resp.status_code = 500
        resp.set_data(json.dumps({'result': "서버 에러"}))
        return resp
