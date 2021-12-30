from flask import Blueprint, request, Response
from models.models import *
from werkzeug.security import generate_password_hash, check_password_hash
import json
# from utility import AlchemyEncoder

bp = Blueprint('main', __name__, url_prefix='/')

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
            form = request.get_json()
            user = tb_user.query.filter_by(user_id=form['user_id']).first()
            if not user:
                password = generate_password_hash(form['password'])

                user = tb_user(user_id=form['user_id'], password=password,
                               nickname=form['nickname'], email=form['email'])

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
            form = request.get_json()
            user_id = form['user_id']
            password = form['password']

            user_data = tb_user.query.filter_by(user_id=user_id).first()

            if not user_data:
                resp.status_code = 400
                resp.set_data(json.dumps({'result': "없는 아이디입니다."}))
                return resp
            elif not check_password_hash(user_data.password, password):
                resp.status_code = 400
                resp.set_data(json.dumps({'result': "비밀번호가 틀렸습니다."}))
                return resp
            else:
                # JWT 로그인 로직
                resp.status_code = 200
                resp.set_data(json.dumps({'result': "로그인 성공"}))
                return resp
    except Exception as e:
        print(e)
        resp.status_code = 500
        resp.set_data(json.dumps({'result': "서버 에러"}))
        return resp


@bp.route('/logout')
# 로그아웃
def logout():
    try:
        # JWT 로그아웃 로직
        resp.status_code = 200
        resp.set_data(json.dumps({'result': "로그아웃 성공"}))
        return resp
    except Exception as e:
        print(e)
        resp.status_code = 500
        resp.set_data(json.dumps({'result': "서버 에러"}))
        return resp
