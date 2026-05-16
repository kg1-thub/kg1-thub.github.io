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
    '2026-04-24': 1,
    '2026-04-25': 1,
    '2026-04-26': 1,
    '2026-04-28': 1,
    '2026-04-29': -1,
    '2026-04-30': -1,
    '2026-05-01': -1,
    '2026-05-02': 1,
    '2026-05-04': 1,
    '2026-05-05': 1,
    '2026-05-06': -1,
    '2026-05-08': 1,
    '2026-05-09': 1,
    '2026-05-10': -1,
    '2026-05-12': -1,
    '2026-05-13': -1,
    '2026-05-14': 0,
    '2026-05-15': -1,
    '2026-05-16': 1,
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
    '2026-04-24': 'vs Swallows , 6-4 </br>Start P.柳 / C.木下',
    '2026-04-25': 'vs Swallows , 5-2 </br>Start P.大野 / C.石伊',
    '2026-04-26': 'vs Swallows , 3-0 </br>Start P.高橋 / C.石伊',
    '2026-04-28': 'vs Baystars , 3-0 </br>Start P.金丸 / C.石伊',
    '2026-04-29': 'vs Baystars , 2-4 </br>Start P.櫻井 / C.石伊',
    '2026-04-30': 'vs Baystars , 2-6 </br>Start P.マラー / C.石伊',
    '2026-05-01': 'vs Carp , 7-3 </br>Start P.柳 / C.木下',
    '2026-05-02': 'vs Carp , 0-4 </br>Start P.大野 / C.石伊',
    '2026-05-04': 'vs Tigers , 7-3 </br>Start P.中西 / C.石伊',
    '2026-05-05': 'vs Tigers , 7-3 </br>Start P.金丸 / C.石伊',
    '2026-05-06': 'vs Tigers , 0-2 </br>Start P.高橋 / C.石伊',
    '2026-05-08': 'vs Giants , 9-2 </br>Start P.柳 / C.石伊',
    '2026-05-09': 'vs Giants , 4-2 </br>Start P.大野 / C.石伊',
    '2026-05-10': 'vs Giants , 4-9 </br>Start P.櫻井 / C.石伊',
    '2026-05-12': 'vs Baystars , 3-1 </br>Start P.金丸 / C.石伊',
    '2026-05-13': 'vs Baystars , 5-0 </br>Start P.中西 / C.石伊',
    '2026-05-14': 'vs Baystars , 0-0 </br>Start P.マラー / C.加藤',
    '2026-05-15': 'vs Swallows , 5-8 </br>Start P.柳 / C.木下',
    '2026-05-16': 'vs Swallows , 8-0 </br>Start P.大野 / C.石伊',
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
