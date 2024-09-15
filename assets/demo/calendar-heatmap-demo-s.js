var squareLength = 18;
var _colorRange = ['#ECEFF2', '#066163'];

// 2024
var datas24 = {
    '2024-03-29': 1,
    '2024-03-30': 0,
    '2024-03-31': 1,
    '2024-04-02': -1,
    '2024-04-04': -1,
    '2024-04-05': -1,
    '2024-04-06': -1,
    '2024-04-07': 1,
    '2024-04-09': -1,
    '2024-04-11': -1,
    '2024-04-12': -1,
    '2024-04-13': 1,
    '2024-04-14': 1,
    '2024-04-16': -1,
    '2024-04-17': -1,
    '2024-04-18': 1,
    '2024-04-19': 1,
    '2024-04-20': -1,
    '2024-04-21': -1,
    '2024-04-23': -1,
    '2024-04-25': 1,
    '2024-04-26': 1,
    '2024-04-27': -1,
    '2024-04-28': -1,
    '2024-04-29': 1,
    '2024-04-30': 1,
    '2024-05-01': 1,
    '2024-05-03': 1,
    '2024-05-04': 0,
    '2024-05-05': -1,
    '2024-05-06': -1,
    '2024-05-08': 1,
    '2024-05-10': -1,
    '2024-05-11': -1,
    '2024-05-12': 1,
    '2024-05-14': -1,
    '2024-05-15': 1,
    '2024-05-17': 1,
    '2024-05-18': -1,
    '2024-05-19': -1,
    '2024-05-21': -1,
    '2024-05-22': -1,
    '2024-05-23': -1,
    '2024-05-24': 1,
    '2024-05-25': -1,
    '2024-05-26': -1,
    '2024-05-28': -1,
    '2024-05-29': 0,
    '2024-05-30': 0,
    '2024-05-31': -1,
    '2024-06-01': -1,
    '2024-06-02': 1,
    '2024-06-04': 1,
    '2024-06-05': 1,
    '2024-06-06': 1,
    '2024-06-07': -1,
    '2024-06-08': 1,
    '2024-06-09': 1,
    '2024-06-11': -1,
    '2024-06-12': 1,
    '2024-06-13': -1,
    '2024-06-14': 1,
    '2024-06-15': -1,
    '2024-06-16': 1,
    '2024-06-21': 1,
    '2024-06-22': 1,
    '2024-06-23': -1,
    '2024-06-25': -1,
    '2024-06-26': -1,
    '2024-06-27': -1,
    '2024-06-29': 1,
    '2024-06-30': 1,
    '2024-07-02': -1,
    '2024-07-03': 1,
    '2024-07-04': -1,
    '2024-07-05': -1,
    '2024-07-06': -1,
    '2024-07-07': -1,
    '2024-07-09': -1,
    '2024-07-10': -1,
    '2024-07-12': -1,
    '2024-07-13': -1,
    '2024-07-15': 1,
    '2024-07-16': 1,
    '2024-07-19': -1,
    '2024-07-20': 1,
    '2024-07-21': 1,
    '2024-07-26': -1,
    '2024-07-27': 1,
    '2024-07-28': 1,
    '2024-07-30': -1,
    '2024-07-31': -1,
    '2024-08-01': -1,
    '2024-08-02': 1,
    '2024-08-03': -1,
    '2024-08-04': -1,
    '2024-08-06': 1,
    '2024-08-07': 1,
    '2024-08-08': -1,
    '2024-08-09': -1,
    '2024-08-10': -1,
    '2024-08-11': 1,
    '2024-08-12': 1,
    '2024-08-13': -1,
    '2024-08-14': 1,
    '2024-08-17': 1,
    '2024-08-18': -1,
    '2024-08-20': -1,
    '2024-08-21': -1,
    '2024-08-22': 1,
    '2024-08-23': -1,
    '2024-08-24': 1,
    '2024-08-25': -1,
    '2024-08-27': -1,
    '2024-08-28': -1,
    '2024-08-31': -1,
    '2024-09-01': -1,
    '2024-09-03': 1,
    '2024-09-04': 1,
    '2024-09-05': -1,
    '2024-09-06': -1,
    '2024-09-07': -1,
    '2024-09-08': 1,
    '2024-09-10': -1,
    '2024-09-11': 1,
    '2024-09-12': 1,
    '2024-09-13': 1,
    '2024-09-14': 1,
    '2024-09-15': -1,
    //@@NEXTGAME@@
};
var score24 = {
    '2024-03-29': 'vs Dragons , 7-4 </br>Start P.サイスニード / C.中村',
    '2024-03-30': 'vs Dragons , 1-1 </br>Start P.吉村 / C.中村',
    '2024-03-31': 'vs Dragons , 5-2 </br>Start P.ヤフーレ / C.中村',
    '2024-04-02': 'vs Carp , 2-1 </br>Start P.小澤 / C.中村',
    '2024-04-04': 'vs Carp , 6-3 </br>Start P.高橋 / C.中村',
    '2024-04-05': 'vs Tigers , 6-7 </br>Start P.サイスニード / C.中村',
    '2024-04-06': 'vs Tigers , 3-4 </br>Start P.吉村 / C.中村',
    '2024-04-07': 'vs Tigers , 3-1 </br>Start P.ヤフーレ / C.中村',
    '2024-04-09': 'vs Giants , 1-3 </br>Start P.小澤 / C.中村',
    '2024-04-11': 'vs Giants , 0-5 </br>Start P.高橋 / C.中村',
    '2024-04-12': 'vs Baystars , 3-1 </br>Start P.サイスニード / C.松本直',
    '2024-04-13': 'vs Baystars , 2-5 </br>Start P.吉村 / C.中村',
    '2024-04-14': 'vs Baystars , 0-9 </br>Start P.ヤフーレ / C.中村',
    '2024-04-16': 'vs Dragons , 3-2 </br>Start P.石川 / C.中村',
    '2024-04-17': 'vs Dragons , 2-0 </br>Start P.小澤 / C.中村',
    '2024-04-18': 'vs Dragons , 5-11 </br>Start P.高橋 / C.中村',
    '2024-04-19': 'vs Baystars , 4-3 </br>Start P.サイスニード / C.中村',
    '2024-04-20': 'vs Baystars , 4-7 </br>Start P.阪口 / C.西田',
    '2024-04-21': 'vs Baystars , 3-8 </br>Start P.ヤフーレ / C.中村',
    '2024-04-23': 'vs Carp , 0-2 </br>Start P.吉村 / C.中村',
    '2024-04-25': 'vs Carp , 9-8 </br>Start P.高橋 / C.中村',
    '2024-04-26': 'vs Tigers , 2-8 </br>Start P.小川 / C.中村',
    '2024-04-27': 'vs Tigers , 5-4 </br>Start P.サイスニード / C.中村',
    '2024-04-28': 'vs Tigers , 4-3 </br>Start P.小澤 / C.中村',
    '2024-04-29': 'vs Giants , 0-9 </br>Start P.ヤフーレ / C.中村',
    '2024-04-30': 'vs Giants , 3-4 </br>Start P.ロドリゲス / C.中村',
    '2024-05-01': 'vs Giants , 0-4 </br>Start P.吉村 / C.中村',
    '2024-05-03': 'vs Dragons , 5-3 </br>Start P.小川 / C.中村',
    '2024-05-04': 'vs Dragons , 7-7 </br>Start P.サイスニード / C.中村',
    '2024-05-05': 'vs Dragons , 3-6 </br>Start P.小澤 / C.松本直',
    '2024-05-06': 'vs Baystars , 6-5 </br>Start P.石川 / C.中村',
    '2024-05-08': 'vs Baystars , 2-6 </br>Start P.吉村 / C.中村',
    '2024-05-10': 'vs Giants , 1-2 </br>Start P.ヤフーレ / C.中村',
    '2024-05-11': 'vs Giants , 3-4 </br>Start P.小川 / C.中村',
    '2024-05-12': 'vs Giants , 3-1 </br>Start P.サイスニード / C.中村',
    '2024-05-14': 'vs Carp , 1-2 </br>Start P.小澤 / C.中村',
    '2024-05-15': 'vs Carp , 2-0 </br>Start P.松本 / C.中村',
    '2024-05-17': 'vs Tigers , 2-4 </br>Start P.吉村 / C.中村',
    '2024-05-18': 'vs Tigers , 1-0 </br>Start P.ヤフーレ / C.中村',
    '2024-05-19': 'vs Tigers , 7-2 </br>Start P.石川 / C.中村',
    '2024-05-21': 'vs Baystars , 0-7 </br>Start P.小川 / C.中村',
    '2024-05-22': 'vs Baystars , 1-2 </br>Start P.小澤 / C.中村',
    '2024-05-23': 'vs Baystars , 3-5 </br>Start P.高橋 / C.中村',
    '2024-05-24': 'vs Dragons , 2-5 </br>Start P.サイスニード / C.松本直',
    '2024-05-25': 'vs Dragons , 1-0 </br>Start P.ヤフーレ / C.中村',
    '2024-05-26': 'vs Dragons , 5-0 </br>Start P.松本 / C.中村',
    '2024-05-28': 'vs Marines , 3-5 </br>Start P.吉村 / C.中村',
    '2024-05-29': 'vs Marines , 3-3 </br>Start P.小川 / C.中村',
    '2024-05-30': 'vs Marines , 3-3 </br>Start P.高橋 / C.中村',
    '2024-05-31': 'vs Eagles , 5-3 </br>Start P.サイスニード / C.松本直',
    '2024-06-01': 'vs Eagles , 8-2 </br>Start P.ヤフーレ / C.中村',
    '2024-06-02': 'vs Eagles , 0-4 </br>Start P.石川 / C.中村',
    '2024-06-04': 'vs Lions , 4-3 </br>Start P.吉村 / C.中村',
    '2024-06-05': 'vs Lions , 7-2 </br>Start P.小川 / C.中村',
    '2024-06-06': 'vs Lions , 3-1 </br>Start P.高橋 / C.中村',
    '2024-06-07': 'vs Fighters , 4-5 </br>Start P.松本 / C.中村',
    '2024-06-08': 'vs Fighters , 6-3 </br>Start P.サイスニード / C.松本直',
    '2024-06-09': 'vs Fighters , 1-0 </br>Start P.ヤフーレ / C.松本直',
    '2024-06-11': 'vs Hawks , 4-2 </br>Start P.吉村 / C.松本直',
    '2024-06-12': 'vs Hawks , 3-9 </br>Start P.山野 / C.鈴木',
    '2024-06-13': 'vs Hawks , 6-3 </br>Start P.高橋 / C.松本直',
    '2024-06-14': 'vs Buffaloes , 3-5 </br>Start P.奥川 / C.松本直',
    '2024-06-15': 'vs Buffaloes , 9-3 </br>Start P.サイスニード / C.松本直',
    '2024-06-16': 'vs Buffaloes , 4-5 </br>Start P.ヤフーレ / C.松本直',
    '2024-06-21': 'vs Giants , 2-4 </br>Start P.吉村 / C.中村',
    '2024-06-22': 'vs Giants , 0-3 </br>Start P.サイスニード / C.松本直',
    '2024-06-23': 'vs Giants , 4-3 </br>Start P.ヤフーレ / C.中村',
    '2024-06-25': 'vs Carp , 3-0 </br>Start P.高橋 / C.松本直',
    '2024-06-26': 'vs Carp , 5-1 </br>Start P.小川 / C.中村',
    '2024-06-27': 'vs Carp , 4-3 </br>Start P.石川 / C.松本直',
    '2024-06-29': 'vs Tigers , 6-1 </br>Start P.奥川 / C.中村',
    '2024-06-30': 'vs Tigers , 6-5 </br>Start P.サイスニード / C.松本直',
    '2024-07-02': 'vs Baystars , 6-4 </br>Start P.吉村 / C.中村',
    '2024-07-03': 'vs Baystars , 3-5 </br>Start P.山野 / C.松本直',
    '2024-07-04': 'vs Baystars , 3-0 </br>Start P.ヤフーレ / C.松本直',
    '2024-07-05': 'vs Giants , 3-10 </br>Start P.小川 / C.中村',
    '2024-07-06': 'vs Giants , 1-4 </br>Start P.高橋 / C.中村',
    '2024-07-07': 'vs Giants , 3-7 </br>Start P.サイスニード / C.松本直',
    '2024-07-09': 'vs Tigers , 2-1 </br>Start P.吉村 / C.中村',
    '2024-07-10': 'vs Tigers , 4-1 </br>Start P.奥川 / C.松本直',
    '2024-07-12': 'vs Carp , 4-3 </br>Start P.石川 / C.松本直',
    '2024-07-13': 'vs Carp , 1-0 </br>Start P.小澤 / C.中村',
    '2024-07-15': 'vs Dragons , 4-1 </br>Start P.ヤフーレ / C.中村',
    '2024-07-16': 'vs Dragons , 4-3 </br>Start P.山野 / C.中村',
    '2024-07-19': 'vs Baystars , 7-8 </br>Start P.吉村 / C.中村',
    '2024-07-20': 'vs Baystars , 6-4 </br>Start P.サイスニード / C.中村',
    '2024-07-21': 'vs Baystars , 8-7 </br>Start P.奥川 / C.中村',
    '2024-07-26': 'vs Carp , 6-9 </br>Start P.山野 / C.中村',
    '2024-07-27': 'vs Carp , 3-0 </br>Start P.高橋 / C.中村',
    '2024-07-28': 'vs Carp , 5-4 </br>Start P.阪口 / C.松本直',
    '2024-07-30': 'vs Dragons , 6-0 </br>Start P.ヤフーレ / C.中村',
    '2024-07-31': 'vs Dragons , 1-0 </br>Start P.サイスニード / C.松本直',
    '2024-08-01': 'vs Dragons , 3-2 </br>Start P.吉村 / C.中村',
    '2024-08-02': 'vs Giants , 2-4 </br>Start P.奥川 / C.中村',
    '2024-08-03': 'vs Giants , 8-4 </br>Start P.高橋 / C.中村',
    '2024-08-04': 'vs Giants , 4-1 </br>Start P.石川 / C.西田',
    '2024-08-06': 'vs Tigers , 5-4 </br>Start P.ヤフーレ / C.中村',
    '2024-08-07': 'vs Tigers , 4-0 </br>Start P.サイスニード / C.松本直',
    '2024-08-08': 'vs Tigers , 3-6 </br>Start P.吉村 / C.松本直',
    '2024-08-09': 'vs Baystars , 5-2 </br>Start P.高梨 / C.内山',
    '2024-08-10': 'vs Baystars , 14-4 </br>Start P.高橋 / C.西田',
    '2024-08-11': 'vs Baystars , 4-5 </br>Start P.奥川 / C.松本直',
    '2024-08-12': 'vs Dragons , 5-4 </br>Start P.小川 / C.内山',
    '2024-08-13': 'vs Dragons , 4-5 </br>Start P.ヤフーレ / C.内山',
    '2024-08-14': 'vs Dragons , 7-6 </br>Start P.サイスニード / C.松本直',
    '2024-08-17': 'vs Carp , 6-3 </br>Start P.高橋 / C.松本直',
    '2024-08-18': 'vs Carp , 2-8 </br>Start P.石川 / C.松本直',
    '2024-08-20': 'vs Tigers , 8-3 </br>Start P.吉村 / C.松本直',
    '2024-08-21': 'vs Tigers , 10-4 </br>Start P.サイスニード / C.内山',
    '2024-08-22': 'vs Tigers , 2-5 </br>Start P.ヤフーレ / C.松本直',
    '2024-08-23': 'vs Baystars , 2-5 </br>Start P.高梨 / C.松本直',
    '2024-08-24': 'vs Baystars , 3-0 </br>Start P.高橋 / C.松本直',
    '2024-08-25': 'vs Baystars , 4-10 </br>Start P.山野 / C.松本直',
    '2024-08-27': 'vs Giants , 2-5 </br>Start P.吉村 / C.中村',
    '2024-08-28': 'vs Giants , 2-3 </br>Start P.サイスニード / C.松本直',
    '2024-08-31': 'vs Carp , 7-0 </br>Start P.高橋 / C.松本直',
    '2024-09-01': 'vs Carp , 5-1 </br>Start P.高梨 / C.中村',
    '2024-09-03': 'vs Giants , 3-4 </br>Start P.ヤフーレ / C.中村',
    '2024-09-04': 'vs Giants , 0-3 </br>Start P.吉村 / C.中村',
    '2024-09-05': 'vs Giants , 3-0 </br>Start P.山野 / C.松本直',
    '2024-09-06': 'vs Tigers , 1-9 </br>Start P.サイスニード / C.中村',
    '2024-09-07': 'vs Tigers , 0-6 </br>Start P.高橋 / C.中村',
    '2024-09-08': 'vs Tigers , 5-3 </br>Start P.高梨 / C.内山',
    '2024-09-10': 'vs Dragons , 3-1 </br>Start P.ヤフーレ / C.中村',
    '2024-09-11': 'vs Dragons , 1-8 </br>Start P.吉村 / C.中村',
    '2024-09-12': 'vs Dragons , 4-9 </br>Start P.サイスニード / C.内山',
    '2024-09-13': 'vs Giants , 7-2 </br>Start P.山野 / C.松本直',
    '2024-09-14': 'vs Giants , 1-4 </br>Start P.高橋 / C.中村',
    '2024-09-15': 'vs Tigers , 2-1 </br>Start P.高梨 / C.内山',
    //@@NEXTSCORE@@
};
var chartData24 = [];
for (var d in datas24) {
    chartData24.push({
        date: moment(d, 'YYYY-MM-DD').startOf('day').toDate(),
        count: datas24[d],
        score: score24[d],
    });
};
var heatmap24 = calendarHeatmap()
  .data(chartData24)
  .startDate('2024-03-22')
  .endDate('2024-10-08')
  .selector('#calmap24')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap24();  // render the chart
