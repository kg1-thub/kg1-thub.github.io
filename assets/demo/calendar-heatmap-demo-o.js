var squareLength = 18;
var _colorRange = ['#ECEFF2', '#0A1D56'];

// 2026
var datas26 = {
    '2026-03-27': -1,
    '2026-03-28': 1,
    '2026-03-29': 1,
    '2026-03-31': -1,
    '2026-04-01': 1,
    '2026-04-02': 1,
    '2026-04-03': -1,
    '2026-04-04': -1,
    '2026-04-05': -1,
    '2026-04-07': 1,
    '2026-04-08': 1,
    '2026-04-09': 1,
    '2026-04-11': -1,
    '2026-04-12': -1,
    '2026-04-14': 1,
    '2026-04-15': 1,
    '2026-04-16': 1,
    '2026-04-17': 1,
    '2026-04-18': -1,
    '2026-04-19': 1,
    '2026-04-21': -1,
    '2026-04-22': 1,
    '2026-04-24': 1,
    '2026-04-25': 1,
    //@@NEXTGAME@@
};
var score26 = {
    '2026-03-27': 'vs Eagles , 0-10 </br>Start P.宮城 / C.森',
    '2026-03-28': 'vs Eagles , 6-0 </br>Start P.九里 / C.若月',
    '2026-03-29': 'vs Eagles , 5-4 </br>Start P.田嶋 / C.若月',
    '2026-03-31': 'vs Lions , 5-3 </br>Start P.高島 / C.若月',
    '2026-04-01': 'vs Lions , 0-4 </br>Start P.エスピノーザ / C.森',
    '2026-04-02': 'vs Lions , 3-7 </br>Start P.宮城 / C.森',
    '2026-04-03': 'vs Fighters , 12-3 </br>Start P.寺西 / C.森',
    '2026-04-04': 'vs Fighters , 6-3 </br>Start P.九里 / C.若月',
    '2026-04-05': 'vs Fighters , 8-2 </br>Start P.ジェリー / C.若月',
    '2026-04-07': 'vs Marines , 3-1 </br>Start P.高島 / C.若月',
    '2026-04-08': 'vs Marines , 9-1 </br>Start P.エスピノーザ / C.森',
    '2026-04-09': 'vs Marines , 2-1 </br>Start P.宮城 / C.若月',
    '2026-04-11': 'vs Eagles , 11-4 </br>Start P.九里 / C.若月',
    '2026-04-12': 'vs Eagles , 4-0 </br>Start P.ジェリー / C.森',
    '2026-04-14': 'vs Lions , 5-1 </br>Start P.曽谷 / C.若月',
    '2026-04-15': 'vs Lions , 3-1 </br>Start P.エスピノーザ / C.森',
    '2026-04-16': 'vs Lions , 7-1 </br>Start P.寺西 / C.森',
    '2026-04-17': 'vs Hawks , 4-13 </br>Start P.高島 / C.若月',
    '2026-04-18': 'vs Hawks , 7-0 </br>Start P.九里 / C.若月',
    '2026-04-19': 'vs Hawks , 1-2 </br>Start P.ジェリー / C.森',
    '2026-04-21': 'vs Marines , 7-4 </br>Start P.田嶋 / C.若月',
    '2026-04-22': 'vs Marines , 1-4 </br>Start P.曽谷 / C.若月',
    '2026-04-24': 'vs Fighters , 3-2 </br>Start P.エスピノーザ / C.森',
    '2026-04-25': 'vs Fighters , 4-2 </br>Start P.高島 / C.若月',
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
  .selector('#calmap26o')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap26();  // render the chart
