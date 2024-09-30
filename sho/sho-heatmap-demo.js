var squareLength = 22;
var _colorRange = ['#FFFFFE', '#008b8b'];

var datas24 = {
'2024-03-20':4,
'2024-03-21':2,
'2024-03-28':1,
'2024-03-29':0,
'2024-03-30':1,
'2024-03-31':1,
'2024-04-01':2,
'2024-04-02':0,
'2024-04-03':3,
'2024-04-05':3,
'2024-04-06':1,
'2024-04-07':2,
'2024-04-08':3,
'2024-04-09':1,
'2024-04-10':1,
'2024-04-12':3,
'2024-04-13':3,
'2024-04-14':1,
'2024-04-15':3,
'2024-04-16':1,
'2024-04-17':3,
'2024-04-19':4,
'2024-04-20':1,
'2024-04-21':3,
'2024-04-23':3,
'2024-04-24':2,
'2024-04-25':0,
'2024-04-26':3,
'2024-04-27':2,
'2024-04-28':0,
'2024-04-29':2,
'2024-04-30':1,
'2024-05-01':-0.5,
'2024-05-03':4,
'2024-05-04':3,
'2024-05-05':3,
'2024-05-06':5,
'2024-05-07':0,
'2024-05-08':0,
'2024-05-10':1,
'2024-05-11':0,
'2024-05-12':-0.5,
'2024-05-13':4,
'2024-05-14':3,
'2024-05-15':1,
'2024-05-16':2,
'2024-05-17':3,
'2024-05-18':0,
'2024-05-19':2,
'2024-05-20':0,
'2024-05-21':4,
'2024-05-22':1,
'2024-05-24':1,
'2024-05-25':1,
'2024-05-26':1,
'2024-05-28':0,
'2024-05-29':3,
'2024-05-31':0,
'2024-06-01':3,
'2024-06-02':0,
'2024-06-04':1,
'2024-06-05':3,
'2024-06-06':1,
'2024-06-07':0,
'2024-06-08':2,
'2024-06-09':1,
'2024-06-11':5,
'2024-06-12':3,
'2024-06-13':0,
'2024-06-14':1,
'2024-06-15':0,
'2024-06-16':3,
'2024-06-17':4,
'2024-06-18':3,
'2024-06-19':2,
'2024-06-20':3,
'2024-06-21':3,
'2024-06-22':3,
'2024-06-24':1,
'2024-06-25':3,
'2024-06-26':3,
'2024-06-28':1,
'2024-06-29':3,
'2024-06-30':0,
'2024-07-02':3,
'2024-07-03':1,
'2024-07-04':2,
'2024-07-05':0,
'2024-07-06':5,
'2024-07-07':3,
'2024-07-09':3,
'2024-07-10':4,
'2024-07-11':0,
'2024-07-12':2,
'2024-07-13':5,
'2024-07-14':1,
'2024-07-19':1,
'2024-07-20':1,
'2024-07-21':3,
'2024-07-22':0,
'2024-07-23':4,
'2024-07-24':0,
'2024-07-25':3,
'2024-07-26':3,
'2024-07-27':5,
'2024-07-28':2,
'2024-07-30':2,
'2024-07-31':0,
'2024-08-02':3,
'2024-08-03':3,
'2024-08-04':0,
'2024-08-05':5,
'2024-08-06':0,
'2024-08-07':0,
'2024-08-09':3,
'2024-08-10':0,
'2024-08-11':1,
'2024-08-12':5,
'2024-08-13':3,
'2024-08-14':2,
'2024-08-15':1,
'2024-08-16':0,
'2024-08-17':5,
'2024-08-18':3,
'2024-08-19':1,
'2024-08-20':3,
'2024-08-21':3,
'2024-08-23':5,
'2024-08-24':3,
'2024-08-25':0,
'2024-08-27':1,
'2024-08-28':5,
'2024-08-29':0,
'2024-08-30':5,
'2024-08-31':3,
'2024-09-01':0,
'2024-09-02':3,
'2024-09-03':2,
'2024-09-04':0,
'2024-09-06':3,
'2024-09-07':0,
'2024-09-08':3,
'2024-09-09':3,
'2024-09-10':0,
'2024-09-11':5,
'2024-09-13':0,
'2024-09-14':0,
'2024-09-15':2,
'2024-09-16':1,
'2024-09-17':3,
'2024-09-18':3,
'2024-09-19':5,
'2024-09-20':5,
'2024-09-21':3,
'2024-09-22':5,
'2024-09-24': 1,
'2024-09-25': 4,
'2024-09-26': 2,
'2024-09-27': 5,
'2024-09-28': 3,
'2024-09-29': 3,
};
var score24 = {
'2024-03-20': '<span><strong>0 HR / 1 SB</strong></span></br>2 Hits / 1 RBI / AVG .400',
'2024-03-21': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 1 RBI / AVG .300',
'2024-03-28': '<span><strong>0 HR / 0 SB</strong></span></br>2 Hits / 0 RBI / AVG .385',
'2024-03-29': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .294',
'2024-03-30': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .273',
'2024-03-31': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .269',
'2024-04-01': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 1 RBI / AVG .267',
'2024-04-02': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .242',
'2024-04-03': '<span><strong>1 HR / 0 SB</strong></span></br>2 Hits / 1 RBI / AVG .270',
'2024-04-05': '<span><strong>1 HR / 0 SB</strong></span></br>2 Hits / 2 RBI / AVG .286',
'2024-04-06': '<span><strong>0 HR / 0 SB</strong></span></br>2 Hits / 0 RBI / AVG .304',
'2024-04-07': '<span><strong>0 HR / 0 SB</strong></span></br>2 Hits / 1 RBI / AVG .320',
'2024-04-08': '<span><strong>1 HR / 0 SB</strong></span></br>3 Hits / 1 RBI / AVG .345',
'2024-04-09': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .333',
'2024-04-10': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .333',
'2024-04-12': '<span><strong>1 HR / 0 SB</strong></span></br>3 Hits / 1 RBI / AVG .353',
'2024-04-13': '<span><strong>0 HR / 1 SB</strong></span></br>0 Hits / 1 RBI / AVG .343',
'2024-04-14': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .338',
'2024-04-15': '<span><strong>0 HR / 1 SB</strong></span></br>1 Hits / 0 RBI / AVG .338',
'2024-04-16': '<span><strong>0 HR / 0 SB</strong></span></br>2 Hits / 0 RBI / AVG .341',
'2024-04-17': '<span><strong>0 HR / 1 SB</strong></span></br>3 Hits / 0 RBI / AVG .360',
'2024-04-19': '<span><strong>0 HR / 1 SB</strong></span></br>1 Hits / 1 RBI / AVG .356',
'2024-04-20': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .359',
'2024-04-21': '<span><strong>1 HR / 0 SB</strong></span></br>2 Hits / 2 RBI / AVG .368',
'2024-04-23': '<span><strong>1 HR / 0 SB</strong></span></br>1 Hits / 1 RBI / AVG .364',
'2024-04-24': '<span><strong>0 HR / 0 SB</strong></span></br>3 Hits / 2 RBI / AVG .371',
'2024-04-25': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .358',
'2024-04-26': '<span><strong>1 HR / 0 SB</strong></span></br>1 Hits / 1 RBI / AVG .354',
'2024-04-27': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 1 RBI / AVG .347',
'2024-04-28': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .336',
'2024-04-29': '<span><strong>0 HR / 0 SB</strong></span></br>2 Hits / 1 RBI / AVG .341',
'2024-04-30': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .336',
'2024-05-03': '<span><strong>0 HR / 2 SB</strong></span></br>1 Hits / 1 RBI / AVG .336',
'2024-05-04': '<span><strong>1 HR / 0 SB</strong></span></br>3 Hits / 2 RBI / AVG .345',
'2024-05-05': '<span><strong>2 HR / 0 SB</strong></span></br>4 Hits / 3 RBI / AVG .364',
'2024-05-06': '<span><strong>1 HR / 2 SB</strong></span></br>2 Hits / 2 RBI / AVG .370',
'2024-05-07': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .365',
'2024-05-08': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .355',
'2024-05-10': '<span><strong>0 HR / 0 SB</strong></span></br>2 Hits / 0 RBI / AVG .359',
'2024-05-11': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .352',
'2024-05-13': '<span><strong>0 HR / 1 SB</strong></span></br>2 Hits / 1 RBI / AVG .354',
'2024-05-14': '<span><strong>1 HR / 0 SB</strong></span></br>3 Hits / 2 RBI / AVG .361',
'2024-05-15': '<span><strong>0 HR / 0 SB</strong></span></br>2 Hits / 0 RBI / AVG .364',
'2024-05-16': '<span><strong>0 HR / 1 SB</strong></span></br>0 Hits / 0 RBI / AVG .360',
'2024-05-17': '<span><strong>1 HR / 0 SB</strong></span></br>1 Hits / 2 RBI / AVG .358',
'2024-05-18': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .350',
'2024-05-19': '<span><strong>0 HR / 0 SB</strong></span></br>2 Hits / 1 RBI / AVG .353',
'2024-05-20': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .347',
'2024-05-21': '<span><strong>0 HR / 2 SB</strong></span></br>2 Hits / 1 RBI / AVG .351',
'2024-05-22': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .348',
'2024-05-24': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 1 RBI / AVG .340',
'2024-05-25': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .338',
'2024-05-26': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .336',
'2024-05-28': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .329',
'2024-05-29': '<span><strong>1 HR / 0 SB</strong></span></br>2 Hits / 3 RBI / AVG .330',
'2024-05-31': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .326',
'2024-06-01': '<span><strong>0 HR / 1 SB</strong></span></br>1 Hits / 0 RBI / AVG .326',
'2024-06-02': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .322',
'2024-06-04': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .321',
'2024-06-05': '<span><strong>1 HR / 0 SB</strong></span></br>2 Hits / 2 RBI / AVG .322',
'2024-06-06': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .318',
'2024-06-07': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .312',
'2024-06-08': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 1 RBI / AVG .311',
'2024-06-09': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .310',
'2024-06-11': '<span><strong>1 HR / 1 SB</strong></span></br>1 Hits / 2 RBI / AVG .312',
'2024-06-12': '<span><strong>1 HR / 0 SB</strong></span></br>1 Hits / 1 RBI / AVG .311',
'2024-06-13': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .306',
'2024-06-14': '<span><strong>0 HR / 0 SB</strong></span></br>2 Hits / 0 RBI / AVG .309',
'2024-06-15': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .305',
'2024-06-16': '<span><strong>2 HR / 0 SB</strong></span></br>2 Hits / 2 RBI / AVG .309',
'2024-06-17': '<span><strong>0 HR / 1 SB</strong></span></br>3 Hits / 1 RBI / AVG .314',
'2024-06-18': '<span><strong>1 HR / 0 SB</strong></span></br>2 Hits / 2 RBI / AVG .316',
'2024-06-19': '<span><strong>0 HR / 0 SB</strong></span></br>2 Hits / 3 RBI / AVG .317',
'2024-06-20': '<span><strong>1 HR / 0 SB</strong></span></br>1 Hits / 1 RBI / AVG .318',
'2024-06-21': '<span><strong>1 HR / 0 SB</strong></span></br>2 Hits / 2 RBI / AVG .322',
'2024-06-22': '<span><strong>1 HR / 0 SB</strong></span></br>1 Hits / 2 RBI / AVG .321',
'2024-06-24': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 1 RBI / AVG .318',
'2024-06-25': '<span><strong>1 HR / 0 SB</strong></span></br>2 Hits / 2 RBI / AVG .320',
'2024-06-26': '<span><strong>1 HR / 0 SB</strong></span></br>1 Hits / 1 RBI / AVG .322',
'2024-06-28': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .322',
'2024-06-29': '<span><strong>1 HR / 0 SB</strong></span></br>1 Hits / 1 RBI / AVG .321',
'2024-06-30': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .316',
'2024-07-02': '<span><strong>1 HR / 0 SB</strong></span></br>3 Hits / 2 RBI / AVG .320',
'2024-07-03': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .319',
'2024-07-04': '<span><strong>0 HR / 1 SB</strong></span></br>0 Hits / 0 RBI / AVG .316',
'2024-07-05': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .312',
'2024-07-06': '<span><strong>1 HR / 1 SB</strong></span></br>2 Hits / 1 RBI / AVG .316',
'2024-07-07': '<span><strong>0 HR / 2 SB</strong></span></br>1 Hits / 0 RBI / AVG .314',
'2024-07-09': '<span><strong>0 HR / 1 SB</strong></span></br>1 Hits / 0 RBI / AVG .315',
'2024-07-10': '<span><strong>0 HR / 1 SB</strong></span></br>2 Hits / 1 RBI / AVG .317',
'2024-07-11': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .314',
'2024-07-12': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 1 RBI / AVG .312',
'2024-07-13': '<span><strong>1 HR / 1 SB</strong></span></br>2 Hits / 2 RBI / AVG .314',
'2024-07-14': '<span><strong>0 HR / 0 SB</strong></span></br>2 Hits / 0 RBI / AVG .316',
'2024-07-19': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .316',
'2024-07-20': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .315',
'2024-07-21': '<span><strong>1 HR / 0 SB</strong></span></br>1 Hits / 1 RBI / AVG .315',
'2024-07-22': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .313',
'2024-07-23': '<span><strong>0 HR / 1 SB</strong></span></br>2 Hits / 3 RBI / AVG .314',
'2024-07-24': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .310',
'2024-07-25': '<span><strong>1 HR / 0 SB</strong></span></br>2 Hits / 1 RBI / AVG .312',
'2024-07-26': '<span><strong>0 HR / 1 SB</strong></span></br>2 Hits / 0 RBI / AVG .315',
'2024-07-27': '<span><strong>1 HR / 1 SB</strong></span></br>2 Hits / 2 RBI / AVG .318',
'2024-07-28': '<span><strong>0 HR / 1 SB</strong></span></br>0 Hits / 0 RBI / AVG .314',
'2024-07-30': '<span><strong>0 HR / 1 SB</strong></span></br>0 Hits / 0 RBI / AVG .311',
'2024-07-31': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .309',
'2024-08-02': '<span><strong>1 HR / 0 SB</strong></span></br>1 Hits / 3 RBI / AVG .308',
'2024-08-03': '<span><strong>0 HR / 3 SB</strong></span></br>2 Hits / 0 RBI / AVG .309',
'2024-08-04': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .306',
'2024-08-05': '<span><strong>1 HR / 1 SB</strong></span></br>2 Hits / 2 RBI / AVG .309',
'2024-08-06': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .306',
'2024-08-07': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .302',
'2024-08-09': '<span><strong>1 HR / 0 SB</strong></span></br>1 Hits / 2 RBI / AVG .302',
'2024-08-10': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .300',
'2024-08-11': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .298',
'2024-08-12': '<span><strong>1 HR / 1 SB</strong></span></br>1 Hits / 2 RBI / AVG .298',
'2024-08-13': '<span><strong>1 HR / 0 SB</strong></span></br>1 Hits / 1 RBI / AVG .297',
'2024-08-14': '<span><strong>0 HR / 2 SB</strong></span></br>0 Hits / 0 RBI / AVG .295',
'2024-08-15': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .294',
'2024-08-16': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .291',
'2024-08-17': '<span><strong>1 HR / 2 SB</strong></span></br>1 Hits / 1 RBI / AVG .291',
'2024-08-18': '<span><strong>1 HR / 0 SB</strong></span></br>1 Hits / 1 RBI / AVG .290',
'2024-08-19': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .290',
'2024-08-20': '<span><strong>0 HR / 1 SB</strong></span></br>2 Hits / 0 RBI / AVG .291',
'2024-08-21': '<span><strong>0 HR / 1 SB</strong></span></br>1 Hits / 0 RBI / AVG .291',
'2024-08-23': '<span><strong>1 HR / 1 SB</strong></span></br>2 Hits / 4 RBI / AVG .292',
'2024-08-24': '<span><strong>1 HR / 0 SB</strong></span></br>2 Hits / 2 RBI / AVG .294',
'2024-08-25': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .292',
'2024-08-27': '<span><strong>0 HR / 0 SB</strong></span></br>2 Hits / 0 RBI / AVG .294',
'2024-08-28': '<span><strong>1 HR / 2 SB</strong></span></br>2 Hits / 1 RBI / AVG .295',
'2024-08-29': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .292',
'2024-08-30': '<span><strong>1 HR / 1 SB</strong></span></br>2 Hits / 1 RBI / AVG .294',
'2024-08-31': '<span><strong>1 HR / 0 SB</strong></span></br>1 Hits / 2 RBI / AVG .293',
'2024-09-01': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .291',
'2024-09-02': '<span><strong>0 HR / 3 SB</strong></span></br>2 Hits / 0 RBI / AVG .292',
'2024-09-03': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 1 RBI / AVG .292',
'2024-09-04': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .290',
'2024-09-06': '<span><strong>1 HR / 0 SB</strong></span></br>2 Hits / 1 RBI / AVG .291',
'2024-09-07': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .289',
'2024-09-08': '<span><strong>1 HR / 0 SB</strong></span></br>2 Hits / 1 RBI / AVG .291',
'2024-09-09': '<span><strong>0 HR / 1 SB</strong></span></br>2 Hits / 0 RBI / AVG .292',
'2024-09-10': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .290',
'2024-09-11': '<span><strong>1 HR / 1 SB</strong></span></br>2 Hits / 3 RBI / AVG .292',
'2024-09-13': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .290',
'2024-09-14': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .289',
'2024-09-15': '<span><strong>0 HR / 0 SB</strong></span></br>2 Hits / 2 RBI / AVG .290',
'2024-09-16': '<span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 2 RBI / AVG .288',
'2024-09-17': '<span><strong>1 HR / 0 SB</strong></span></br>1 Hits / 2 RBI / AVG .287',
'2024-09-18': '<span><strong>0 HR / 1 SB</strong></span></br>1 Hits / 0 RBI / AVG .287',
'2024-09-19': '<span><strong>3 HR / 2 SB</strong></span></br>6 Hits / 10 RBI / AVG .294',
'2024-09-20': '<span><strong>1 HR / 1 SB</strong></span></br>3 Hits / 2 RBI / AVG .297',
'2024-09-21': '<span><strong>0 HR / 1 SB</strong></span></br>1 Hits / 0 RBI / AVG .297',
'2024-09-22': '<span><strong>1 HR / 2 SB</strong></span></br>4 Hits / 1 RBI / AVG .301',
'2024-09-24': '<span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .301',
    '2024-09-25': '<span><strong>0 HR / 1 SB</strong></span></br>2 Hits / 2 RBI / AVG .303',
    '2024-09-26': '<span><strong>0 HR / 0 SB</strong></span></br>3 Hits / 1 RBI / AVG .305',
    '2024-09-27': '<span><strong>1 HR / 1 SB</strong></span></br>4 Hits / 4 RBI / AVG .309',
    '2024-09-28': '<span><strong>0 HR / 1 SB</strong></span></br>2 Hits / 0 RBI / AVG .310',
    '2024-09-29': '<span><strong>0 HR / 1 SB</strong></span></br>1 Hits / 0 RBI / AVG .310',
    //@@TOOLTIP@@
};
var chartData24 = [];
for (var d in datas24) {
    chartData24.push({
        date: moment(d, 'YYYY-MM-DD').startOf('day').toDate(),
        count: datas24[d],
        score: score24[d],
    });
};
var heatmap24 = calendarHeatmap()
  .data(chartData24)
  .startDate('2024-03-20')
  .endDate('2024-10-01')
  .selector('#shomap24')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('750px')
  .colorRange(_colorRange);
heatmap24();  // render the chart
