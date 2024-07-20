import requests
import datetime
from bs4 import BeautifulSoup
import re
import psycopg2
from decimal import Decimal, ROUND_HALF_UP

Team = 'Baystars'
team = 'baystars'
team_jp = '横浜'
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
num = 3
TODAY = datetime.datetime.today()
_y = TODAY.strftime('%y')
_Y = TODAY.strftime('%Y')

def get_catcher_name(_catcher):
    if _catcher==0:
        catcher=catcher0
    elif _catcher==1:
        catcher=catcher1
    elif _catcher==2:
        catcher=catcher2
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
    # if category == 'pitcher':
    #     stats.append(('高梨 雄平', '0-0-0, 99.99 (0.0)', None, None, None, None))
    for stat in stats:
        table_html += tb+'<tr>\n'
        for i, x in enumerate(stat):
            if x is None:
                table_html += tb+'\t<td>---</td>\n'
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

        catcher = get_catcher_name(int(input(f'スタメン捕手 (0:{catcher0}, 1:{catcher1}, 2:{catcher2}, 3:その他)> ')))
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
        if _score[0] == 'DeNA':
            vsteam = _score[1]
        # elif _score[1] == team_jp:
        elif _score[1] == 'DeNA':
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
                            elif i == 2:
                                pass
                            else:
                                _playerscore.append(score_of_pitcher.text.replace('\n', ''))

                        _playerscore.append(
                            catcher 
                                if order_of_pitcher==0 or fullmask 
                                else
                                    get_catcher_name(
                                        int(input(f'次の投手 "{_playerscore[1]}" の捕手 (0:{catcher0}, 1:{catcher1}, 2:{catcher2}, 3:その他)> '))
                                    )
                        )
                        _playerscore.append(tday.strftime('%Y/%m/%d'))
                        _playerscore.append(team)
                        _playerscore.append('1' if order_of_pitcher==0 else '0')
                        _playerscore.append(f'{_Y}RS')
                        if order_of_pitcher==0: ## heatmap data
                            start_catcher = catcher
                            start_pitcher = _playerscore[1].split(" ")[0]
                            if start_pitcher=='メルセデス':
                                start_pitcher='ﾒﾙｾﾃﾞｽ'
                            elif start_pitcher=='シューメーカー':
                                start_pitcher='ｼｭｰﾒｰｶｰ'
                            elif start_pitcher=='アンドリース':
                                start_pitcher='ｱﾝﾄﾞﾘｰｽ'

                        print(','.join(_playerscore))
                        if not fullmask: print()
                        f.write(','.join(_playerscore)+'\n')

        print()
        if int(input('敵チームの盗塁企図あり? (1:YES, 0:NO)> ')):
            nextrunner = True
            while nextrunner:
                runner = input('  走者> ')
                if not fullmask:
                    catcher = get_catcher_name(
                                    int(input(f'  捕手 (0:{catcher0}, 1:{catcher1}, 2:{catcher2}, 3:その他)> '))
                            )
                pitcher = input('  投手> ')

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
                if not fullmask:
                    catcher = get_catcher_name(
                                    int(input(f'  捕手 (0:{catcher0}, 1:{catcher1}, 2:{catcher2}, 3:その他)> '))
                            )
                pitcher = input('  投手> ')
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

        sql_cat = f" \
            SELECT \
            %s, \
            MAX(CASE tmp2.catcher WHEN '{catcher0}' THEN tmp2.wls ELSE NULL END) {catcher0}, \
            MAX(CASE tmp2.catcher WHEN '{catcher1}' THEN tmp2.wls ELSE NULL END) {catcher1}, \
            MAX(CASE tmp2.catcher WHEN '{catcher2}' THEN tmp2.wls ELSE NULL END) {catcher2}, \
            MAX(CASE tmp2.catcher WHEN '{catcher3}' THEN tmp2.wls ELSE NULL END) {catcher3} \
            FROM \
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
                WHERE series = '%s' %s \
                GROUP BY catcher, win_lose_save, %s \
                ORDER BY 1, 2 DESC \
            ) tmp \
            GROUP BY catcher, %s \
            ORDER BY 2, 3 \
            ) tmp2 \
            GROUP BY %s \
            ORDER BY 1 ASC, 2 ASC, 3 ASC, 4 ASC  \
            ;"
        # l.395, division by zero error 回避の暫定対応

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

        pie_data = {'Catcher':[catcher0, catcher1, catcher2, 'その他'],
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
            if stat[0] in [catcher0, catcher1, catcher2]:
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
            if x[1] in [catcher0, catcher1, catcher2]:
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
        with open('./assets/data/index.template-team4.html',mode='r',encoding='utf-8') as f1:
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
                            .replace('@@catcher0@@', catcher0)
                            .replace('@@catcher1@@', catcher1)
                            .replace('@@catcher2@@', catcher2)
                            .replace('@@catcher3@@', catcher3)
                    )

        with open('./assets/data/chart-pie-demo.template-team.js',mode='r',encoding='utf-8') as f1:
            with open(f'./assets/demo/chart-pie-demo-{team_i}.js',mode='w',encoding='utf-8') as f2:
                for line in f1:
                    f2.write(
                        line
                            .replace('{_pie_data}', str(pie_data))
                            .replace('[_catchers]', str([catcher0, catcher1, catcher2]))
                    )

        print(datetime.datetime.now().strftime('%m/%d %H:%M,'),'HTML UPDATED!')
        print()

