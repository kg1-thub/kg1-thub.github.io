import requests
import datetime
from bs4 import BeautifulSoup
import re
import psycopg2
from decimal import Decimal, ROUND_HALF_UP

Team = 'Baystars'
team = 'baystars'
team_jp = '横浜'
team_jp2 = 'DeNA'
team_jp_full = '横浜DeNAベイスターズ'
team_i = 'b'
title_color = ''
color_win = '#008DDA'
color_draw = 'rgb(94, 180, 228)'
color_lose = 'rgb(189, 219, 237)'
catcher0 = '山本'
catcher1 = '伊藤'
catcher2 = '戸柱'
catcher3 = '松尾'
catchers = [catcher0, catcher1, catcher2, catcher3]
num = 3

def set_team_param(_num):
    global num, Team, team, team_jp, team_jp2, team_jp_full, team_i
    global title_color, color_win, color_draw, color_lose, catchers
    if _num == 3:
        num = 3
        Team = 'Baystars'
        team = 'baystars'
        team_jp = '横浜'
        team_jp2 = 'DeNA'
        team_jp_full = '横浜DeNAベイスターズ'
        team_i = 'b'
        title_color = ''
        color_win = '#008DDA'
        color_draw = 'rgb(94, 180, 228)'
        color_lose = 'rgb(189, 219, 237)'
        catcher0 = '山本'
        catcher1 = '伊藤'
        catcher2 = '戸柱'
        catcher3 = '松尾'
        catchers = [catcher0, catcher1, catcher2, catcher3]
    if _num == 5:
        num = 5
        Team = 'Tigers'
        team = 'tigers'
        team_jp = '阪神'
        team_jp2 = team_jp
        team_jp_full = '阪神タイガース'
        team_i = 't'
        title_color = 'color: black;'
        color_win = '#fcc800'
        color_draw = 'rgb(246, 216, 97)'
        color_lose = 'rgb(239, 231, 194)'
        catcher0 = '梅野'
        catcher1 = '坂本'
        catcher2 = '長坂'
        catcher3 = '榮枝'
        catchers = [catcher0, catcher1, catcher2, catcher3]
    if _num == 6:
        num = 6
        Team = 'Carp'
        team = 'carp'
        team_jp = '広島'
        team_jp2 = team_jp
        team_jp_full = '広島東洋カープ'
        team_i = 'c'
        title_color = ''
        color_win = '#F1533A'
        color_draw = 'rgb(239, 145, 132)'
        color_lose = 'rgb(237, 208, 205)'
        catcher0 = '坂倉'
        catcher1 = '會澤'
        catcher2 = '石原'
        catchers = [catcher0, catcher1, catcher2]
    if _num == 2:
        num = 2
        Team = 'Swallows'
        team = 'swallows'
        team_jp = 'ヤクルト'
        team_jp2 = team_jp
        team_jp_full = '東京ヤクルトスワローズ'
        team_i = 's'
        title_color = ''
        color_win = '#066163'
        color_draw = 'rgb(98, 154, 146)'
        color_lose = 'rgb(190, 211, 213)'
        catcher0 = '中村'
        catcher1 = '松本直'
        catcher2 = '内山'
        # catcher3 = '西田'
        # catcher4 = '鈴木'
        catchers = [catcher0, catcher1, catcher2] #, catcher3, catcher4]
    if _num == 4:
        num = 4
        Team = 'Dragons'
        team = 'dragons'
        team_jp = '中日'
        team_jp2 = team_jp
        team_jp_full = '中日ドラゴンズ'
        team_i = 'd'
        title_color = ''
        color_win = '#6F3BC8'
        color_draw = 'rgb(161, 131, 217)'
        color_lose = 'rgb(211, 203, 234)'
        catcher0 = '木下'
        catcher1 = '宇佐見'
        catcher2 = '加藤匠'
        catchers = [catcher0, catcher1, catcher2]
    if _num == 12:
        num = 12
        Team = 'Hawks'
        team = 'hawks'
        team_jp = 'ソフトバンク'
        team_jp2 = team_jp
        team_jp_full = '福岡ソフトバンクホークス'
        team_i = 'h'
        title_color = 'color: black;'
        color_win = '#fcc800'
        color_draw = 'rgb(246, 216, 97)'
        color_lose = 'rgb(239, 231, 194)'
        catcher0 = '甲斐'
        catcher1 = '海野'
        catcher2 = '嶺井'
        catchers = [catcher0, catcher1, catcher2]
    if _num == 10:
        num = 376
        Team = 'Eagles'
        team = 'eagles'
        team_jp = '楽天'
        team_jp2 = team_jp
        team_jp_full = '東北楽天ゴールデンイーグルス'
        team_i = 'e'
        title_color = ''
        color_win = '#870011'
        color_draw = 'rgb(175, 96, 107)'
        color_lose = 'rgb(216, 191, 197)'
        catcher0 = '太田'
        catcher1 = '石原'
        catcher2 = '田中貴'
        catchers = [catcher0, catcher1, catcher2]
    if _num == 8:
        num = 8
        Team = 'Fighters'
        team = 'fighters'
        team_jp = '日本ハム'
        team_jp2 = team_jp
        team_jp_full = '北海道日本ハムファイターズ'
        team_i = 'f'
        title_color = ''
        color_win = '#006298'
        color_draw = 'rgb(94, 154, 188)'
        color_lose = 'rgb(189, 211, 224)'
        catcher0 = '田宮'
        catcher1 = '伏見'
        catcher2 = '清水'
        catchers = [catcher0, catcher1, catcher2]
    if _num == 9:
        num = 9
        Team = 'Marines'
        team = 'marines'
        team_jp = 'ロッテ'
        team_jp2 = team_jp
        team_jp_full = '千葉ロッテマリーンズ'
        team_i = 'm'
        title_color = ''
        color_win = '#124076'
        color_draw = 'rgb(105, 134, 168)'
        color_lose = 'rgb(192, 204, 217)'
        catcher0 = '佐藤'
        catcher1 = '田村'
        catcher2 = '柿沼'
        catchers = [catcher0, catcher1, catcher2]
    if _num == 11:
        num = 11
        Team = 'Buffaloes'
        team = 'buffaloes'
        team_jp = 'オリックス'
        team_jp2 = team_jp
        team_jp_full = 'オリックス・バファローズ'
        team_i = 'o'
        title_color = ''
        color_win = '#0A1D56'
        color_draw = 'rgb(100, 113, 148)'
        color_lose = 'rgb(191, 197, 211)'
        catcher0 = '森'
        catcher1 = '若月'
        catcher2 = '石川'
        catcher3 = '福永'
        catchers = [catcher0, catcher1, catcher2, catcher3]
    if _num == 7:
        num = 7
        Team = 'Lions'
        team = 'lions'
        team_jp = '西武'
        team_jp2 = team_jp
        team_jp_full = '埼玉西武ライオンズ'
        team_i = 'l'
        title_color = ''
        color_win = '#176B87'
        color_draw = 'rgb(108, 160, 178)'
        color_lose = 'rgb(193, 213, 221)'
        catcher0 = '古賀'
        catcher1 = '炭谷'
        catcher2 = '柘植'
        catchers = [catcher0, catcher1, catcher2]

TODAY = datetime.datetime.today()
_y = TODAY.strftime('%y')
_Y = TODAY.strftime('%Y')

def get_catcher_name(_catcher, catchers):
    if (_catcher <  len(catchers)):
        catcher = catchers[_catcher]
    # if _catcher==0:
    #     catcher=catchers[0]
    # elif _catcher==1:
    #     catcher=catchers[1]
    # elif _catcher==2:
    #     catcher=catchers[2]
    else:
        catcher=str(input('  捕手の名前> '))
    return catcher

def get_query(sql, series):
    conn = psycopg2.connect('dbname=baseball host=localhost user=postgres password=postgres')
    cur = conn.cursor()
    cur.execute(sql % (series, series, series, series))
    conn.commit()
    results = cur.fetchall()
    cur.close()
    conn.close()
    return results

csvdir = 'C:/Users/ki401/Documents/git/github-io/assets/data/csv'

def replace_table(tablename, filename):
    conn = psycopg2.connect('dbname=baseball host=localhost user=postgres password=postgres')
    cur = conn.cursor()
    trunctb = "TRUNCATE %s;" % tablename
    copytotb = "COPY %s FROM '%s/%s' WITH (format csv, header, encoding 'SJIS');" \
                    % (tablename, csvdir, filename)
    res1 = cur.execute(trunctb)
    res2 = cur.execute(copytotb)
    conn.commit()
    cur.close()
    conn.close()
    return

def get_query_category(sql, series, category):
    conn = psycopg2.connect('dbname=baseball host=localhost user=postgres password=postgres')
    cur = conn.cursor()
    if category=='month':
        category1, category2 = "month::integer", "DATE_PART('month', day_of_game) AS month"
        condition = ""
    else:
        category1, category2 = category, category
        condition = ""
        # condition = "AND NOT (catcher='大城' AND pitcher='平内 龍太')"
        if num == 2 and category == 'pitcher':
            condition = "AND NOT (catcher='西田' AND pitcher='木澤 尚文')"
        if num == 4 and category == 'pitcher':
            condition = "AND NOT (catcher='宇佐見' AND pitcher='田島 慎二')"
        if num == 7 and category == 'pitcher':
            condition = "AND NOT (catcher='古市' AND pitcher='ヤン')"
        if num == 376 and category == 'pitcher':
            condition = "AND (NOT (catcher='堀内' AND pitcher='松井 友飛') AND NOT (catcher='太田' AND pitcher='小孫 竜二'))"
    cur.execute(sql % (category1, category, category2, series, condition, category, category, category))
    conn.commit()
    results = cur.fetchall()
    cur.close()
    conn.close()
    return results

def create_table_category(series, category):
    stats = get_query_category(sql_cat, series, category)

    table_html = ''
    tb = '\t'*11
    if category == 'pitcher' and num == 4:
        stats.append(('田島 慎二', None, None, None))
    for stat in stats:
        table_html += tb+'<tr>\n'
        for i, x in enumerate(stat):
            # print(i, stat)
            if x is None:
                # table_html += tb+'\t<td>---</td>\n'
                if stat[0] == '田島 慎二' and i==2:
                    table_html += tb+'\t<td>0-0-0, 99.99 (0.0)</td>\n'
                elif stat[0] == '松井 友飛' and i==3:
                    table_html += tb+'\t<td>0-0-0, 99.99 (0.0)</td>\n'
                elif stat[0] == '小孫 竜二' and i==1:
                    table_html += tb+'\t<td>0-0-0, --- (0.0)</td>\n'
                else:
                    table_html += tb+'\t<td>---</td>\n'
                # table_html += tb+'\t<td>---</td>\n'
                # if stat[0] == '高梨 雄平' and i==1:
                #     table_html += tb+'\t<td>0-0-0, 99.99 (0.0)</td>\n'
                # else:
                #     table_html += tb+'\t<td>---</td>\n'
                    # table_html += tb+'\t<td>---</td>\n'
                # if stat[0] == '高梨 雄平' and i==1:
                #     table_html += tb+'\t<td>0-0-0, 99.99 (0.0)</td>\n'
                # else:
                #     table_html += tb+'\t<td>---</td>\n'
            else:
                table_html += tb+'\t<td>'+str(x).replace('.67)', '.2)').replace('.33)', '.1)')+'</td>\n'
        table_html += tb+'</tr>\n'
    table_html = table_html[:-1]
    return table_html

def get_query2(sql, series):
    conn = psycopg2.connect('dbname=baseball host=localhost user=postgres password=postgres')
    cur = conn.cursor()
    cur.execute(sql % (series, series))
    conn.commit()
    results = cur.fetchall()
    cur.close()
    conn.close()
    return results

if __name__=='__main__':
    print('どのチームにしますか?')
    print('  2:ヤクルト, 3:横浜, 4:中日, 5:阪神, 6:広島')
    print('  7:西武, 8:日ハム, 9:ロッテ, 10:楽天, 11:オリックス, 12:ソフトバンク')
    set_team_param(int(input('番号を入力してください> ')))

    print('どのタスクを行いますか?')
    print('  0: CSV登録 & html生成')
    print('  1: CSV登録')
    print('  2: html生成')
    print('  3: チーム勝敗取り込み')
    task = int(input('番号を入力してください> '))
    # task = 1

    entry_csv = True
    make_html = True
    entry_wl = False
    # TODAY = datetime.datetime.today()

    if task==1:
        make_html = False
    elif task==2:
        entry_csv = False
    elif task==3:
        entry_wl = True
        entry_csv = False
        make_html = False

    if entry_csv:

        tday = datetime.datetime.today() \
                if int(input('今日の試合? (1:YES, 0:NO)> ')) \
                else datetime.datetime(int(_Y), int(input('  月> ')), int(input('  日> ')))

        q_catcher = f'捕手 (0:{catchers[0]}, 1:{catchers[1]}, 2:{catchers[2]}, '
        q_catcher += f'3:{catchers[3]}, 4:その他)> ' \
                        if len(catchers) > 3 \
                        else f'3:その他)> '
        catcher = get_catcher_name(int(input('スタメン'+q_catcher)), catchers)
        fullmask = int(input('フルマスク? (1:YES, 0:NO)> '))

        # get yahoo sports gameid
        _game_calender = f'https://baseball.yahoo.co.jp/npb/teams/{num}/schedule?month='+tday.strftime('%Y-%m')
        xml = requests.get(_game_calender)
        soup = BeautifulSoup(xml.content, 'html.parser')
        for x in soup.findAll('div', class_='bb-calendarTable__wrap'):
            d = x.find('p', class_='bb-calendarTable__date')
            if (d is not None):
                if (int(d.text) == int(tday.strftime('%e'))):
                    _game = x.find('a', class_='bb-calendarTable__status')
                    match = re.search(r'/game/(\d+)/', str(_game))
                    if match:
                        gameid = match.group(1)

        print('gameid:'+gameid)
        url = f'https://baseball.yahoo.co.jp/npb/game/{gameid}/top'
        xml = requests.get(url)
        soup = BeautifulSoup(xml.content, 'html.parser')
        _score = []
        for _, score_of_game in enumerate(soup.findAll('a', class_='bb-gameTeam__link')):
            _score.append(score_of_game.text)

        _score.append(soup.find('span', class_='bb-gameTeam__homeScore').text)
        _score.append(soup.find('span', class_='bb-gameTeam__awayScore').text)

        # print(_score)
        # if _score[0] == team_jp:
        if _score[0] == team_jp2:
            vsteam = _score[1]
        # elif _score[1] == team_jp:
        elif _score[1] == team_jp2:
            vsteam = _score[0]
        score = _score[2]+'-'+_score[3]

        url = f'https://baseball.yahoo.co.jp/npb/game/{gameid}/stats'
        xml = requests.get(url)
        soup = BeautifulSoup(xml.content, 'html.parser')
        heatmap_WLD = 0    # (WIN=1, LOSE=-1, DRAW=0)

        for _k, news in enumerate(soup.findAll('section', class_='bb-modCommon02')):
            _team = news.find('h3', class_='bb-head02__title')
            if _team is None:
                pass
            elif _team.text == team_jp_full:
                _batteries = []
                with open(csvdir+f'/catcher_stats{_y}{team_i}.csv',mode='a',encoding='shift-jis') as f:
                    for order_of_pitcher, scores_of_pitcher in enumerate(news.findAll('tr', class_='bb-scoreTable__row')):
                        _playerscore = []
                        for i, score_of_pitcher in enumerate(scores_of_pitcher.findAll('td')):
                            if i == 0:
                                wls = score_of_pitcher.text
                                if wls == '勝':
                                    wls = 'W'
                                    heatmap_WLD = 1
                                elif wls == '敗':
                                    wls = 'L'
                                    heatmap_WLD = -1
                                _playerscore.append(wls)
                            elif i == 1:
                                _playerscore.append(
                                    score_of_pitcher.text.replace('\n', '')
                                        .replace('\ufa11', '\u5d0e')
                                        .replace('\u9ad9', '\u9ad8')
                                        .replace('\u6ff5', '\u6ff1')
                                    )
                                    # Replace 﨑('\ufa11') → 崎(\u5d0e) To avoid shift_jis encoding error.
                                    # Replace 髙('\u9ad9') → 高(\u9ad8) To avoid shift_jis encoding error.
                                    # Replace 濵('\u6ff5') → 濱(\u6ff1) To avoid shift_jis encoding error.
                            elif i == 2:
                                pass
                            else:
                                _playerscore.append(score_of_pitcher.text.replace('\n', ''))

                        _playerscore.append(
                            catcher 
                                if order_of_pitcher==0 or fullmask 
                                else
                                    get_catcher_name(int(input(f'次の投手 "{_playerscore[1]}" の{q_catcher}')), catchers)
                        )
                        _playerscore.append(tday.strftime('%Y/%m/%d'))
                        _playerscore.append(vsteam)
                        _playerscore.append('1' if order_of_pitcher==0 else '0')
                        _playerscore.append(f'{_Y}RS')
                        if order_of_pitcher==0: ## heatmap data
                            start_catcher = catcher
                            start_pitcher = _playerscore[1].split(" ")[0]

                        print(','.join(_playerscore))
                        if not fullmask: print()
                        f.write(','.join(_playerscore)+'\n')
                        _batteries.append([_playerscore[1], _playerscore[13], _playerscore[2]])

        print()
        if int(input('敵チームの盗塁企図あり? (1:YES, 0:NO)> ')):
            nextrunner = True
            while nextrunner:
                runner = input('  走者> ')
                for i, x in enumerate(_batteries):
                    print(i, x)
                _j = int(input('  対象バッテリーの番号> '))
                pitcher = _batteries[_j][0]
                if not fullmask:
                    catcher = _batteries[_j][1]

                caught_stealing = int(input('  盗塁企図の結果は？(0:許盗塁, 1:盗塁刺, 2:複数回)> '))
                if caught_stealing > 1:
                    stolen_bases = int(input('    許盗塁の数> '))
                    caught_stealing = int(input('    盗塁刺の数> '))
                else:
                    stolen_bases = 1 - caught_stealing

                sdata = []
                sdata.append(vsteam)
                sdata.append(runner)
                sdata.append(team_jp)
                sdata.append(catcher)
                sdata.append(pitcher)
                sdata.append(tday.strftime('%Y-%m-%d'))
                sdata.append(str(stolen_bases))
                sdata.append(str(caught_stealing))
                sdata.append(f'{_Y}RS')
                with open(csvdir+f'/stolen_stats{_y}{team_i}.csv',mode='a',encoding='shift-jis') as f:
                    # o_team,runner,d_team,catcher,pitcher,day_of_game,stolen_bases,caught_stealing,series
                    print(','.join(sdata))
                    print()
                    f.write(','.join(sdata)+'\n')

                nextrunner = int(input('他にも敵チームの盗塁企図あり?(1:YES, 0:NO)> '))

        print()
        if int(input(f'{team_jp}にバッテリーエラーあり？(1:YES, 0:NO)> ')):
            nextbattery = True
            while nextbattery:
                for i, x in enumerate(_batteries):
                    print(i, x)
                _j = int(input('  対象バッテリーの番号> '))
                pitcher = _batteries[_j][0]
                if not fullmask:
                    catcher = _batteries[_j][1]

                pdata = []
                pdata.append(catcher)
                pdata.append(pitcher)
                pdata.append(tday.strftime('%Y-%m-%d'))
                pdata.append(str(int(input('    ワイルドピッチは何回?> '))))
                pdata.append(str(int(input('    パスボールは何回?> '))))
                pdata.append(f'{_Y}RS')
                with open(csvdir+f'/pitch_stats{_y}{team_i}.csv',mode='a',encoding='shift-jis') as f:
                    # catcher,pitcher,day_of_game,wild_pitch,passed_ball,series
                    print(','.join(pdata))
                    print()
                    f.write(','.join(pdata)+'\n')

                nextbattery = int(input(f'  他にも{team_jp}にバッテリーエラーあり?(1:YES, 0:NO)> '))

        print('CSV UPDATED.')

        # CALENDER-HEATMAP UPDATE
        CALENDERHEATMAP = f'./assets/demo/calendar-heatmap-demo-{team_i}.js'
        _team = ''
        if vsteam=='阪神':
            _team = 'Tigers'
        elif vsteam=='中日':
            _team = 'Dragons'
        elif vsteam=='ヤクルト':
            _team = 'Swallows'
        elif vsteam=='広島':
            _team = 'Carp'
        elif vsteam=='DeNA':
            _team = 'Baystars'
        elif vsteam=='巨人':
            _team = 'Giants'
        elif vsteam=='西武':
            _team = 'Lions'
        elif vsteam=='楽天':
            _team = 'Eagles'
        elif vsteam=='オリックス':
            _team = 'Buffaloes'
        elif vsteam=='ソフトバンク':
            _team = 'Hawks'
        elif vsteam=='ロッテ':
            _team = 'Marines'
        elif vsteam=='日本ハム':
            _team = 'Fighters'

        with open(CALENDERHEATMAP,mode='r',encoding='utf-8') as reader:
            content = reader.read()
            content = content.replace(
                        '//@@NEXTGAME@@', 
                        "'"+tday.strftime('%Y-%m-%d')+"'"+': '+str(heatmap_WLD)+',\n    //@@NEXTGAME@@'
                    ).replace(
                        '//@@NEXTSCORE@@', 
                        "'"+tday.strftime('%Y-%m-%d')+"': 'vs "+_team+' , '+score
                        + ' </br>Start P.'+start_pitcher+' / C.'+start_catcher+"',\n    //@@NEXTSCORE@@"
                    )
        with open(CALENDERHEATMAP,mode='w',encoding='utf-8') as writer:
            writer.write(content)
        print('CALENDER-HEATMAP UPDATED.')

        # DATATABLESDEMO SEARCH KEYWORD UPDATE
        DATATABLESDEMO = f'./assets/demo/datatables-demo{_y}{team_i}.js'
        print(DATATABLESDEMO)
        with open(DATATABLESDEMO,mode='r',encoding='utf-8') as reader:
            lines = reader.readlines()
            content = ''
            for line in lines:
                if '@@KEYWORD@@' in line:
                    # content += '    keyword = "'+tday.strftime('%m/%d')+'"; // @@KEYWORD@@\n'
                    content += "    '"+tday.strftime('%m/%d')+"', // @@KEYWORD@@\n"
                else:
                    content += line
        with open(DATATABLESDEMO,mode='w',encoding='utf-8') as writer:
            writer.write(content)
        print('DATATABLES-DEMO SEARCH KEYWORD UPDATED.')

    if make_html:
    # if False:

        replace_table('catcher_stats', f'catcher_stats{_y}{team_i}.csv')
        replace_table('stolen_stats', f'stolen_stats{_y}{team_i}.csv')

        sql_v3 = "\
            SELECT \
                c.catcher, \
                c.innings, \
                w.win, \
                w.lose, \
                w.save, \
                s.starting, \
                c.runs, \
                c.er, \
                ss.stolen_bases + ss.caught_stealing so, \
                ss.stolen_bases sb, \
                ss.caught_stealing cs \
            FROM \
                ( \
                    SELECT  \
                        catcher, \
                        round(sum(floor(innings))+sum(mod(innings,1))*10/3, 2) INNINGS, \
                        SUM(runs) RUNS, \
                        SUM(earned_runs) ER, \
                        ROUND(SUM(earned_runs)/(sum(floor(innings))+sum(mod(innings,1))*10/3)*9*100)/100 ERA \
                    FROM catcher_stats \
                    WHERE series = '%s' \
                    GROUP BY catcher \
                ) c \
                LEFT OUTER JOIN \
                    ( \
                        SELECT \
                            catcher, \
                            MAX(CASE tmp.win_lose_save WHEN 'W' THEN tmp.cnt ELSE 0 END) WIN, \
                            MAX(CASE tmp.win_lose_save WHEN 'L' THEN tmp.cnt ELSE 0 END) LOSE, \
                            MAX(CASE tmp.win_lose_save WHEN 'S' THEN tmp.cnt ELSE 0 END) SAVE \
                        FROM (  \
                            SELECT catcher, win_lose_save, count(*) cnt FROM catcher_Stats \
                            WHERE win_lose_save IS NOT NULL  \
                            AND series = '%s'  \
                            GROUP BY catcher, win_lose_save  \
                        ) tmp \
                        GROUP BY catcher \
                    ) w \
                    ON c.catcher = w.catcher \
                LEFT OUTER JOIN  \
                    (SELECT catcher, SUM(stolen_bases) stolen_bases, SUM(caught_stealing) caught_stealing \
                    from stolen_stats where series='%s' GROUP BY catcher) ss \
                    ON ss.catcher = c.catcher \
                LEFT OUTER JOIN  \
                    (SELECT \
                        catcher, \
                        COUNT(*) starting \
                    FROM catcher_stats \
                    WHERE starting \
                    AND series = '%s'  \
                    GROUP BY catcher) s \
                    ON s.catcher = c.catcher \
            ORDER BY 2 DESC; \
            "

        _sql_cat = ""
        if len(catchers) <= 4:
            for (i, _c) in enumerate(catchers):
                _sql_cat += f", \
                MAX(CASE tmp2.catcher WHEN '{_c}' THEN tmp2.wls ELSE NULL END) {_c} "
        else:
            _sql_cat += f", \
            MAX(CASE tmp2.catcher WHEN '{catchers[0]}' THEN tmp2.wls ELSE NULL END) {catchers[0]}, \
            MAX(CASE tmp2.catcher WHEN '{catchers[1]}' THEN tmp2.wls ELSE NULL END) {catchers[1]}, \
            MAX(CASE tmp2.catcher WHEN '{catchers[2]}' THEN tmp2.wls ELSE NULL END) {catchers[2]}, \
            MAX(CASE WHEN tmp2.catcher NOT IN ('{catchers[0]}','{catchers[1]}','{catchers[2]}') THEN tmp2.wls ELSE NULL END) 'その他', \
            "

        sql_cat = " \
            SELECT \
            %s " + \
            _sql_cat + \
            "FROM \
            ( \
            SELECT \
                catcher, \
                %s, \
                MAX(CASE tmp.win_lose_save WHEN 'W' THEN tmp.cnt ELSE 0 END) || '-' || \
                MAX(CASE tmp.win_lose_save WHEN 'L' THEN tmp.cnt ELSE 0 END) || '-' || \
                MAX(CASE tmp.win_lose_save WHEN 'S' THEN tmp.cnt ELSE 0 END) || ', ' || \
                ROUND(SUM(tmp.er)/sum(tmp.ins)*9, 2) \
                || ' (' || round(sum(tmp.ins)*100)::float/100 || ')' \
                wls \
            FROM ( \
                SELECT  \
                %s, \
                catcher, \
                win_lose_save, \
                COUNT(*) cnt, \
                SUM(earned_runs) er, \
                sum(floor(innings))+sum(mod(innings,1))*10/3 ins \
                FROM catcher_stats \
                WHERE series = '%s' %s  \
                GROUP BY catcher, win_lose_save, %s \
                ORDER BY 1, 2 DESC \
            ) tmp \
            GROUP BY catcher, %s \
            ORDER BY 2, 3 \
            ) tmp2 \
            GROUP BY %s \
            ORDER BY 1 ASC, 2 ASC, 3 ASC, 4 ASC  \
            ;"

        stats = get_query(sql_v3, f'{_Y}RS')
        catcher_stats = []
        catcher_stats.append(['捕手', 'イニング', '勝', '敗', 'S', '先発数', '失点', '自責点', '防御率', '盗塁企図', '許盗塁', '盗塁刺', '阻止率'])

        for stat in stats:
            catcher_stats.append([x if x else 0 for x in stat])

        for x in catcher_stats[1:]:
            if x[8] > 0:
                x.append(Decimal(x[10]/x[8]).quantize(Decimal('0.001'), rounding=ROUND_HALF_UP))
            else:
                x.append('---')
            x.insert(8, Decimal(x[7]*9/x[1]).quantize(Decimal('0.01'), rounding=ROUND_HALF_UP))

        table_html = ''
        tb = '\t'*11
        for catcher_stat in catcher_stats[1:]:
            table_html += tb + '<tr>\n'
            for i, x in enumerate(catcher_stat):
                if x is None:
                    table_html += tb + '\t<td></td>\n'
                else:
                    if i == 1:
                        table_html += tb + '\t<td>'+str(float(x)).replace('.67', '.2').replace('.33', '.1')+'</td>\n'
                    else:
                        table_html += tb + '\t<td>'+str(x)+'</td>\n'
            table_html += tb + '</tr>\n'
        table_html = table_html[:-1]

        atag_tweet_html = '\t'*7 + f'<a href="http://twitter.com/share?text={_Y}{team_jp}捕手別投手成績%0D%0A捕手, 勝-敗-S, 防御率 (イニング)%0D%0A'
        for catcher_stat in catcher_stats[1:]:
            atag_tweet_html += catcher_stat[0]+', '+str(catcher_stat[2])+'-'+str(catcher_stat[3])+'-'+str(catcher_stat[4])+', '
            atag_tweet_html += str(catcher_stat[8])+' ('+str(float(catcher_stat[1])).replace('.67', '.2').replace('.33', '.1')+')%0D%0A'
        # atag_tweet_html += '&hashtags=giants" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Tweet for sharing">'
        atag_tweet_html += f'%23{team}%0D%0Ahttps%3A%2F%2Fkg1-thub.github.io%2F{team}%2F" target="_blank" data-toggle="tooltip" data-placement="bottom" title="X for sharing">'

        pie_data = {'Catcher':[catchers[0], catchers[1], catchers[2], catchers[3] if len(catchers)>3 else 'その他'],
                    'stolen_bases':[0,0,0,0],
                    'Defense_inning':[
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0]
                    ],
                    'Starting_games':[
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0]
                    ],
                    'Winning_games': [
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0]
                    ]}

        for stat in catcher_stats[1:]:
            # pie_data['stolen_bases'][pie_data['Catcher'].index(stat[0])] = stat[10]
            if stat[0] in catchers:
                pie_data['stolen_bases'][pie_data['Catcher'].index(stat[0])] = stat[10]
            else:
                pie_data['stolen_bases'][pie_data['Catcher'].index('その他')] += stat[10]

        sql_month_stats = " \
            SELECT tmp.month, tmp.catcher, tmp.cnt, tmp.ins, wins.cnt \
            from (SELECT  \
                DATE_PART('month', day_of_game)::integer AS month, \
                catcher, \
                sum(case when starting then 1 else 0 end) cnt, \
                round(sum(floor(innings))+sum(mod(innings,1))*10/3, 2)::float ins    \
            FROM catcher_stats \
            WHERE series = '%s' \
            GROUP BY catcher, month \
            ORDER BY 1, 2 DESC) tmp \
            left outer join ( \
                SELECT  \
                DATE_PART('month', day_of_game) AS month, \
                catcher, \
                COUNT(*) cnt \
                FROM catcher_stats \
                WHERE series = '%s' \
                AND win_lose_save = 'W' \
                GROUP BY catcher, win_lose_save, month \
            ) wins \
            ON tmp.month = wins.month and tmp.catcher=wins.catcher\
            ;"

        area_datas = get_query2(sql_month_stats, f'{_Y}RS')

        for x in area_datas:
            if x[1] in catchers:
                pie_data['Starting_games'][pie_data['Catcher'].index(x[1])][x[0]-3] = x[2]
                pie_data['Defense_inning'][pie_data['Catcher'].index(x[1])][x[0]-3] = x[3]
                pie_data['Winning_games'][pie_data['Catcher'].index(x[1])][x[0]-3] = x[4] or 0
            else:
                pie_data['Starting_games'][pie_data['Catcher'].index('その他')][x[0]-3] += x[2]
                pie_data['Defense_inning'][pie_data['Catcher'].index('その他')][x[0]-3] += x[3]
                pie_data['Winning_games'][pie_data['Catcher'].index('その他')][x[0]-3] += x[4] or 0

        table_month_html = create_table_category(f'{_Y}RS', 'month')

        table_pitcher_html = create_table_category(f'{_Y}RS', 'pitcher')

        today = datetime.date.today().strftime('%Y.%m.%d')
        p = 'p' if num > 6 else ''
        INDEX_TEMPLATE = f'./assets/data/index.template-{p}team4.html' \
                            if len(catchers)>3 \
                            else f'./assets/data/index.template-{p}team.html'
        with open(INDEX_TEMPLATE, mode='r',encoding='utf-8') as f1:
            with open(f'./{team}/index.html',mode='w',encoding='utf-8') as f2:
                for line in f1:
                    f2.write(
                        line
                            .replace('@@atag_catcher@@', atag_tweet_html)
                            .replace('@@table_catcher@@', table_html)
                            .replace('@@table_month@@', table_month_html)
                            .replace('@@table_pitcher@@', table_pitcher_html)
                            .replace('@@update_date@@', today)
                            .replace('@@team@@', Team)
                            .replace('@@team_lower@@', team)
                            .replace('@@team_jp@@', team_jp)
                            .replace('@@i@@', team_i)
                            .replace('@@title_color@@', title_color)
                            .replace('@@color_win@@', color_win)
                            .replace('@@color_draw@@', color_draw)
                            .replace('@@color_lose@@', color_lose)
                            .replace('@@catcher0@@', catchers[0])
                            .replace('@@catcher1@@', catchers[1])
                            .replace('@@catcher2@@', catchers[2])
                            .replace('@@catcher3@@', catchers[3] if len(catchers) > 3 else '')
                    )

        with open('./assets/data/chart-pie-demo.template-team.js',mode='r',encoding='utf-8') as f1:
            with open(f'./assets/demo/chart-pie-demo-{team_i}.js',mode='w',encoding='utf-8') as f2:
                for line in f1:
                    f2.write(
                        line
                            .replace('{_pie_data}', str(pie_data))
                            .replace('[_catchers]', str(catchers))
                            # .replace('[_catchers]', str([catchers[0], catchers[1], catchers[2]]))
                    )

        print(datetime.datetime.now().strftime('%m/%d %H:%M,'),'HTML UPDATED!')
        print()
