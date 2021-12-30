from app import db

'''
model.py
이 파일은 데이터베이스의 제약 조건을 명시하는 파일입니다.
'''


class tb_user(db.Model):
    __tablename__ = 'tb_user'
    user_id = db.Column(db.String(20), primary_key=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    nickname = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(100), nullable=False)
