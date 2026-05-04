var squareLength = 18;
var _colorRange = ['#ECEFF2', '#fcc800'];

// 2026
var datas26 = {
    '2026-03-27': 1,
    '2026-03-28': 1,
    '2026-03-29': 1,
    '2026-03-31': 1,
    '2026-04-01': 1,
    '2026-04-02': -1,
    '2026-04-03': -1,
    '2026-04-04': 1,
    '2026-04-05': 1,
    '2026-04-07': -1,
    '2026-04-08': -1,
    '2026-04-09': 1,
    '2026-04-11': 1,
    '2026-04-12': 1,
    '2026-04-14': -1,
    '2026-04-15': -1,
    '2026-04-16': 1,
    '2026-04-17': -1,
    '2026-04-18': 1,
    '2026-04-19': -1,
    '2026-04-21': -1,
    '2026-04-22': -1,
    '2026-04-23': 1,
    '2026-04-25': -1,
    '2026-04-28': 1,
    '2026-04-29': -1,
    '2026-05-01': 1,
    '2026-05-02': 1,
    '2026-05-03': -1,
    '2026-05-04': -1,
    //@@NEXTGAME@@
};
var score26 = {
    '2026-03-27': 'vs Fighters , 6-5 </br>Start P.上沢 / C.海野',
    '2026-03-28': 'vs Fighters , 6-4 </br>Start P.松本 / C.海野',
    '2026-03-29': 'vs Fighters , 8-4 </br>Start P.ｽﾁｭﾜｰﾄ.J / C.谷川原',
    '2026-03-31': 'vs Eagles , 2-4 </br>Start P.大関 / C.海野',
    '2026-04-01': 'vs Eagles , 1-6 </br>Start P.徐 / C.海野',
    '2026-04-02': 'vs Eagles , 5-4 </br>Start P.大津 / C.海野',
    '2026-04-03': 'vs Marines , 3-2 </br>Start P.上沢 / C.海野',
    '2026-04-04': 'vs Marines , 2-5 </br>Start P.松本 / C.海野',
    '2026-04-05': 'vs Marines , 3-4 </br>Start P.ｽﾁｭﾜｰﾄ.J / C.谷川原',
    '2026-04-07': 'vs Lions , 6-8 </br>Start P.大関 / C.海野',
    '2026-04-08': 'vs Lions , 1-2 </br>Start P.徐 / C.海野',
    '2026-04-09': 'vs Lions , 2-0 </br>Start P.大津 / C.海野',
    '2026-04-11': 'vs Fighters , 3-6 </br>Start P.上沢 / C.海野',
    '2026-04-12': 'vs Fighters , 7-11 </br>Start P.松本 / C.海野',
    '2026-04-14': 'vs Eagles , 2-3 </br>Start P.ｽﾁｭﾜｰﾄ.J / C.谷川原',
    '2026-04-15': 'vs Eagles , 2-3 </br>Start P.大関 / C.海野',
    '2026-04-16': 'vs Eagles , 6-0 </br>Start P.大津 / C.海野',
    '2026-04-17': 'vs Buffaloes , 4-13 </br>Start P.徐 / C.谷川原',
    '2026-04-18': 'vs Buffaloes , 7-0 </br>Start P.上沢 / C.海野',
    '2026-04-19': 'vs Buffaloes , 1-2 </br>Start P.松本 / C.海野',
    '2026-04-21': 'vs Lions , 6-4 </br>Start P.ｽﾁｭﾜｰﾄ.J / C.谷川原',
    '2026-04-22': 'vs Lions , 3-1 </br>Start P.大関 / C.海野',
    '2026-04-23': 'vs Lions , 3-4 </br>Start P.大津 / C.海野',
    '2026-04-25': 'vs Marines , 0-5 </br>Start P.上沢 / C.海野',
    '2026-04-28': 'vs Buffaloes , 1-7 </br>Start P.松本 / C.海野',
    '2026-04-29': 'vs Buffaloes , 5-4 </br>Start P.大関 / C.海野',
    '2026-05-01': 'vs Eagles , 4-1 </br>Start P.上沢 / C.海野',
    '2026-05-02': 'vs Eagles , 5-0 </br>Start P.大津 / C.海野',
    '2026-05-03': 'vs Eagles , 0-7 </br>Start P.前田 / C.渡邉',
    '2026-05-04': 'vs Lions , 10-2 </br>Start P.徐 / C.海野',
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
  .selector('#calmap26h')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap26();  // render the chart
