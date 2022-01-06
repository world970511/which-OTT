import pandas as pd
import numpy as np
import re
import urllib.request
import warnings
warnings.filterwarnings('ignore')

#데이터 다운로드
urllib.request.urlretrieve("https://raw.githubusercontent.com/world970511/elice_OTT/master/dataset/kinolight_all_data.csv",
                        filename="OTT.csv")
data = pd.read_csv('OTT.csv', encoding='utf-8')
# print(data.head())
# print(data.shape())
# print(data.info())

# 연도가 NaN인 작품들의 연도 추가
data.loc[997, 'year'] = '2021.0'
data.loc[2114, 'year'] = '2019.0'
data.loc[2294, 'year'] = '2019.0'
data.loc[15295, 'year'] = '2011.0'
data.loc[16806, 'year'] = '2020.0'
data.loc[19272, 'year'] = '2013.0'
data.loc[23503, 'year'] = '2015.0'
data.loc[23539, 'year'] = '2019.0'
data.loc[23592, 'year'] = '2014.0'
data.loc[23598, 'year'] = '2015.0'
data.loc[23799, 'year'] = '2012.0'
data.loc[23832, 'year'] = '2018.0'
data.loc[24536, 'year'] = '2019.0'
data.loc[24539, 'year'] = '2019.0'
data.loc[24970, 'year'] = '2020.0'
data.loc[25250, 'year'] = '2016.0'
data.loc[25251, 'year'] = '2015.0'
data.loc[26295, 'year'] = '2021.0'

#중복제거 및 기타 제거
li=['genre','country','cast','director','provider',]

for i in li:
    data[i]=data[i].apply(lambda x:re.sub(r'\([^)]*\)', '',x.replace('[','').replace(']','').replace("'",'').replace("'",'')))
    data[i]=data[i].apply(lambda x:re.sub(r' ', '',x))
    data[i]=data[i].apply(lambda x: ' '.join(set(x.strip().split(','))))

# 불필요한 행 제거
data= data[data['title']!='title']

# 년도 정수형으로 변경, kind 문자형으로 변경
data['year'] = data['year'].astype('float').astype('Int64')
data['kind'] = data['kind'].astype('string')

# 제작미정,시사/교양,기타(장르가 아니라 country로 가있음;;) 정리
# 제작미정인 경우 풀릴 예정인 곳과 아닌 곳이 있고 양이 너무 많아서 그냥 장르로 변경함
def r_ch(s,i):
    li=s.split(',')
    if i in li: 
        li.remove(i)
    return ','.join (li)

def add_ch(s,i):
    li=s.split(' ')
    if i not in li: li+=[i]
    return ' '.join (li)

li=['미정','시사/교양','기타']
for i in li:
    d=data.loc[data["country"].str.contains(i)]
    data=data.loc[data["country"].str.contains(i)==False]

    d['country']=d['country'].apply(lambda x:r_ch(x,i))
    d['genre']=d['genre'].apply(lambda x:add_ch(x,i))

    data=pd.concat([data,d])

# 독점 및 오리지널 표시 및 필요한 provider 데이터 외에 드랍

# 필요한 provider외에 나머지 드랍
remove_provider_list=['네이버시리즈온', 'GooglePlay무비', '씨네폭스', '아마존프라임비디오', 'AppleTV+']
n_data=pd.DataFrame(columns=['title', 'year', 'kind', 'KMRB', 'genre', 'country', 'cast', 'director', 'runtime(min)', 'provider'])
for i in remove_provider_list:
    data['provider']=data['provider'].apply(lambda x: x.replace(i,''))

data['provider'].dropna()

# 독점/오리지널 여부
data['provider']=data['provider'].apply(lambda x: [i for i in x.split(' ')])
data.loc[:,'origin']=data['provider'].apply(lambda x: True if len(x)==1 else False)
data['provider']=data['provider'].apply(lambda x: ' '.join(x))
data = data.sort_index()

# print(data.genre)

data.to_csv('C:/Users/IBK/Documents/kyx/elice/project/dataproject/ott_data.csv', index=False)