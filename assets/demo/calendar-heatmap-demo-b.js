var squareLength = 18;
var _colorRange = ['#ECEFF2', '#008DDA'];

// 2026
var datas26 = {
    '2026-03-27': -1,
    '2026-03-28': -1,
    '2026-03-29': -1,
    '2026-03-31': -1,
    '2026-04-01': 1,
    '2026-04-02': -1,
    '2026-04-03': 1,
    '2026-04-04': -1,
    '2026-04-05': -1,
    '2026-04-07': 1,
    '2026-04-08': -1,
    '2026-04-11': 1,
    '2026-04-12': 1,
    '2026-04-14': -1,
    '2026-04-16': -1,
    '2026-04-17': 1,
    '2026-04-18': 1,
    '2026-04-19': 1,
    '2026-04-21': 1,
    '2026-04-22': 1,
    '2026-04-24': 1,
    '2026-04-25': -1,
    '2026-04-26': -1,
    '2026-04-28': -1,
    '2026-04-29': 1,
    '2026-04-30': 1,
    '2026-05-01': -1,
    '2026-05-02': -1,
    '2026-05-03': 1,
    '2026-05-04': 1,
    '2026-05-05': 0,
    '2026-05-06': -1,
    '2026-05-08': 1,
    '2026-05-09': 1,
    '2026-05-10': -1,
    '2026-05-12': 1,
    '2026-05-13': 1,
    //@@NEXTGAME@@
};
var score26 = {
    '2026-03-27': 'vs Swallows , 2-3 </br>Start P.東 / C.山本',
    '2026-03-28': 'vs Swallows , 2-5 </br>Start P.入江 / C.松尾',
    '2026-03-29': 'vs Swallows , 3-5 </br>Start P.石田 / C.山本',
    '2026-03-31': 'vs Tigers , 4-1 </br>Start P.ﾃﾞｭﾌﾟﾗﾝﾃｨｴ / C.山本',
    '2026-04-01': 'vs Tigers , 1-4 </br>Start P.コックス / C.山本',
    '2026-04-02': 'vs Tigers , 4-3 </br>Start P.竹田 / C.松尾',
    '2026-04-03': 'vs Giants , 1-3 </br>Start P.東 / C.山本',
    '2026-04-04': 'vs Giants , 8-4 </br>Start P.入江 / C.松尾',
    '2026-04-05': 'vs Giants , 3-2 </br>Start P.石田 / C.山本',
    '2026-04-07': 'vs Dragons , 5-3 </br>Start P.深沢 / C.山本',
    '2026-04-08': 'vs Dragons , 4-6 </br>Start P.コックス / C.山本',
    '2026-04-11': 'vs Carp , 4-3 </br>Start P.東 / C.山本',
    '2026-04-12': 'vs Carp , 6-5 </br>Start P.石田 / C.山本',
    '2026-04-14': 'vs Swallows , 5-3 </br>Start P.竹田 / C.松尾',
    '2026-04-16': 'vs Swallows , 2-0 </br>Start P.ﾃﾞｭﾌﾟﾗﾝﾃｨｴ / C.山本',
    '2026-04-17': 'vs Carp , 1-5 </br>Start P.平良 / C.松尾',
    '2026-04-18': 'vs Carp , 2-7 </br>Start P.東 / C.山本',
    '2026-04-19': 'vs Carp , 0-2 </br>Start P.石田 / C.山本',
    '2026-04-21': 'vs Tigers , 16-9 </br>Start P.深沢 / C.山本',
    '2026-04-22': 'vs Tigers , 7-6 </br>Start P.竹田 / C.戸柱',
    '2026-04-24': 'vs Giants , 2-1 </br>Start P.平良 / C.松尾',
    '2026-04-25': 'vs Giants , 2-7 </br>Start P.片山 / C.山本',
    '2026-04-26': 'vs Giants , 1-4 </br>Start P.石田 / C.山本',
    '2026-04-28': 'vs Dragons , 3-0 </br>Start P.東 / C.山本',
    '2026-04-29': 'vs Dragons , 2-4 </br>Start P.島田 / C.松尾',
    '2026-04-30': 'vs Dragons , 2-6 </br>Start P.篠木 / C.山本',
    '2026-05-01': 'vs Swallows , 16-5 </br>Start P.平良 / C.松尾',
    '2026-05-02': 'vs Swallows , 6-5 </br>Start P.入江 / C.戸柱',
    '2026-05-03': 'vs Swallows , 2-12 </br>Start P.石田 / C.山本',
    '2026-05-04': 'vs Carp , 11-8 </br>Start P.竹田 / C.山本',
    '2026-05-05': 'vs Carp , 5-5 </br>Start P.東 / C.山本',
    '2026-05-06': 'vs Carp , 0-10 </br>Start P.深沢 / C.山本',
    '2026-05-08': 'vs Tigers , 1-10 </br>Start P.平良 / C.山本',
    '2026-05-09': 'vs Tigers , 1-3 </br>Start P.篠木 / C.松尾',
    '2026-05-10': 'vs Tigers , 3-0 </br>Start P.石田 / C.山本',
    '2026-05-12': 'vs Dragons , 3-1 </br>Start P.東 / C.松尾',
    '2026-05-13': 'vs Dragons , 5-0 </br>Start P.島田 / C.松尾',
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
  .selector('#calmap26b')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap26();  // render the chart
