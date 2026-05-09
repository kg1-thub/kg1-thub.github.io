var squareLength = 18;
var _colorRange = ['#ECEFF2', '#fcc800'];

// 2026
var datas26 = {
    '2026-03-27': -1,
    '2026-03-28': 1,
    '2026-03-29': 1,
    '2026-03-31': 1,
    '2026-04-01': -1,
    '2026-04-02': 1,
    '2026-04-03': 1,
    '2026-04-04': 1,
    '2026-04-05': -1,
    '2026-04-07': 1,
    '2026-04-08': -1,
    '2026-04-09': 1,
    '2026-04-10': 1,
    '2026-04-11': 1,
    '2026-04-12': 1,
    '2026-04-14': -1,
    '2026-04-16': -1,
    '2026-04-17': 1,
    '2026-04-18': 1,
    '2026-04-19': 1,
    '2026-04-21': -1,
    '2026-04-22': -1,
    '2026-04-25': 0,
    '2026-04-26': 1,
    '2026-04-28': -1,
    '2026-04-29': 1,
    '2026-04-30': 1,
    '2026-05-01': -1,
    '2026-05-02': 1,
    '2026-05-03': 1,
    '2026-05-04': -1,
    '2026-05-05': -1,
    '2026-05-06': 1,
    '2026-05-08': -1,
    '2026-05-09': -1,
    //@@NEXTGAME@@
};
var score26 = {
    '2026-03-27': 'vs Giants , 3-1 </br>Start P.村上 / C.坂本',
    '2026-03-28': 'vs Giants , 0-2 </br>Start P.高橋 / C.伏見',
    '2026-03-29': 'vs Giants , 6-12 </br>Start P.伊藤 / C.伏見',
    '2026-03-31': 'vs Baystars , 4-1 </br>Start P.才木 / C.坂本',
    '2026-04-01': 'vs Baystars , 1-4 </br>Start P.ルーカス / C.伏見',
    '2026-04-02': 'vs Baystars , 4-3 </br>Start P.伊原 / C.坂本',
    '2026-04-03': 'vs Carp , 2-4 </br>Start P.村上 / C.坂本',
    '2026-04-04': 'vs Carp , 5-7 </br>Start P.大竹 / C.坂本',
    '2026-04-05': 'vs Carp , 2-1 </br>Start P.高橋 / C.伏見',
    '2026-04-07': 'vs Swallows , 9-3 </br>Start P.才木 / C.坂本',
    '2026-04-08': 'vs Swallows , 2-3 </br>Start P.ルーカス / C.坂本',
    '2026-04-09': 'vs Swallows , 2-0 </br>Start P.茨木 / C.坂本',
    '2026-04-10': 'vs Dragons , 3-5 </br>Start P.村上 / C.坂本',
    '2026-04-11': 'vs Dragons , 3-9 </br>Start P.伊原 / C.伏見',
    '2026-04-12': 'vs Dragons , 0-3 </br>Start P.高橋 / C.伏見',
    '2026-04-14': 'vs Giants , 3-4 </br>Start P.才木 / C.坂本',
    '2026-04-16': 'vs Giants , 3-4 </br>Start P.ルーカス / C.坂本',
    '2026-04-17': 'vs Dragons , 2-1 </br>Start P.村上 / C.坂本',
    '2026-04-18': 'vs Dragons , 4-3 </br>Start P.大竹 / C.坂本',
    '2026-04-19': 'vs Dragons , 7-5 </br>Start P.伊原 / C.伏見',
    '2026-04-21': 'vs Baystars , 16-9 </br>Start P.才木 / C.坂本',
    '2026-04-22': 'vs Baystars , 7-6 </br>Start P.茨木 / C.坂本',
    '2026-04-25': 'vs Carp , 2-2 </br>Start P.村上 / C.坂本',
    '2026-04-26': 'vs Carp , 1-0 </br>Start P.大竹 / C.坂本',
    '2026-04-28': 'vs Swallows , 10-5 </br>Start P.才木 / C.坂本',
    '2026-04-29': 'vs Swallows , 0-2 </br>Start P.高橋 / C.伏見',
    '2026-04-30': 'vs Swallows , 2-10 </br>Start P.西 / C.伏見',
    '2026-05-01': 'vs Giants , 3-5 </br>Start P.村上 / C.坂本',
    '2026-05-02': 'vs Giants , 7-5 </br>Start P.大竹 / C.伏見',
    '2026-05-03': 'vs Giants , 3-0 </br>Start P.才木 / C.梅野',
    '2026-05-04': 'vs Dragons , 7-3 </br>Start P.門別 / C.伏見',
    '2026-05-05': 'vs Dragons , 7-3 </br>Start P.早川 / C.梅野',
    '2026-05-06': 'vs Dragons , 0-2 </br>Start P.高橋 / C.伏見',
    '2026-05-08': 'vs Baystars , 1-10 </br>Start P.村上 / C.伏見',
    '2026-05-09': 'vs Baystars , 1-3 </br>Start P.大竹 / C.坂本',
    //@@NEXTSCORE@@
};
var chartData26 = [];
for (var d in datas26) {
    chartData26.push({
        date: moment(d, 'YYYY-MM-DD').startOf('day').toDate(),
        count: datas26[d],
        score: score26[d],
    });
};
var heatmap26 = calendarHeatmap()
  .data(chartData26)
  .startDate('2026-03-23')
  .endDate('2026-10-31')
  .selector('#calmap26t')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap26();  // render the chart
