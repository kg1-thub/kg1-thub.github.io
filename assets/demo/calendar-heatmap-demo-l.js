var squareLength = 18;
var _colorRange = ['#ECEFF2', '#176B87'];

// 2025
var datas25 = {
    '2025-03-28': -1,
    '2025-03-29': -1,
    '2025-03-30': -1,
    '2025-04-03': -1,
    '2025-04-04': 1,
    '2025-04-05': 1,
    '2025-04-06': -1,
    '2025-04-08': -1,
    '2025-04-09': 1,
    '2025-04-11': -1,
    '2025-04-12': 1,
    '2025-04-13': 1,
    '2025-04-15': -1,
    '2025-04-16': 1,
    '2025-04-17': 1,
    '2025-04-18': 1,
    '2025-04-19': 1,
    '2025-04-20': -1,
    '2025-04-22': -1,
    '2025-04-23': -1,
    '2025-04-25': -1,
    '2025-04-26': 1,
    '2025-04-27': 1,
    '2025-04-29': 1,
    '2025-04-30': 1,
    //@@NEXTGAME@@
};
var score25 = {
    '2025-03-28': 'vs Fighters , 0-2 </br>Start P.今井 / C.古賀',
    '2025-03-29': 'vs Fighters , 2-3 </br>Start P.渡邉 / C.古賀',
    '2025-03-30': 'vs Fighters , 5-7 </br>Start P.高橋 / C.古賀',
    '2025-04-03': 'vs Eagles , 4-1 </br>Start P.上田 / C.牧野',
    '2025-04-04': 'vs Hawks , 0-6 </br>Start P.今井 / C.古賀',
    '2025-04-05': 'vs Hawks , 3-6 </br>Start P.隅田 / C.古賀悠',
    '2025-04-06': 'vs Hawks , 11-1 </br>Start P.渡邉 / C.古賀悠',
    '2025-04-08': 'vs Marines , 3-7 </br>Start P.高橋 / C.古賀悠',
    '2025-04-09': 'vs Marines , 2-0 </br>Start P.菅井 / C.炭谷',
    '2025-04-11': 'vs Fighters , 2-0 </br>Start P.今井 / C.古賀悠',
    '2025-04-12': 'vs Fighters , 1-2 </br>Start P.隅田 / C.古賀悠',
    '2025-04-13': 'vs Fighters , 2-7 </br>Start P.渡邉 / C.古賀悠',
    '2025-04-15': 'vs Buffaloes , 2-0 </br>Start P.高橋 / C.古賀悠',
    '2025-04-16': 'vs Buffaloes , 0-5 </br>Start P.菅井 / C.炭谷',
    '2025-04-17': 'vs Buffaloes , 2-3 </br>Start P.上田 / C.牧野',
    '2025-04-18': 'vs Hawks , 2-1 </br>Start P.今井 / C.古賀悠',
    '2025-04-19': 'vs Hawks , 1-0 </br>Start P.隅田 / C.古賀悠',
    '2025-04-20': 'vs Hawks , 1-3 </br>Start P.渡邉 / C.古賀悠',
    '2025-04-22': 'vs Marines , 2-1 </br>Start P.高橋 / C.古賀悠',
    '2025-04-23': 'vs Marines , 5-2 </br>Start P.菅井 / C.炭谷',
    '2025-04-25': 'vs Buffaloes , 2-6 </br>Start P.今井 / C.古賀悠',
    '2025-04-26': 'vs Buffaloes , 3-0 </br>Start P.隅田 / C.古賀悠',
    '2025-04-27': 'vs Buffaloes , 3-2 </br>Start P.渡邉 / C.古賀悠',
    '2025-04-29': 'vs Eagles , 7-1 </br>Start P.高橋 / C.古賀悠',
    '2025-04-30': 'vs Eagles , 3-1 </br>Start P.菅井 / C.炭谷',
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
  .selector('#calmap25l')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap25();  // render the chart
