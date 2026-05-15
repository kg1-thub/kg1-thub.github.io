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
    '2026-04-16': 1,
    '2026-04-17': -1,
    '2026-04-18': 1,
    '2026-04-19': 1,
    '2026-04-21': -1,
    '2026-04-22': 1,
    '2026-04-23': 1,
    '2026-04-24': -1,
    '2026-04-25': -1,
    '2026-04-26': -1,
    '2026-04-28': 1,
    '2026-04-29': -1,
    '2026-04-30': -1,
    '2026-05-01': 1,
    '2026-05-02': 1,
    '2026-05-03': -1,
    '2026-05-04': 1,
    '2026-05-05': -1,
    '2026-05-06': 1,
    '2026-05-08': 1,
    '2026-05-09': 1,
    '2026-05-10': -1,
    '2026-05-12': -1,
    '2026-05-13': 1,
    '2026-05-15': 1,
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
    '2026-04-16': 'vs Baystars , 2-0 </br>Start P.松本 / C.古賀',
    '2026-04-17': 'vs Giants , 2-8 </br>Start P.ｳｫﾙﾀｰｽﾞ / C.中村',
    '2026-04-18': 'vs Giants , 4-3 </br>Start P.奥川 / C.古賀',
    '2026-04-19': 'vs Giants , 3-1 </br>Start P.増居 / C.古賀',
    '2026-04-21': 'vs Carp , 2-1 </br>Start P.吉村 / C.古賀',
    '2026-04-22': 'vs Carp , 0-2 </br>Start P.山野 / C.鈴木叶',
    '2026-04-23': 'vs Carp , 0-2 </br>Start P.高梨 / C.古賀',
    '2026-04-24': 'vs Dragons , 6-4 </br>Start P.松本 / C.古賀',
    '2026-04-25': 'vs Dragons , 5-2 </br>Start P.小川 / C.古賀',
    '2026-04-26': 'vs Dragons , 3-0 </br>Start P.奥川 / C.鈴木叶',
    '2026-04-28': 'vs Tigers , 10-5 </br>Start P.吉村 / C.古賀',
    '2026-04-29': 'vs Tigers , 0-2 </br>Start P.山野 / C.鈴木叶',
    '2026-04-30': 'vs Tigers , 2-10 </br>Start P.高梨 / C.古賀',
    '2026-05-01': 'vs Baystars , 16-5 </br>Start P.松本 / C.古賀',
    '2026-05-02': 'vs Baystars , 6-5 </br>Start P.小川 / C.鈴木叶',
    '2026-05-03': 'vs Baystars , 2-12 </br>Start P.ｳｫﾙﾀｰｽﾞ / C.古賀',
    '2026-05-04': 'vs Giants , 1-5 </br>Start P.奥川 / C.鈴木叶',
    '2026-05-05': 'vs Giants , 3-2 </br>Start P.吉村 / C.古賀',
    '2026-05-06': 'vs Giants , 0-5 </br>Start P.山野 / C.鈴木叶',
    '2026-05-08': 'vs Carp , 1-4 </br>Start P.高梨 / C.古賀',
    '2026-05-09': 'vs Carp , 0-4 </br>Start P.松本 / C.古賀',
    '2026-05-10': 'vs Carp , 4-0 </br>Start P.石原 / C.鈴木叶',
    '2026-05-12': 'vs Tigers , 0-10 </br>Start P.吉村 / C.古賀',
    '2026-05-13': 'vs Tigers , 4-2 </br>Start P.山野 / C.鈴木叶',
    '2026-05-15': 'vs Dragons , 5-8 </br>Start P.高梨 / C.古賀',
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
