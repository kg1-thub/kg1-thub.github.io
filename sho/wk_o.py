import requests
from datetime import datetime, timedelta
import pytz

PLAYER_ID = 660271  # ohtani number
SEASON = 2026

BATTING_CSV  = "sho\csv\sho26.csv"
PITCHING_CSV = "sho\csv\sho26p.csv"

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
