import csv
import requests
from datetime import datetime, timedelta
import pytz

PLAYER_ID = 660271  # ohtani number
SEASON = 2026

BATTING_CSV  = f'C:/Users/ki401/Documents/git/github-io/sho/csv/sho26.csv'
PITCHING_CSV = f'C:/Users/ki401/Documents/git/github-io/sho/csv/sho26p.csv'

jst = pytz.timezone("Asia/Tokyo")

TODAY = (
    datetime.now(jst) - timedelta(days=1)
).strftime("%Y-%m-%d")

TEAM_ABBR = {
    108: "LAA",
    109: "AZ",
    110: "BAL",
    111: "BOS",
    112: "CHC",
    113: "CIN",
    114: "CLE",
    115: "COL",
    116: "DET",
    117: "HOU",
    118: "KC",
    119: "LAD",
    120: "WSH",
    121: "NYM",
    133: "OAK",
    134: "PIT",
    135: "SD",
    136: "SEA",
    137: "SF",
    138: "STL",
    139: "TB",
    140: "TEX",
    141: "TOR",
    142: "MIN",
    143: "PHI",
    144: "ATL",
    145: "CWS",
    146: "MIA",
    147: "NYY",
    158: "MIL",
}

# =========================================
# Helper
# =========================================
def fetch_gamelog(group):
    url = f"https://statsapi.mlb.com/api/v1/people/{PLAYER_ID}/stats"

    params = {
        "stats": "gameLog",
        "group": group,
        "season": SEASON
    }

    res = requests.get(url, params=params)
    res.raise_for_status()

    data = res.json()

    return data["stats"][0]["splits"]


def find_today_game(games):
    for game in games:
        if game["date"] == TODAY:
            return game
    return None

# =========================================
# BATTING
# =========================================
try:
    batting_games = fetch_gamelog("hitting")
    batting = find_today_game(batting_games)

    if batting:
        stat = batting["stat"]

        team = TEAM_ABBR.get(batting["team"]["id"], "UNK")
        opp = TEAM_ABBR.get(batting["opponent"]["id"], "UNK")

        opp_display = f"vs {opp}" if batting["isHome"] else f"@ {opp}"

        row = [
            batting["date"],                    # DATE
            team,                               # TEAM
            opp_display,                        # OPP
            stat.get("atBats", 0),              # AB
            stat.get("runs", 0),                # R
            stat.get("hits", 0),                # H
            stat.get("totalBases", 0),          # TB
            stat.get("doubles", 0),             # 2B
            stat.get("triples", 0),             # 3B
            stat.get("homeRuns", 0),            # HR
            stat.get("rbi", 0),                 # RBI
            stat.get("baseOnBalls", 0),         # BB
            stat.get("intentionalWalks", 0),    # IBB
            stat.get("strikeOuts", 0),          # SO
            stat.get("stolenBases", 0),         # SB
            stat.get("caughtStealing", 0),      # CS
            stat.get("avg", ""),                # AVG
            stat.get("obp", ""),                # OBP
            stat.get("slg", ""),                # SLG
            stat.get("hitByPitch", 0),          # HBP
            stat.get("sacBunts", 0),            # SAC
            stat.get("sacFlies", 0),            # SF
        ]

        csv_line = ",".join(map(str, row))

        with open(BATTING_CSV, "a", encoding="utf-8") as f:
            f.write(csv_line + "\n")

        print("Batting added:")
        print(csv_line)

    else:
        print("No batting data today.")

except Exception as e:
    print("Batting error:", e)


# =========================================
# PITCHING
# =========================================
try:
    pitching_games = fetch_gamelog("pitching")
    pitching = find_today_game(pitching_games)

    if pitching:
        stat = pitching["stat"]

        team = TEAM_ABBR.get(pitching["team"]["id"], "UNK")
        opp = TEAM_ABBR.get(pitching["opponent"]["id"], "UNK")

        opp_display = f"vs {opp}" if pitching["isHome"] else f"@ {opp}"

        np_s = f"{stat.get('numberOfPitches', 0)}-{stat.get('strikes', 0)}"

        row = [
            pitching["date"],                       # Date
            team,                                   # Team
            opp_display,                            # OPP
            stat.get("wins", 0),                    # W
            stat.get("losses", 0),                  # L
            stat.get("era", ""),                    # ERA
            stat.get("gamesPlayed", 0),             # G
            stat.get("gamesStarted", 0),            # GS
            stat.get("completeGames", 0),           # CG
            stat.get("shutouts", 0),                # SHO
            stat.get("saves", 0),                   # SV
            stat.get("saveOpportunities", 0),       # SVO
            stat.get("inningsPitched", "0.0"),      # IP
            stat.get("hits", 0),                    # H
            stat.get("runs", 0),                    # R
            stat.get("earnedRuns", 0),              # ER
            stat.get("homeRuns", 0),                # HR
            stat.get("hitBatsmen", 0),              # HB
            stat.get("baseOnBalls", 0),             # BB
            stat.get("intentionalWalks", 0),        # IBB
            stat.get("strikeOuts", 0),              # SO
            np_s,                                   # NP-S
            stat.get("avg", ""),                    # AVG
            stat.get("whip", ""),                   # WHIP
            stat.get("groundOutsToAirouts", ""),    # GO/AO
        ]

        csv_line = ",".join(map(str, row))

        with open(PITCHING_CSV, "a", encoding="utf-8") as f:
            f.write(csv_line + "\n")

        print("Pitching added:")
        print(csv_line)

    else:
        print("No pitching data today.")

except Exception as e:
    print("Pitching error:", e)

if batting:

    _hit, _hr, _rbi, _sb, _avg= 0, 0, 0, 0, 0

    with open('C:/Users/ki401/Documents/git/github-io/sho/csv/sho26.csv') as f:
        reader = csv.reader(f)
        next(reader)
        for _g in reader:
            _hit += int(_g[5])
            _hr += int(_g[9])
            _rbi += int(_g[10])
            _sb += int(_g[14])
            _avg = str(_g[16])

            pt = 0
            if int(_g[5]) > 0: #hit
                pt += 1 * int(_g[5])
            if int(_g[9]) > 0: #hr
                pt += 2 * int(_g[9])
            elif int(_g[10]) > 0: #rbi
                pt += 1 * int(_g[10])
            if int(_g[14]) > 0: #sb
                pt += 1 * int(_g[14])

            last_score = min(pt, 4)
            last_tooltip = '(Regular Season)</br><span><strong>%s HR / %s SB</strong></span></br>%s Hits / %s RBI / AVG %s' % (_g[9], _g[14], _g[5], _g[10], _avg)
            # print(f"'{_g[0]}': '{last_tooltip}',")
            print(f"'{_g[0]}': {last_score},")

        print("Batting Score UPDATED.")

        # print(f'{_sb},')
        # print(_hit, _hr, _sb, _rbi)
        # print(f"'{_g[0]}':{last_score},")
        # print(f"'{_g[0]}': '{last_tooltip}',")
        # print(f'{_hr} HR / {_sb} SB')
        # print(f'AVG {_avg} / {_hit} HITS / {_rbi} RBI')

# pitching = 0
# with open('C:/Users/ki401/Documents/git/github-io/sho/csv/sho26p.csv') as f:
#     if _g[0] in f.read():
#         pitching = 1
#         _game, _w, _l, _ip, _er, _era, _so = 0, 0, 0, 0, 0, 0, 0

if pitching:
    _game, _w, _l, _ip, _er, _era, _so = 0, 0, 0, 0, 0, 0, 0

    with open('C:/Users/ki401/Documents/git/github-io/sho/csv/sho26p.csv') as f:
        reader = csv.reader(f)
        next(reader)
        for _p in reader:
            _game  += 1
            _w  += int(_p[3])
            _l  += int(_p[4])
            _ip += float(_p[12])
            _so += int(_p[20])
            _ip1 = int(abs(_ip) * 10) % 10
            if _ip1 == 3:
                _ip = int(_ip) + 1
            elif _ip1 == 4:
                _ip += 0.7
            _er += int(_p[15])
            _era = _p[5]

            pt = 0
            wl = '---'
            if int(_p[3]) > 0: #win
                pt += 2 * int(_p[3])
                wl = 'WIN'
            if int(_p[4]) > 0: #lose
                wl = 'LOSE'
            if float(_p[12]) > 0: #ip
                if float(_p[12]) >= 5:
                    pt += 1
                if float(_p[12]) >= 7:
                    pt += 1
                if int(_p[15])/float(_p[12])*9 < 3.5:
                    pt += 1

            last_score_p = min(pt, 4)
            last_tooltip_p = '(Regular Season)</br>%s IP / %s NP / %s R</br>%s' % (_p[12], _p[21].split('-')[0], _p[14], wl)
            # print(f"'{_p[0]}': '{last_tooltip}',")
            print(f"'{_p[0]}': {last_score_p},")

    print("Pitching Score UPDATED.")

shoHEATMAP = 'C:/Users/ki401/Documents/git/github-io/sho/sho-heatmap-demo.js'
with open(shoHEATMAP,mode='r',encoding='utf-8') as reader:
    content = reader.read()
    if batting:
        content = content.replace(
                    # "'%s': -1," % (_g[0],), 
                    '//@@TOOLTIP_DATE@@',
                    "'%s': %i,\n//@@TOOLTIP_DATE@@" % (_g[0], last_score), 
                ).replace(
                    '//@@TOOLTIP@@', 
                    "'%s': '%s',\n    //@@TOOLTIP@@" % (_g[0], last_tooltip)
                )
    if pitching:
        content = content.replace(
                # "'%s': -1," % (_p[0],), 
                '//@@TOOLTIP_DATE_P@@',
                "'%s': %i,\n//@@TOOLTIP_DATE_P@@" % (_p[0], last_score_p), 
            ).replace(
                '//@@TOOLTIP_P@@', 
                "'%s': '%s',\n    //@@TOOLTIP_P@@" % (_p[0], last_tooltip_p)
            )

with open(shoHEATMAP,mode='w',encoding='utf-8') as writer:
    writer.write(content)

shoAREA = 'C:/Users/ki401/Documents/git/github-io/sho/sho-area-demo.js'
with open(shoAREA,mode='r',encoding='utf-8') as reader:
    content = reader.read()
    content = content.replace(
                '//@@HITS@@', 
                '%s,\n//@@HITS@@' % (_hit,)
            ).replace(
                '//@@SBS@@', 
                '%s,\n//@@SBS@@' % (_sb,)
            ).replace(
                '//@@HRS@@', 
                '%s,\n//@@HRS@@' % (_hr,)
            ).replace(
                '//@@RBIS@@', 
                '%s,\n//@@RBIS@@' % (_rbi,)
            ).replace(
                '//@@TODAY@@', 
                "'%s',\n//@@TODAY@@" % (_g[0])
            )
with open(shoAREA,mode='w',encoding='utf-8') as writer:
    writer.write(content)

content = ''
shoINDEX = 'C:/Users/ki401/Documents/git/github-io/sho/index.html'
with open(shoINDEX,mode='r',encoding='utf-8') as f:
    # reader = reader(f)
    for row in f.readlines():
        if '<!-- @@SCORE1@@ -->' in row:
            content += '            <div class="display-4"> %s HR / %s SB / AVG %s / %s H / %s RBI</div><!-- @@SCORE1@@ -->\n' % (_hr, _sb, _avg, _hit, _rbi)
        elif '<!-- @@SCORE1P@@ -->' in row and pitching:
            content += '            <div class="display-4"> %s G / W-L %s-%s / ERA %s / %s IP / %s SO</div><!-- @@SCORE1P@@ -->\n' % (_game, _w, _l, _era, _ip, _so)
        elif '<!-- @@SCORE2@@ -->' in row:
            content += '\t'*9 + '<caption id="dt26gamescaption">%s HR / %s SB / %s H / %s RBI </caption><!-- @@SCORE2@@ -->\n' % (_g[9], _g[14], _g[5], _g[10])
        elif '<!-- @@SCORE2P@@ -->' in row and pitching:
            content += '\t'*9 + '<caption id="dt26pgamescaption"> W-L %s-%s / ERA %s / %s IP / %s SO</caption><!-- @@SCORE2P@@ -->\n' % (_w, _l, _era, _ip, _so)
        elif '<!-- @@HR10@@ -->' in row:
            content += '                        %s<!-- @@HR10@@ -->\n' % (_hr // 10)
        elif '<!-- @@HR01@@ -->' in row:
            content += '                        %s<!-- @@HR01@@ -->\n' % (_hr % 10)
        elif '<!-- @@SB10@@ -->' in row:
            content += '                        %s<!-- @@SB10@@ -->\n' % (_sb // 10)
        elif '<!-- @@SB01@@ -->' in row:
            content += '                        %s<!-- @@SB01@@ -->\n' % (_sb % 10)
        elif '<!-- @@WIN10@@ -->' in row and pitching:
            content += '                        %s<!-- @@WIN10@@ -->\n' % (_w // 10)
        elif '<!-- @@WIN01@@ -->' in row and pitching:
            content += '                        %s<!-- @@WIN01@@ -->\n' % (_w % 10)
        else:
            content += row
with open(shoINDEX,mode='w',encoding='utf-8') as writer:
    writer.write(content)
print('sho-HEATMAP UPDATED.')

# DATATABLESDEMO SEARCH KEYWORD UPDATE
DATATABLESDEMO = f'./sho/sho-datatables.js'
print(DATATABLESDEMO)
with open(DATATABLESDEMO,mode='r',encoding='utf-8') as reader:
    lines = reader.readlines()
    content = ''
    for line in lines:
        if '@@KEYWORD@@' in line:
            content += f"        '{_g[0]}' // @@KEYWORD@@\n"
        elif '@@KEYWORD_P@@' in line and pitching:
            content += f"        '{_g[0]}' // @@KEYWORD_P@@\n"
        else:
            content += line
with open(DATATABLESDEMO,mode='w',encoding='utf-8') as writer:
    writer.write(content)
print('DATATABLES-DEMO SEARCH KEYWORD UPDATED.')
