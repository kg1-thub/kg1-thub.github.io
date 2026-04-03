var squareLength = 18;
var _colorRange = ['#ECEFF2', '#ff8000'];

// 2026
var datas26 = {
    '2026-03-27': 1,
    '2026-03-28': -1,
    '2026-03-29': -1,
    '2026-03-31': 1,
    '2026-04-01': 1,
    '2026-04-02': -1,
    '2026-04-03': -1,
    //@@NEXTGAME@@
};
var score26 = {
    '2026-03-27': 'vs Tigers , 3-1 </br>Start P.竹丸 / C.岸田',
    '2026-03-28': 'vs Tigers , 0-2 </br>Start P.ハワード / C.岸田',
    '2026-03-29': 'vs Tigers , 6-12 </br>Start P.山城 / C.岸田',
    '2026-03-31': 'vs Dragons , 2-5 </br>Start P.ウィットリー / C.岸田',
    '2026-04-01': 'vs Dragons , 5-6 </br>Start P.田中 / C.岸田',
    '2026-04-02': 'vs Dragons , 2-1 </br>Start P.則本 / C.山瀬',
    '2026-04-03': 'vs Baystars , 1-3 </br>Start P.竹丸 / C.岸田',
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
  .selector('#calmap26g')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap26();  // render the chart
