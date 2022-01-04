from app import db

'''
model.py
이 파일은 데이터베이스의 제약 조건을 명시하는 파일입니다.
'''


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.String(20), primary_key=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    nickname = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(100), nullable=False)


class ott_usage_time_statistics(db.Model):
    __tablename__ = 'ott_usage_time_statistics'
    id = db.Column(db.String(10), primary_key=True, nullable=False)
    five_m = db.Column(db.Float, nullable=False)
    ten_m = db.Column(db.Float, nullable=False)
    thirty_m = db.Column(db.Float, nullable=False)
    one_h = db.Column(db.Float, nullable=False)
    two_h = db.Column(db.Float, nullable=False)
    over = db.Column(db.Float, nullable=False)


class ott_frequency_of_use_statistics(db.Model):
    __tablename__ = 'ott_frequency_of_use_statistics'
    id = db.Column(db.String(10), primary_key=True, nullable=False)
    month_one = db.Column(db.Float, nullable=False)
    month_three = db.Column(db.Float, nullable=False)
    week_six = db.Column(db.Float, nullable=False)
    week_four = db.Column(db.Float, nullable=False)
    week_two = db.Column(db.Float, nullable=False)
    every = db.Column(db.Float, nullable=False)
    many = db.Column(db.Float, nullable=False)


usage_time_column_list = ['id', 'five_m', 'ten_m',
                          'thirty_m', 'one_h', 'two_h', 'over']

frequency_of_use_column_list = ['id', 'month_one', 'month_three',
                                'week_six', 'week_four', 'week_two', 'every', 'many']
