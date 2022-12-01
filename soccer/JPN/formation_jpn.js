// Area Chart 2022
var Columns_MEMBER = ['Pos','No','Name','H/W'];
var JPN_MEMBER = [
  {'Pos': 'GK', 'No': '1', 'Name': '川島 永嗣', 'Team': 'ストラスブール', 'BD': '1983/03/20', 'H/W': '185/82', 'BP': '埼玉'},
  {'Pos': 'GK', 'No': '12', 'Name': '権田 修一', 'Team': '清水エスパルス', 'BD': '1989/03/03', 'H/W': '187/84', 'BP': '東京'},
  {'Pos': 'GK', 'No': '23', 'Name': 'シュミット ダニエル', 'Team': 'シントトロイデン', 'BD': '1992/02/03', 'H/W': '197/88', 'BP': 'アメリカ'},
  {'Pos': 'DF', 'No': '2', 'Name': '山根 視来', 'Team': '川崎フロンターレ', 'BD': '1993/12/22', 'H/W': '178/72', 'BP': '神奈川'},
  {'Pos': 'DF', 'No': '3', 'Name': '谷口 彰悟', 'Team': '川崎フロンターレ', 'BD': '1991/07/15', 'H/W': '183/75', 'BP': '熊本'},
  {'Pos': 'DF', 'No': '4', 'Name': '板倉 滉', 'Team': 'ボルシアMG', 'BD': '1997/01/27', 'H/W': '186/75', 'BP': '神奈川'},
  {'Pos': 'DF', 'No': '5', 'Name': '長友 佑都', 'Team': 'FC東京', 'BD': '1986/09/12', 'H/W': '170/68', 'BP': '愛媛'},
  {'Pos': 'DF', 'No': '16', 'Name': '冨安 健洋', 'Team': 'アーセナル', 'BD': '1998/11/05', 'H/W': '187/84', 'BP': '福岡'},
  {'Pos': 'DF', 'No': '19', 'Name': '酒井 宏樹', 'Team': '浦和レッズ', 'BD': '1990/04/12', 'H/W': '185/78', 'BP': '長野'},
  {'Pos': 'DF', 'No': '22', 'Name': '吉田 麻也', 'Team': 'シャルケ04', 'BD': '1988/08/24', 'H/W': '189/87', 'BP': '長崎'},
  {'Pos': 'DF', 'No': '26', 'Name': '伊藤 洋輝', 'Team': 'シュツットガルト', 'BD': '1999/05/12', 'H/W': '186/78', 'BP': '静岡'},
  {'Pos': 'MF', 'No': '6', 'Name': '遠藤 航', 'Team': 'シュツットガルト', 'BD': '1993/02/09', 'H/W': '178/76', 'BP': '神奈川'},
  {'Pos': 'MF', 'No': '7', 'Name': '柴崎 岳', 'Team': 'レガネス', 'BD': '1992/05/28', 'H/W': '175/64', 'BP': '青森'},
  {'Pos': 'MF', 'No': '8', 'Name': '堂安 律', 'Team': 'フライブルク', 'BD': '1998/06/16', 'H/W': '172/70', 'BP': '兵庫'},
  {'Pos': 'MF', 'No': '9', 'Name': '三笘 薫', 'Team': 'ブライトン', 'BD': '1997/05/20', 'H/W': '178/73', 'BP': '神奈川'},
  {'Pos': 'MF', 'No': '10', 'Name': '南野 拓実', 'Team': 'モナコ', 'BD': '1995/01/16', 'H/W': '174/68', 'BP': '大阪'},
  {'Pos': 'MF', 'No': '11', 'Name': '久保 建英', 'Team': 'ソシエダ', 'BD': '2001/06/04', 'H/W': '173/67', 'BP': '神奈川'},
  {'Pos': 'MF', 'No': '13', 'Name': '守田 英正', 'Team': 'スポルティング', 'BD': '1995/05/10', 'H/W': '177/74', 'BP': '大阪'},
  {'Pos': 'MF', 'No': '14', 'Name': '伊東 純也', 'Team': 'スタッドランス', 'BD': '1993/03/09', 'H/W': '176/66', 'BP': '神奈川'},
  {'Pos': 'MF', 'No': '15', 'Name': '鎌田 大地', 'Team': 'フランクフルト', 'BD': '1996/08/05', 'H/W': '180/72', 'BP': '愛媛'},
  {'Pos': 'MF', 'No': '17', 'Name': '田中 碧', 'Team': 'デュッセルドルフ', 'BD': '1998/09/10', 'H/W': '180/75', 'BP': '神奈川'},
  {'Pos': 'MF', 'No': '24', 'Name': '相馬 勇紀', 'Team': '名古屋グランパス', 'BD': '1997/02/25', 'H/W': '166/68', 'BP': '東京'},
  {'Pos': 'FW', 'No': '18', 'Name': '浅野 拓磨', 'Team': 'ボーフム', 'BD': '1994/11/10', 'H/W': '173/71', 'BP': '三重'},
  {'Pos': 'FW', 'No': '20', 'Name': '町野 修斗', 'Team': '湘南ベルマーレ', 'BD': '1999/09/30', 'H/W': '185/77', 'BP': '三重'},
  {'Pos': 'FW', 'No': '21', 'Name': '上田 綺世', 'Team': 'セルクルブルージュ', 'BD': '1998/08/28', 'H/W': '182/76', 'BP': '茨城'},
  {'Pos': 'FW', 'No': '25', 'Name': '前田 大然', 'Team': 'セルティック', 'BD': '1997/10/20', 'H/W': '173/67', 'BP': '大阪'},
];


var play_full = '#140259';
var play_change = '#2804ae';
var JPN_PLAYER_GS1_V1 = [
  {'No':25, 'name': '前田', 'pos':{x:50,y:90,r:15}, 'game':['57\' ▼OUT, ▲IN 浅野', '82\' GOAL!'], 'bgcolor':play_full, 'play': 57},
  {'No':11, 'name': '久保', 'pos':{x:40,y:70,r:15}, 'game':['45\' ▼OUT, ▲IN 富安'], 'bgcolor':play_full, 'play': 45},
  {'No':15, 'name': '鎌田', 'pos':{x:50,y:70,r:15}, 'game':[], 'bgcolor':play_full, 'play': 90},
  {'No':14, 'name': '伊東', 'pos':{x:60,y:70,r:15}, 'game':[], 'bgcolor':play_full, 'play': 90},
  {'No':17, 'name': '田中', 'pos':{x:45,y:50,r:15}, 'game':['71\' ▼OUT, ▲IN 堂安', '75\' GOAL!'], 'bgcolor':play_full, 'play': 71},
  {'No':6,  'name': '遠藤', 'pos':{x:55,y:50,r:15}, 'game':[], 'bgcolor':play_full, 'play':90},
  {'No':5, 'name': '長友', 'pos':{x:35,y:30,r:15}, 'game':['57\' ▼OUT, ▲IN 三苫'], 'bgcolor':play_full, 'play': 57},
  {'No':4, 'name': '板倉', 'pos':{x:55,y:30,r:15}, 'game':[], 'bgcolor':play_full, 'play': 90},
  {'No':22, 'name': '吉田', 'pos':{x:45,y:30,r:15}, 'game':[], 'bgcolor':play_full, 'play': 90},
  {'No':19, 'name': '酒井', 'pos':{x:65,y:30,r:15}, 'game':['73\' ▼OUT, ▲IN 南野'], 'bgcolor':play_full, 'play': 73},
  {'No':12, 'name': '権田', 'pos':{x:50,y:10,r:15}, 'game':[], 'bgcolor':play_full, 'play': 90},
];
var JPN_PLAYER_GS1_V2 = [
  {'No':16, 'name': '富安', 'pos':{x:40,y:30,r:15}, 'game':['45\' ▼OUT, ▲IN 富安'], 'bgcolor':play_full, 'play': 45},
];
var JPN_PLAYER_GS1_V3 = [
  {'No':18, 'name': '浅野', 'pos':{x:50,y:90,r:15}, 'game':['57\' ▼OUT, ▲IN', '82\' GOAL!'], 'bgcolor':play_full, 'play': 33},
  {'No':9, 'name': '三苫', 'pos':{x:30,y:40,r:15}, 'game':['57\' ▼OUT, ▲IN 三苫'], 'bgcolor':play_full, 'play': 33},
];
var JPN_PLAYER_GS1_V4 = [
  {'No':17, 'name': '堂安', 'pos':{x:60,y:70,r:15}, 'game':['71\' ▼OUT 田中, ▲IN','75\' GOAL!'], 'bgcolor':play_full, 'play': 19},
];
var JPN_PLAYER_GS1_V5 = [
  {'No':19, 'name': '南野', 'pos':{x:40,y:70,r:15}, 'game':['73\' ▼OUT 酒井, ▲IN'], 'bgcolor':play_full, 'play': 17},
];
var JPN_PLAYER_GS2_V1 = [
  {'No':25, 'name': '上田', 'pos':{x:50,y:90,r:15}, 'game':['45\' ▼OUT, ▲IN 浅野'], 'bgcolor':play_full, 'play': 45},
  {'No':24, 'name': '相馬', 'pos':{x:40,y:70,r:15}, 'game':['82\' ▼OUT, ▲IN 南野'], 'bgcolor':play_full, 'play': 82},
  {'No':15, 'name': '鎌田', 'pos':{x:50,y:70,r:15}, 'game':[], 'bgcolor':play_full, 'play': 90},
  {'No':14, 'name': '堂安', 'pos':{x:60,y:70,r:15}, 'game':['67\' ▼OUT, ▲IN 伊東'], 'bgcolor':play_full, 'play': 67},
  {'No':17, 'name': '守田', 'pos':{x:45,y:50,r:15}, 'game':[], 'bgcolor':play_full, 'play': 71},
  {'No':6,  'name': '遠藤', 'pos':{x:55,y:50,r:15}, 'game':[], 'bgcolor':play_full, 'play':90},
  {'No':5, 'name': '長友', 'pos':{x:35,y:30,r:15}, 'game':['45\' ▼OUT, ▲IN 伊藤'], 'bgcolor':play_full, 'play': 45},
  {'No':4, 'name': '板倉', 'pos':{x:55,y:30,r:15}, 'game':[], 'bgcolor':play_full, 'play': 90},
  {'No':22, 'name': '吉田', 'pos':{x:45,y:30,r:15}, 'game':[], 'bgcolor':play_full, 'play': 90},
  {'No':19, 'name': '山根', 'pos':{x:65,y:30,r:15}, 'game':['62\' ▼OUT, ▲IN 三苫'], 'bgcolor':play_full, 'play': 62},
  {'No':12, 'name': '権田', 'pos':{x:50,y:10,r:15}, 'game':[], 'bgcolor':play_full, 'play': 90},
];
var JPN_PLAYER_GS2_V2 = [
  {'No':25, 'name': '浅野', 'pos':{x:50,y:90,r:15}, 'game':['45\' ▼OUT 上田, ▲IN'], 'bgcolor':play_full, 'play': 45},
  {'No':5, 'name': '伊藤', 'pos':{x:35,y:30,r:15}, 'game':['45\' ▼OUT 長友, ▲IN'], 'bgcolor':play_full, 'play': 45},
];
var JPN_PLAYER_GS2_V3 = [
  {'No':19, 'name': '三苫', 'pos':{x:65,y:30,r:15}, 'game':['62\' ▼OUT 山根, ▲IN'], 'bgcolor':play_full, 'play': 28},
];
var JPN_PLAYER_GS2_V4 = [
  {'No':19, 'name': '伊東', 'pos':{x:65,y:30,r:15}, 'game':['67\' ▼OUT 堂安, ▲IN'], 'bgcolor':play_full, 'play': 23},
];
var JPN_PLAYER_GS2_V5 = [
  {'No':19, 'name': '南野', 'pos':{x:65,y:30,r:15}, 'game':['82\' ▼OUT 相馬, ▲IN'], 'bgcolor':play_full, 'play': 8},
];

var JPN_PLAYER = [
// var JPN_PLAYER_GS3_V1 = [
  {'No':25, 'name': '前田', 'pos':{x:50,y:90,r:15}, 'game':['57\' ▼OUT, ▲IN 浅野', '82\' GOAL!'], 'bgcolor':play_full, 'play': 57},
  {'No':11, 'name': '久保', 'pos':{x:65,y:70,r:15}, 'game':['45\' ▼OUT, ▲IN 富安'], 'bgcolor':play_full, 'play': 45},
  {'No':15, 'name': '鎌田', 'pos':{x:35,y:70,r:15}, 'game':[], 'bgcolor':play_full, 'play': 90},
  {'No':14, 'name': '伊東', 'pos':{x:70,y:50,r:15}, 'game':[], 'bgcolor':play_full, 'play': 90},
  {'No':17, 'name': '田中', 'pos':{x:45,y:50,r:15}, 'game':['71\' ▼OUT, ▲IN 堂安', '75\' GOAL!'], 'bgcolor':play_full, 'play': 71},
  {'No':13,  'name': '守田', 'pos':{x:55,y:50,r:15}, 'game':[], 'bgcolor':play_full, 'play':90},
  {'No':5, 'name': '長友', 'pos':{x:30,y:50,r:15}, 'game':['57\' ▼OUT, ▲IN 三苫'], 'bgcolor':play_full, 'play': 57},
  {'No':3, 'name': '谷口', 'pos':{x:40,y:30,r:15}, 'game':['73\' ▼OUT, ▲IN 南野'], 'bgcolor':play_full, 'play': 73},
  {'No':22, 'name': '吉田', 'pos':{x:50,y:30,r:15}, 'game':[], 'bgcolor':play_full, 'play': 90},
  {'No':4, 'name': '板倉', 'pos':{x:60,y:30,r:15}, 'game':[], 'bgcolor':play_full, 'play': 90},
  {'No':12, 'name': '権田', 'pos':{x:50,y:10,r:15}, 'game':[], 'bgcolor':play_full, 'play': 90},
];
var JPN_PLAYER_GS3_V2 = [
  {'No':25, 'name': '三苫', 'pos':{x:50,y:90,r:15}, 'game':['45\' ▼OUT 上田, ▲IN'], 'bgcolor':play_full, 'play': 45},
  {'No':5, 'name': '堂安', 'pos':{x:35,y:30,r:15}, 'game':['45\' ▼OUT 長友, ▲IN'], 'bgcolor':play_full, 'play': 45},
];
// asano() 16 tomiyasu 23 endo(tanaka) 42

// Chart.register(annotationPlugin);
Chart.register(ChartDataLabels);
console.log(JPN_PLAYER[0].name);
var ctx_formation_jpn_GS1_div1 = document.getElementById("JPNFormationGS1div1");
var formation_jpn = new Chart(ctx_formation_jpn_GS1_div1, {
  type: 'bubble',
  data: {
    datasets: [
      {
        label: 'GK',
        data: [{x:5,y:10,r:0}],
        datalabels: {
          color: 'white',
          formatter: function(){
            return 'GK';
          },
          font: {
            size: 18,
            weight: 'bold',
          },
        }
      },
      {
        label: 'DF',
        data: [{x:5,y:30,r:0}],
        datalabels: {
          color: 'white',
          formatter: function(){
            return 'DF';
          },
          font: {
            size: 18,
            weight: 'bold',
          },
        }
      },
      {
        label: 'MF',
        data: [{x:5,y:60,r:0}],
        datalabels: {
          color: 'white',
          formatter: function(){
            return 'MF';
          },
          font: {
            size: 18,
            weight: 'bold',
          },
        }
      },
      {
        label: 'FW',
        data: [{x:5,y:90,r:0}],
        datalabels: {
          color: 'white',
          formatter: function(){
            return 'FW';
          },
          font: {
            size: 18,
            weight: 'bold',
          },
        }
      },
      {
        label: '交代',
        data: [{x:95,y:100,r:0}],
        datalabels: {
          color: 'white',
          formatter: function(){
            return '交代';
          },
          font: {
            size: 18,
            weight: 'bold',
          },
        }
      },
    ],
  },
  options: {
    elements: {
      point: {
        backgroundColor: 'pink'
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
            label: function(context) {
                let label = context.dataset.label || '';
                return label;
            }
        }
    },
      legend: false,
    },
    legend:{
      display: true,
    },
    scales: {
      x: {
        display: false,
        min: 0,
        max: 100,
      },
      y: {
        display: false,
        min: 0,
        max: 100,
      },
    }
  }
}
);

for (let i=0; i < JPN_PLAYER.length; i++) {
  var _label = [JPN_PLAYER[i].No+JPN_PLAYER[i].name+' ('+JPN_PLAYER[i].play+'min.)'];
  for (let j=0; j<JPN_PLAYER[i].game.length;j++) {
    _label.push(JPN_PLAYER[i].game[j]);
  };
  var record = {
      label: _label,
      data: [JPN_PLAYER[i].pos],
      backgroundColor: JPN_PLAYER[i].bgcolor,
      datalabels: {
        color: 'white',
        formatter: function(){
          return JPN_PLAYER[i].name;
        }
      }
    };
    formation_jpn.data.datasets.push(record);
};
window.formation_jpn.update();



// dt22games
function makeCSV(json_records, columns, team) {
  const divtable = document.getElementById(`${team}Member`);

  const divthead = document.createElement("thead");
  divtable.appendChild(divthead);
  const divtheadr = document.createElement("tr");
  divthead.appendChild(divtheadr);
  for (var j = 0; j < columns.length; j++) {
      let divth = document.createElement("th");
      divth.textContent = columns[j];
      divtheadr.appendChild(divth);
  }

  const divtbody = document.createElement("tbody");
  divtable.appendChild(divtbody);
  for (var i = 0; i < json_records.length; i++) {
      let divtr = document.createElement("tr");
      divtbody.appendChild(divtr);
      for (var j = 0; j < columns.length; j++) {
          let divtd = document.createElement("td");
          divtd.textContent = json_records[i][columns[j]];
          divtr.appendChild(divtd);
      }
  }

  $(document).ready(function() {
      $(`${team}Member`).DataTable({
        order: [[ 0, "asc" ]],
        columnDefs: [
          { targets: 0 },
          { targets: 1 },
          { targets: 2 },
          { targets: 3 },
        ],
        lengthMenu: [ 10, 30, 50 ],
        mark: true,
      })
    });
};

{
  makeCSV(JPN_MEMBER, Columns_MEMBER, 'JPN')
}
