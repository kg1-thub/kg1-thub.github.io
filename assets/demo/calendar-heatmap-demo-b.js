var squareLength = 18;
var _colorRange = ['#ECEFF2', '#008DDA'];

// 2026
var datas26 = {
    '2026-03-27': -1,
    '2026-03-28': -1,
    '2026-03-29': -1,
    '2026-03-31': -1,
    '2026-04-01': 1,
    '2026-04-02': -1,
    //@@NEXTGAME@@
};
var score26 = {
    '2026-03-27': 'vs Swallows , 2-3 </br>Start P.東 / C.山本',
    '2026-03-28': 'vs Swallows , 2-5 </br>Start P.入江 / C.松尾',
    '2026-03-29': 'vs Swallows , 3-5 </br>Start P.石田 / C.山本',
    '2026-03-31': 'vs Tigers , 4-1 </br>Start P.デュプランティエ / C.山本',
    '2026-04-01': 'vs Tigers , 1-4 </br>Start P.コックス / C.山本',
    '2026-04-02': 'vs Tigers , 4-3 </br>Start P.竹田 / C.松尾',
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
  .selector('#calmap26b')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap26();  // render the chart
