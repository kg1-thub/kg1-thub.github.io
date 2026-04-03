var squareLength = 18;
var _colorRange = ['#ECEFF2', '#176B87'];

// 2026
var datas26 = {
    '2026-03-27': -1,
    '2026-03-28': -1,
    '2026-03-29': 1,
    '2026-03-31': 1,
    '2026-04-01': -1,
    '2026-04-02': -1,
    '2026-04-03': -1,
    //@@NEXTGAME@@
};
var score26 = {
    '2026-03-27': 'vs Marines , 3-1 </br>Start P.渡邉 / C.小島',
    '2026-03-28': 'vs Marines , 11-0 </br>Start P.武内 / C.古賀悠',
    '2026-03-29': 'vs Marines , 0-4 </br>Start P.平良 / C.小島',
    '2026-03-31': 'vs Buffaloes , 5-3 </br>Start P.隅田 / C.小島',
    '2026-04-01': 'vs Buffaloes , 0-4 </br>Start P.高橋 / C.小島',
    '2026-04-02': 'vs Buffaloes , 3-7 </br>Start P.菅井 / C.古賀悠',
    '2026-04-03': 'vs Eagles , 3-6 </br>Start P.渡邉 / C.小島',
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
  .selector('#calmap26l')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap26();  // render the chart
