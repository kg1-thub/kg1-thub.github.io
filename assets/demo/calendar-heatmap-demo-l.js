var squareLength = 18;
var _colorRange = ['#ECEFF2', '#176B87'];

// 2026
var datas26 = {
    '2026-03-27': -1,
    '2026-03-28': -1,
    '2026-03-29': 1,
    '2026-03-31': 1,
    '2026-04-01': -1,
    '2026-04-02': -1,
    '2026-04-03': -1,
    '2026-04-04': -1,
    '2026-04-05': 0,
    '2026-04-07': 1,
    '2026-04-08': 1,
    '2026-04-09': -1,
    '2026-04-10': -1,
    '2026-04-11': 1,
    '2026-04-12': 1,
    '2026-04-14': -1,
    '2026-04-15': -1,
    '2026-04-16': -1,
    '2026-04-17': 1,
    '2026-04-18': -1,
    '2026-04-19': 1,
    '2026-04-21': 1,
    '2026-04-22': 1,
    '2026-04-23': -1,
    '2026-04-25': 1,
    '2026-04-26': 1,
    '2026-04-28': -1,
    '2026-04-29': 1,
    '2026-04-30': -1,
    '2026-05-01': 1,
    '2026-05-02': 1,
    '2026-05-03': -1,
    '2026-05-04': 1,
    '2026-05-05': -1,
    '2026-05-06': 1,
    //@@NEXTGAME@@
};
var score26 = {
    '2026-03-27': 'vs Marines , 3-1 </br>Start P.渡邉 / C.小島',
    '2026-03-28': 'vs Marines , 11-0 </br>Start P.武内 / C.古賀悠',
    '2026-03-29': 'vs Marines , 0-4 </br>Start P.平良 / C.小島',
    '2026-03-31': 'vs Buffaloes , 5-3 </br>Start P.隅田 / C.小島',
    '2026-04-01': 'vs Buffaloes , 0-4 </br>Start P.高橋 / C.小島',
    '2026-04-02': 'vs Buffaloes , 3-7 </br>Start P.菅井 / C.古賀悠',
    '2026-04-03': 'vs Eagles , 3-6 </br>Start P.渡邉 / C.小島',
    '2026-04-04': 'vs Eagles , 1-2 </br>Start P.武内 / C.小島',
    '2026-04-05': 'vs Eagles , 1-1 </br>Start P.平良 / C.小島',
    '2026-04-07': 'vs Hawks , 6-8 </br>Start P.隅田 / C.古賀悠',
    '2026-04-08': 'vs Hawks , 1-2 </br>Start P.高橋 / C.小島',
    '2026-04-09': 'vs Hawks , 2-0 </br>Start P.菅井 / C.小島',
    '2026-04-10': 'vs Marines , 3-6 </br>Start P.渡邉 / C.古賀悠',
    '2026-04-11': 'vs Marines , 5-2 </br>Start P.武内 / C.小島',
    '2026-04-12': 'vs Marines , 2-1 </br>Start P.平良 / C.小島',
    '2026-04-14': 'vs Buffaloes , 5-1 </br>Start P.隅田 / C.古賀悠',
    '2026-04-15': 'vs Buffaloes , 3-1 </br>Start P.高橋 / C.小島',
    '2026-04-16': 'vs Buffaloes , 7-1 </br>Start P.菅井 / C.小島',
    '2026-04-17': 'vs Fighters , 3-5 </br>Start P.渡邉 / C.古賀悠',
    '2026-04-18': 'vs Fighters , 5-3 </br>Start P.武内 / C.小島',
    '2026-04-19': 'vs Fighters , 3-15 </br>Start P.平良 / C.古賀悠',
    '2026-04-21': 'vs Hawks , 6-4 </br>Start P.隅田 / C.小島',
    '2026-04-22': 'vs Hawks , 3-1 </br>Start P.高橋 / C.古賀悠',
    '2026-04-23': 'vs Hawks , 3-4 </br>Start P.菅井 / C.古賀悠',
    '2026-04-25': 'vs Eagles , 7-9 </br>Start P.武内 / C.小島',
    '2026-04-26': 'vs Eagles , 0-3 </br>Start P.平良 / C.小島',
    '2026-04-28': 'vs Fighters , 1-2 </br>Start P.渡邉 / C.古賀悠',
    '2026-04-29': 'vs Fighters , 3-0 </br>Start P.高橋 / C.古賀悠',
    '2026-04-30': 'vs Fighters , 2-3 </br>Start P.隅田 / C.古賀悠',
    '2026-05-01': 'vs Marines , 0-10 </br>Start P.佐藤 / C.柘植',
    '2026-05-02': 'vs Marines , 4-5 </br>Start P.武内 / C.小島',
    '2026-05-03': 'vs Marines , 10-0 </br>Start P.平良 / C.古賀悠',
    '2026-05-04': 'vs Hawks , 10-2 </br>Start P.菅井 / C.小島',
    '2026-05-05': 'vs Hawks , 4-6 </br>Start P.渡邉 / C.古賀悠',
    '2026-05-06': 'vs Hawks , 10-2 </br>Start P.高橋 / C.古賀悠',
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
  .selector('#calmap26l')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap26();  // render the chart
