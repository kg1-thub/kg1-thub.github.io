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
    //@@NEXTGAME@@
};
var score25 = {
    '2025-03-28': 'vs Marines , 2-8 </br>Start P.有原 / C.谷川原',
    '2025-03-29': 'vs Marines , 4-5 </br>Start P.大関 / C.海野',
    '2025-03-30': 'vs Marines , 4-7 </br>Start P.上沢 / C.海野',
    '2025-04-01': 'vs Fighters , 1-5 </br>Start P.モイネロ / C.海野',
    '2025-04-02': 'vs Fighters , 3-1 </br>Start P.前田 / C.谷川原',
    '2025-04-04': 'vs Lions , 0-6 </br>Start P.有原 / C.谷川原',
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
