var squareLength = 18;
var _colorRange = ['#ECEFF2', '#008DDA'];

// 2025
var datas25 = {
    '2025-03-28': 1,
    '2025-03-29': -1,
    '2025-03-30': 1,
    '2025-04-01': 1,
    '2025-04-02': 0,
    //@@NEXTGAME@@
};
var score25 = {
    '2025-03-28': 'vs Dragons , 5-0 </br>Start P.東 / C.山本',
    '2025-03-29': 'vs Dragons , 0-1 </br>Start P.バウアー / C.山本',
    '2025-03-30': 'vs Dragons , 2-1 </br>Start P.平良 / C.松尾',
    '2025-04-01': 'vs Tigers , 1-7 </br>Start P.ジャクソン / C.山本',
    '2025-04-02': 'vs Tigers , 6-6 </br>Start P.大貫 / C.戸柱',
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
  .selector('#calmap25b')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap25();  // render the chart
