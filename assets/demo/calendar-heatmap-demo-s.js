var squareLength = 18;
var _colorRange = ['#ECEFF2', '#066163'];

// 2026
var datas26 = {
    '2026-03-27': 1,
    '2026-03-28': 1,
    '2026-03-29': 1,
    '2026-03-31': 1,
    '2026-04-02': 1,
    '2026-04-03': -1,
    '2026-04-04': 1,
    '2026-04-05': 1,
    '2026-04-07': -1,
    '2026-04-08': 1,
    '2026-04-09': -1,
    '2026-04-10': -1,
    '2026-04-11': 1,
    '2026-04-12': 1,
    '2026-04-14': 1,
    //@@NEXTGAME@@
};
var score26 = {
    '2026-03-27': 'vs Baystars , 2-3 </br>Start P.吉村 / C.古賀',
    '2026-03-28': 'vs Baystars , 2-5 </br>Start P.山野 / C.鈴木叶',
    '2026-03-29': 'vs Baystars , 3-5 </br>Start P.高梨 / C.古賀',
    '2026-03-31': 'vs Carp , 8-3 </br>Start P.小川 / C.古賀',
    '2026-04-02': 'vs Carp , 2-1 </br>Start P.奥川 / C.鈴木叶',
    '2026-04-03': 'vs Dragons , 0-1 </br>Start P.吉村 / C.古賀',
    '2026-04-04': 'vs Dragons , 11-6 </br>Start P.山野 / C.鈴木叶',
    '2026-04-05': 'vs Dragons , 7-5 </br>Start P.高梨 / C.中村',
    '2026-04-07': 'vs Tigers , 9-3 </br>Start P.小川 / C.古賀',
    '2026-04-08': 'vs Tigers , 2-3 </br>Start P.松本 / C.古賀',
    '2026-04-09': 'vs Tigers , 2-0 </br>Start P.奥川 / C.鈴木叶',
    '2026-04-10': 'vs Giants , 3-2 </br>Start P.吉村 / C.古賀',
    '2026-04-11': 'vs Giants , 2-3 </br>Start P.山野 / C.鈴木叶',
    '2026-04-12': 'vs Giants , 0-2 </br>Start P.高梨 / C.古賀',
    '2026-04-14': 'vs Baystars , 5-3 </br>Start P.小川 / C.古賀',
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
  .selector('#calmap26s')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap26();  // render the chart
