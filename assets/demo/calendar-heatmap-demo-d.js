var squareLength = 18;
var _colorRange = ['#ECEFF2', '#6F3BC8'];

// 2025
var datas25 = {
    '2025-03-28': -1,
    '2025-03-29': 1,
    '2025-03-30': -1,
    '2025-04-01': 1,
    '2025-04-02': -1,
    '2025-04-03': -1,
    '2025-04-04': 0,
    '2025-04-05': -1,
    //@@NEXTGAME@@
};
var score25 = {
    '2025-03-28': 'vs Baystars , 5-0 </br>Start P.高橋 / C.木下',
    '2025-03-29': 'vs Baystars , 0-1 </br>Start P.松葉 / C.木下',
    '2025-03-30': 'vs Baystars , 2-1 </br>Start P.メヒア / C.木下',
    '2025-04-01': 'vs Giants , 3-2 </br>Start P.マラー / C.木下',
    '2025-04-02': 'vs Giants , 0-2 </br>Start P.柳 / C.石伊',
    '2025-04-03': 'vs Giants , 3-5 </br>Start P.大野 / C.木下',
    '2025-04-04': 'vs Swallows , 1-1 </br>Start P.高橋 / C.加藤匠',
    '2025-04-05': 'vs Swallows , 2-0 </br>Start P.松葉 / C.木下',
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
  .selector('#calmap25d')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap25();  // render the chart
