var squareLength = 18;
var _colorRange = ['#ECEFF2', '#6F3BC8'];

// 2026
var datas26 = {
    '2026-03-27': -1,
    '2026-03-28': -1,
    '2026-03-29': -1,
    '2026-03-31': -1,
    '2026-04-01': -1,
    '2026-04-02': 1,
    //@@NEXTGAME@@
};
var score26 = {
    '2026-03-27': 'vs Carp , 6-5 </br>Start P.柳 / C.石伊',
    '2026-03-28': 'vs Carp , 2-1 </br>Start P.櫻井 / C.石伊',
    '2026-03-29': 'vs Carp , 1-0 </br>Start P.高橋 / C.石伊',
    '2026-03-31': 'vs Giants , 2-5 </br>Start P.金丸 / C.木下',
    '2026-04-01': 'vs Giants , 5-6 </br>Start P.中西 / C.木下',
    '2026-04-02': 'vs Giants , 2-1 </br>Start P.大野 / C.木下',
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
  .selector('#calmap26d')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap26();  // render the chart
