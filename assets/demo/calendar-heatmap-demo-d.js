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
    '2026-04-03': 1,
    '2026-04-04': -1,
    '2026-04-05': -1,
    '2026-04-07': -1,
    '2026-04-08': 1,
    '2026-04-10': -1,
    '2026-04-11': -1,
    '2026-04-12': -1,
    '2026-04-14': 1,
    '2026-04-15': -1,
    '2026-04-17': -1,
    '2026-04-18': -1,
    '2026-04-19': -1,
    '2026-04-21': -1,
    '2026-04-22': -1,
    //@@NEXTGAME@@
};
var score26 = {
    '2026-03-27': 'vs Carp , 6-5 </br>Start P.柳 / C.石伊',
    '2026-03-28': 'vs Carp , 2-1 </br>Start P.櫻井 / C.石伊',
    '2026-03-29': 'vs Carp , 1-0 </br>Start P.高橋 / C.石伊',
    '2026-03-31': 'vs Giants , 2-5 </br>Start P.金丸 / C.木下',
    '2026-04-01': 'vs Giants , 5-6 </br>Start P.中西 / C.木下',
    '2026-04-02': 'vs Giants , 2-1 </br>Start P.大野 / C.木下',
    '2026-04-03': 'vs Swallows , 0-1 </br>Start P.柳 / C.木下',
    '2026-04-04': 'vs Swallows , 11-6 </br>Start P.櫻井 / C.木下',
    '2026-04-05': 'vs Swallows , 7-5 </br>Start P.高橋 / C.加藤',
    '2026-04-07': 'vs Baystars , 5-3 </br>Start P.金丸 / C.木下',
    '2026-04-08': 'vs Baystars , 4-6 </br>Start P.中西 / C.木下',
    '2026-04-10': 'vs Tigers , 3-5 </br>Start P.柳 / C.木下',
    '2026-04-11': 'vs Tigers , 3-9 </br>Start P.大野 / C.木下',
    '2026-04-12': 'vs Tigers , 0-3 </br>Start P.高橋 / C.加藤',
    '2026-04-14': 'vs Carp , 6-2 </br>Start P.金丸 / C.石伊',
    '2026-04-15': 'vs Carp , 2-5 </br>Start P.マラー / C.石伊',
    '2026-04-17': 'vs Tigers , 2-1 </br>Start P.柳 / C.木下',
    '2026-04-18': 'vs Tigers , 4-3 </br>Start P.大野 / C.石伊',
    '2026-04-19': 'vs Tigers , 7-5 </br>Start P.高橋 / C.石伊',
    '2026-04-21': 'vs Giants , 2-1 </br>Start P.金丸 / C.石伊',
    '2026-04-22': 'vs Giants , 5-1 </br>Start P.櫻井 / C.石伊',
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
