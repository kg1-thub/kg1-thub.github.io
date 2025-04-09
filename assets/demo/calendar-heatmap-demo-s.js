var squareLength = 18;
var _colorRange = ['#ECEFF2', '#066163'];

// 2025
var datas25 = {
    '2025-03-28': -1,
    '2025-03-29': -1,
    '2025-03-30': -1,
    '2025-04-02': 1,
    '2025-04-03': 1,
    '2025-04-04': 0,
    '2025-04-05': 1,
    '2025-04-06': -1,
    '2025-04-08': 1,
    '2025-04-09': 1,
    //@@NEXTGAME@@
};
var score25 = {
    '2025-03-28': 'vs Giants , 6-5 </br>Start P.奥川 / C.中村',
    '2025-03-29': 'vs Giants , 12-0 </br>Start P.吉村 / C.中村',
    '2025-03-30': 'vs Giants , 3-0 </br>Start P.高橋 / C.松本直',
    '2025-04-02': 'vs Carp , 5-4 </br>Start P.山野 / C.古賀',
    '2025-04-03': 'vs Carp , 3-0 </br>Start P.小川 / C.中村',
    '2025-04-04': 'vs Dragons , 1-1 </br>Start P.高梨 / C.松本直',
    '2025-04-05': 'vs Dragons , 2-0 </br>Start P.ランバート / C.中村',
    '2025-04-06': 'vs Dragons , 5-6 </br>Start P.奥川 / C.古賀',
    '2025-04-08': 'vs Tigers , 0-1 </br>Start P.高橋 / C.中村',
    '2025-04-09': 'vs Tigers , 3-5 </br>Start P.石川 / C.中村',
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
  .selector('#calmap25s')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap25();  // render the chart
