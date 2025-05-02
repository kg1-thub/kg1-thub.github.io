var squareLength = 18;
var _colorRange = ['#ECEFF2', '#fcc800'];

// 2025
var datas25 = {
    '2025-03-28': -1,
    '2025-03-29': -1,
    '2025-03-30': -1,
    '2025-04-01': 1,
    '2025-04-02': -1,
    '2025-04-04': -1,
    '2025-04-05': -1,
    '2025-04-06': 1,
    '2025-04-08': 1,
    '2025-04-09': 1,
    '2025-04-10': 0,
    '2025-04-11': 1,
    '2025-04-12': 1,
    '2025-04-15': -1,
    '2025-04-16': -1,
    '2025-04-17': -1,
    '2025-04-18': -1,
    '2025-04-19': -1,
    '2025-04-20': 1,
    '2025-04-22': 0,
    '2025-04-23': 1,
    '2025-04-25': 1,
    '2025-04-26': -1,
    '2025-04-27': -1,
    '2025-04-29': -1,
    '2025-04-30': -1,
    '2025-05-01': -1,
    '2025-05-02': 1,
    //@@NEXTGAME@@
};
var score25 = {
    '2025-03-28': 'vs Marines , 2-8 </br>Start P.有原 / C.谷川原',
    '2025-03-29': 'vs Marines , 4-5 </br>Start P.大関 / C.海野',
    '2025-03-30': 'vs Marines , 4-7 </br>Start P.上沢 / C.海野',
    '2025-04-01': 'vs Fighters , 1-5 </br>Start P.モイネロ / C.海野',
    '2025-04-02': 'vs Fighters , 3-1 </br>Start P.前田 / C.谷川原',
    '2025-04-04': 'vs Lions , 0-6 </br>Start P.有原 / C.谷川原',
    '2025-04-05': 'vs Lions , 3-6 </br>Start P.大関 / C.海野',
    '2025-04-06': 'vs Lions , 11-1 </br>Start P.上沢 / C.海野',
    '2025-04-08': 'vs Buffaloes , 2-5 </br>Start P.モイネロ / C.海野',
    '2025-04-09': 'vs Buffaloes , 9-10 </br>Start P.大津 / C.海野',
    '2025-04-10': 'vs Buffaloes , 1-1 </br>Start P.前田 / C.渡邉',
    '2025-04-11': 'vs Marines , 4-5 </br>Start P.有原 / C.海野',
    '2025-04-12': 'vs Marines , 0-8 </br>Start P.大関 / C.海野',
    '2025-04-15': 'vs Eagles , 1-2 </br>Start P.モイネロ / C.海野',
    '2025-04-16': 'vs Eagles , 2-6 </br>Start P.上沢 / C.海野',
    '2025-04-17': 'vs Eagles , 3-4 </br>Start P.前田 / C.渡邉',
    '2025-04-18': 'vs Lions , 2-1 </br>Start P.有原 / C.海野',
    '2025-04-19': 'vs Lions , 1-0 </br>Start P.大関 / C.海野',
    '2025-04-20': 'vs Lions , 1-3 </br>Start P.東浜 / C.嶺井',
    '2025-04-22': 'vs Buffaloes , 5-5 </br>Start P.モイネロ / C.海野',
    '2025-04-23': 'vs Buffaloes , 6-2 </br>Start P.上沢 / C.海野',
    '2025-04-25': 'vs Eagles , 0-1 </br>Start P.有原 / C.海野',
    '2025-04-26': 'vs Eagles , 6-3 </br>Start P.大関 / C.海野',
    '2025-04-27': 'vs Eagles , 3-2 </br>Start P.前田 / C.渡邉',
    '2025-04-29': 'vs Fighters , 1-2 </br>Start P.モイネロ / C.海野',
    '2025-04-30': 'vs Fighters , 1-6 </br>Start P.東浜 / C.嶺井',
    '2025-05-01': 'vs Fighters , 2-3 </br>Start P.上沢 / C.嶺井',
    '2025-05-02': 'vs Marines , 4-3 </br>Start P.有原 / C.海野',
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
  .selector('#calmap25h')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap25();  // render the chart
