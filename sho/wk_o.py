import requests
import pandas as pd
from datetime import datetime

player_id = 660271

url = f"https://statsapi.mlb.com/api/v1/people/{player_id}/stats"

params = {
    "stats": "gameLog",
    "group": "hitting",
    "season": 2026
}

res = requests.get(url, params=params)
data = res.json()
print(data)
