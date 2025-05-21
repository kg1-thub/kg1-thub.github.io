var squareLength = 18;
var _colorRange = ['#ECEFF2', '#ff8000'];

// 2025
var datas25 = {
    '2025-03-28': 1,
    '2025-03-29': 1,
    '2025-03-30': 1,
    '2025-04-01': -1,
    '2025-04-02': 1,
    '2025-04-03': 1,
    '2025-04-04': -1,
    '2025-04-05': -1,
    '2025-04-06': -1,
    '2025-04-08': 0,
    '2025-04-09': 1,
    '2025-04-11': -1,
    '2025-04-12': -1,
    '2025-04-13': -1,
    '2025-04-15': 1,
    '2025-04-16': 1,
    '2025-04-17': -1,
    '2025-04-18': 1,
    '2025-04-19': 1,
    '2025-04-20': -1,
    '2025-04-22': 1,
    '2025-04-23': 1,
    '2025-04-25': -1,
    '2025-04-26': -1,
    '2025-04-27': 1,
    '2025-04-29': 1,
    '2025-04-30': 1,
    '2025-05-01': 1,
    '2025-05-03': -1,
    '2025-05-04': 1,
    '2025-05-05': -1,
    '2025-05-06': -1,
    '2025-05-07': 1,
    '2025-05-09': -1,
    '2025-05-10': 1,
    '2025-05-11': -1,
    '2025-05-13': -1,
    '2025-05-14': -1,
    '2025-05-15': -1,
    '2025-05-16': 1,
    '2025-05-17': 1,
    '2025-05-18': -1,
    '2025-05-20': -1,
    '2025-05-21': 1,
    //@@NEXTGAME@@
};
var score25 = {
    '2025-03-28': 'vs Swallows , 6-5 </br>Start P.戸郷 / C.甲斐',
    '2025-03-29': 'vs Swallows , 12-0 </br>Start P.赤星 / C.甲斐',
    '2025-03-30': 'vs Swallows , 3-0 </br>Start P.石川 / C.甲斐',
    '2025-04-01': 'vs Dragons , 3-2 </br>Start P.井上 / C.甲斐',
    '2025-04-02': 'vs Dragons , 0-2 </br>Start P.山崎 / C.甲斐',
    '2025-04-03': 'vs Dragons , 3-5 </br>Start P.田中 / C.甲斐',
    '2025-04-04': 'vs Tigers , 2-7 </br>Start P.戸郷 / C.甲斐',
    '2025-04-05': 'vs Tigers , 3-4 </br>Start P.赤星 / C.甲斐',
    '2025-04-06': 'vs Tigers , 0-1 </br>Start P.石川 / C.甲斐',
    '2025-04-08': 'vs Baystars , 3-3 </br>Start P.井上 / C.甲斐',
    '2025-04-09': 'vs Baystars , 3-6 </br>Start P.山崎 / C.甲斐',
    '2025-04-11': 'vs Carp , 12-3 </br>Start P.戸郷 / C.甲斐',
    '2025-04-12': 'vs Carp , 1-0 </br>Start P.赤星 / C.甲斐',
    '2025-04-13': 'vs Carp , 5-3 </br>Start P.石川 / C.甲斐',
    '2025-04-15': 'vs Baystars , 1-0 </br>Start P.井上 / C.甲斐',
    '2025-04-16': 'vs Baystars , 5-0 </br>Start P.山崎 / C.甲斐',
    '2025-04-17': 'vs Baystars , 1-9 </br>Start P.田中 / C.甲斐',
    '2025-04-18': 'vs Swallows , 2-7 </br>Start P.赤星 / C.甲斐',
    '2025-04-19': 'vs Swallows , 4-6 </br>Start P.石川 / C.甲斐',
    '2025-04-20': 'vs Swallows , 3-2 </br>Start P.ケラー / C.甲斐',
    '2025-04-22': 'vs Dragons , 8-1 </br>Start P.井上 / C.甲斐',
    '2025-04-23': 'vs Dragons , 2-0 </br>Start P.山崎 / C.甲斐',
    '2025-04-25': 'vs Tigers , 4-1 </br>Start P.赤星 / C.甲斐',
    '2025-04-26': 'vs Tigers , 6-2 </br>Start P.石川 / C.甲斐',
    '2025-04-27': 'vs Tigers , 1-2 </br>Start P.堀田 / C.甲斐',
    '2025-04-29': 'vs Carp , 4-3 </br>Start P.井上 / C.甲斐',
    '2025-04-30': 'vs Carp , 2-0 </br>Start P.山崎 / C.甲斐',
    '2025-05-01': 'vs Carp , 4-3 </br>Start P.田中 / C.甲斐',
    '2025-05-03': 'vs Baystars , 1-0 </br>Start P.赤星 / C.甲斐',
    '2025-05-04': 'vs Baystars , 1-3 </br>Start P.グリフィン / C.岸田',
    '2025-05-05': 'vs Tigers , 1-10 </br>Start P.戸郷 / C.大城',
    '2025-05-06': 'vs Tigers , 1-7 </br>Start P.井上 / C.甲斐',
    '2025-05-07': 'vs Tigers , 6-4 </br>Start P.山崎 / C.甲斐',
    '2025-05-09': 'vs Swallows , 5-2 </br>Start P.赤星 / C.甲斐',
    '2025-05-10': 'vs Swallows , 2-3 </br>Start P.グリフィン / C.岸田',
    '2025-05-11': 'vs Swallows , 2-1 </br>Start P.堀田 / C.甲斐',
    '2025-05-13': 'vs Carp , 5-4 </br>Start P.戸郷 / C.大城',
    '2025-05-14': 'vs Carp , 3-0 </br>Start P.井上 / C.甲斐',
    '2025-05-15': 'vs Carp , 5-1 </br>Start P.山崎 / C.甲斐',
    '2025-05-16': 'vs Dragons , 4-2 </br>Start P.赤星 / C.甲斐',
    '2025-05-17': 'vs Dragons , 1-0 </br>Start P.グリフィン / C.岸田',
    '2025-05-18': 'vs Dragons , 4-7 </br>Start P.堀田 / C.甲斐',
    '2025-05-20': 'vs Tigers , 4-0 </br>Start P.戸郷 / C.岸田',
    '2025-05-21': 'vs Tigers , 4-5 </br>Start P.井上 / C.甲斐',
    //@@NEXTSCORE@@
};
var chartData25 = [];
for (var d in datas25) {
    chartData25.push({
        date: moment(d, 'YYYY-MM-DD').startOf('day').toDate(),
        count: datas25[d],
        score: score25[d],
    });
};
var heatmap25 = calendarHeatmap()
  .data(chartData25)
  .startDate('2025-03-28')
  .endDate('2025-10-31')
  .selector('#calmap25g')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap25();  // render the chart
