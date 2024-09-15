var squareLength = 18;
var _colorRange = ['#ECEFF2', '#F1533A'];

// 2024
var datas24 = {
    '2024-03-29': -1,
    '2024-03-30': -1,
    '2024-03-31': 1,
    '2024-04-02': 1,
    '2024-04-04': 1,
    '2024-04-05': -1,
    '2024-04-06': -1,
    '2024-04-07': -1,
    '2024-04-09': -1,
    '2024-04-10': 1,
    '2024-04-11': 1,
    '2024-04-12': -1,
    '2024-04-13': -1,
    '2024-04-14': -1,
    '2024-04-16': 1,
    '2024-04-17': 1,
    '2024-04-19': 0,
    '2024-04-20': 1,
    '2024-04-21': 0,
    '2024-04-23': 1,
    '2024-04-25': -1,
    '2024-04-27': 1,
    '2024-04-28': 0,
    '2024-04-30': -1,
    '2024-05-01': 0,
    '2024-05-03': -1,
    '2024-05-04': 1,
    '2024-05-05': -1,
    '2024-05-07': 1,
    '2024-05-08': 1,
    '2024-05-10': 1,
    '2024-05-11': -1,
    '2024-05-14': 1,
    '2024-05-15': -1,
    '2024-05-17': 1,
    '2024-05-18': 1,
    '2024-05-19': 1,
    '2024-05-21': 1,
    '2024-05-22': -1,
    '2024-05-23': -1,
    '2024-05-24': 1,
    '2024-05-25': 1,
    '2024-05-26': 1,
    '2024-05-28': 1,
    '2024-05-29': 1,
    '2024-05-30': -1,
    '2024-05-31': -1,
    '2024-06-01': -1,
    '2024-06-02': -1,
    '2024-06-04': -1,
    '2024-06-05': 1,
    '2024-06-06': 1,
    '2024-06-07': 1,
    '2024-06-08': -1,
    '2024-06-09': 1,
    '2024-06-11': 1,
    '2024-06-12': -1,
    '2024-06-13': 1,
    '2024-06-14': 1,
    '2024-06-15': 1,
    '2024-06-16': -1,
    '2024-06-21': -1,
    '2024-06-22': 1,
    '2024-06-23': -1,
    '2024-06-25': 1,
    '2024-06-26': 1,
    '2024-06-27': 1,
    '2024-06-28': -1,
    '2024-06-29': 1,
    '2024-06-30': -1,
    '2024-07-02': -1,
    '2024-07-03': -1,
    '2024-07-04': 1,
    '2024-07-05': -1,
    '2024-07-06': -1,
    '2024-07-07': -1,
    '2024-07-09': -1,
    '2024-07-12': 1,
    '2024-07-13': 1,
    '2024-07-15': -1,
    '2024-07-17': 1,
    '2024-07-19': 1,
    '2024-07-20': 1,
    '2024-07-21': -1,
    '2024-07-26': 1,
    '2024-07-27': -1,
    '2024-07-28': -1,
    '2024-07-30': 1,
    '2024-07-31': 1,
    '2024-08-01': 1,
    '2024-08-02': 1,
    '2024-08-03': 1,
    '2024-08-04': 1,
    '2024-08-06': 1,
    '2024-08-07': 0,
    '2024-08-08': -1,
    '2024-08-09': 1,
    '2024-08-10': 1,
    '2024-08-11': -1,
    '2024-08-12': 1,
    '2024-08-13': -1,
    '2024-08-14': 1,
    '2024-08-17': -1,
    '2024-08-18': 1,
    '2024-08-20': 1,
    '2024-08-21': -1,
    '2024-08-22': 1,
    '2024-08-23': -1,
    '2024-08-24': 1,
    '2024-08-25': -1,
    '2024-08-27': -1,
    '2024-08-28': 1,
    '2024-08-29': -1,
    '2024-08-31': 1,
    '2024-09-01': 1,
    '2024-09-03': -1,
    '2024-09-04': -1,
    '2024-09-05': -1,
    '2024-09-06': -1,
    '2024-09-07': 1,
    '2024-09-08': -1,
    '2024-09-10': -1,
    '2024-09-11': -1,
    '2024-09-12': -1,
    '2024-09-13': -1,
    '2024-09-14': -1,
    '2024-09-15': 1,
    //@@NEXTGAME@@
};
var score24 = {
    '2024-03-29': 'vs Baystars , 4-3 </br>Start P.九里 / C.坂倉',
    '2024-03-30': 'vs Baystars , 6-1 </br>Start P.黒原 / C.坂倉',
    '2024-03-31': 'vs Baystars , 1-5 </br>Start P.アドゥワ / C.坂倉',
    '2024-04-02': 'vs Swallows , 2-1 </br>Start P.床田 / C.坂倉',
    '2024-04-04': 'vs Swallows , 6-3 </br>Start P.大瀬良 / C.會澤',
    '2024-04-05': 'vs Dragons , 0-1 </br>Start P.九里 / C.坂倉',
    '2024-04-06': 'vs Dragons , 0-4 </br>Start P.ハッチ / C.坂倉',
    '2024-04-07': 'vs Dragons , 0-1 </br>Start P.黒原 / C.坂倉',
    '2024-04-09': 'vs Tigers , 1-0 </br>Start P.床田 / C.坂倉',
    '2024-04-10': 'vs Tigers , 2-6 </br>Start P.アドゥワ / C.會澤',
    '2024-04-11': 'vs Tigers , 0-1 </br>Start P.大瀬良 / C.會澤',
    '2024-04-12': 'vs Giants , 9-4 </br>Start P.九里 / C.坂倉',
    '2024-04-13': 'vs Giants , 3-2 </br>Start P.森下 / C.會澤',
    '2024-04-14': 'vs Giants , 2-1 </br>Start P.ハッチ / C.坂倉',
    '2024-04-16': 'vs Baystars , 11-2 </br>Start P.床田 / C.坂倉',
    '2024-04-17': 'vs Baystars , 5-1 </br>Start P.アドゥワ / C.坂倉',
    '2024-04-19': 'vs Giants , 0-0 </br>Start P.九里 / C.坂倉',
    '2024-04-20': 'vs Giants , 6-2 </br>Start P.森下 / C.會澤',
    '2024-04-21': 'vs Giants , 0-0 </br>Start P.1.56 / C.會澤',
    '2024-04-23': 'vs Swallows , 0-2 </br>Start P.床田 / C.坂倉',
    '2024-04-25': 'vs Swallows , 9-8 </br>Start P.ハッチ / C.坂倉',
    '2024-04-27': 'vs Dragons , 4-6 </br>Start P.森下 / C.會澤',
    '2024-04-28': 'vs Dragons , 0-0 </br>Start P.九里 / C.坂倉',
    '2024-04-30': 'vs Tigers , 1-7 </br>Start P.床田 / C.坂倉',
    '2024-05-01': 'vs Tigers , 2-2 </br>Start P.大瀬良 / C.會澤',
    '2024-05-03': 'vs Baystars , 0-2 </br>Start P.アドゥワ / C.坂倉',
    '2024-05-04': 'vs Baystars , 4-1 </br>Start P.森下 / C.會澤',
    '2024-05-05': 'vs Baystars , 0-5 </br>Start P.九里 / C.坂倉',
    '2024-05-07': 'vs Tigers , 0-2 </br>Start P.床田 / C.坂倉',
    '2024-05-08': 'vs Tigers , 1-3 </br>Start P.大瀬良 / C.會澤',
    '2024-05-10': 'vs Dragons , 6-3 </br>Start P.アドゥワ / C.石原',
    '2024-05-11': 'vs Dragons , 0-4 </br>Start P.九里 / C.會澤',
    '2024-05-14': 'vs Swallows , 1-2 </br>Start P.床田 / C.坂倉',
    '2024-05-15': 'vs Swallows , 2-0 </br>Start P.森下 / C.會澤',
    '2024-05-17': 'vs Giants , 2-0 </br>Start P.大瀬良 / C.會澤',
    '2024-05-18': 'vs Giants , 4-3 </br>Start P.九里 / C.坂倉',
    '2024-05-19': 'vs Giants , 9-3 </br>Start P.アドゥワ / C.坂倉',
    '2024-05-21': 'vs Tigers , 6-2 </br>Start P.床田 / C.坂倉',
    '2024-05-22': 'vs Tigers , 1-2 </br>Start P.森下 / C.會澤',
    '2024-05-23': 'vs Tigers , 1-2 </br>Start P.ハッチ / C.石原',
    '2024-05-24': 'vs Baystars , 2-5 </br>Start P.大瀬良 / C.會澤',
    '2024-05-25': 'vs Baystars , 6-9 </br>Start P.玉村 / C.坂倉',
    '2024-05-26': 'vs Baystars , 2-4 </br>Start P.アドゥワ / C.石原',
    '2024-05-28': 'vs Buffaloes , 2-1 </br>Start P.床田 / C.坂倉',
    '2024-05-29': 'vs Buffaloes , 14-0 </br>Start P.森下 / C.會澤',
    '2024-05-30': 'vs Buffaloes , 2-8 </br>Start P.九里 / C.石原',
    '2024-05-31': 'vs Hawks , 2-1 </br>Start P.大瀬良 / C.會澤',
    '2024-06-01': 'vs Hawks , 2-0 </br>Start P.玉村 / C.石原',
    '2024-06-02': 'vs Hawks , 5-3 </br>Start P.アドゥワ / C.石原',
    '2024-06-04': 'vs Fighters , 0-5 </br>Start P.床田 / C.坂倉',
    '2024-06-05': 'vs Fighters , 6-0 </br>Start P.森下 / C.會澤',
    '2024-06-06': 'vs Fighters , 3-1 </br>Start P.九里 / C.石原',
    '2024-06-07': 'vs Marines , 4-0 </br>Start P.大瀬良 / C.會澤',
    '2024-06-08': 'vs Marines , 1-3 </br>Start P.玉村 / C.石原',
    '2024-06-09': 'vs Marines , 4-1 </br>Start P.アドゥワ / C.石原',
    '2024-06-11': 'vs Lions , 1-2 </br>Start P.床田 / C.坂倉',
    '2024-06-12': 'vs Lions , 5-0 </br>Start P.森下 / C.會澤',
    '2024-06-13': 'vs Lions , 0-5 </br>Start P.九里 / C.坂倉',
    '2024-06-14': 'vs Eagles , 0-1 </br>Start P.大瀬良 / C.會澤',
    '2024-06-15': 'vs Eagles , 3-4 </br>Start P.玉村 / C.坂倉',
    '2024-06-16': 'vs Eagles , 5-3 </br>Start P.アドゥワ / C.坂倉',
    '2024-06-21': 'vs Dragons , 1-0 </br>Start P.床田 / C.坂倉',
    '2024-06-22': 'vs Dragons , 1-3 </br>Start P.大瀬良 / C.會澤',
    '2024-06-23': 'vs Dragons , 2-1 </br>Start P.玉村 / C.石原',
    '2024-06-25': 'vs Swallows , 3-0 </br>Start P.森下 / C.會澤',
    '2024-06-26': 'vs Swallows , 5-1 </br>Start P.九里 / C.坂倉',
    '2024-06-27': 'vs Swallows , 4-3 </br>Start P.アドゥワ / C.石原',
    '2024-06-28': 'vs Giants , 3-2 </br>Start P.床田 / C.坂倉',
    '2024-06-29': 'vs Giants , 1-2 </br>Start P.大瀬良 / C.會澤',
    '2024-06-30': 'vs Giants , 3-2 </br>Start P.玉村 / C.石原',
    '2024-07-02': 'vs Tigers , 0-3 </br>Start P.森下 / C.會澤',
    '2024-07-03': 'vs Tigers , 1-2 </br>Start P.九里 / C.石原',
    '2024-07-04': 'vs Tigers , 7-5 </br>Start P.アドゥワ / C.石原',
    '2024-07-05': 'vs Dragons , 2-0 </br>Start P.床田 / C.坂倉',
    '2024-07-06': 'vs Dragons , 2-1 </br>Start P.大瀬良 / C.會澤',
    '2024-07-07': 'vs Dragons , 2-1 </br>Start P.玉村 / C.石原',
    '2024-07-09': 'vs Giants , 3-5 </br>Start P.森下 / C.會澤',
    '2024-07-12': 'vs Swallows , 4-3 </br>Start P.床田 / C.石原',
    '2024-07-13': 'vs Swallows , 1-0 </br>Start P.大瀬良 / C.會澤',
    '2024-07-15': 'vs Baystars , 6-1 </br>Start P.アドゥワ / C.石原',
    '2024-07-17': 'vs Baystars , 0-3 </br>Start P.森下 / C.會澤',
    '2024-07-19': 'vs Tigers , 0-1 </br>Start P.床田 / C.坂倉',
    '2024-07-20': 'vs Tigers , 0-1 </br>Start P.大瀬良 / C.會澤',
    '2024-07-21': 'vs Tigers , 12-3 </br>Start P.九里 / C.石原',
    '2024-07-26': 'vs Swallows , 6-9 </br>Start P.ハッチ / C.坂倉',
    '2024-07-27': 'vs Swallows , 3-0 </br>Start P.森下 / C.會澤',
    '2024-07-28': 'vs Swallows , 5-4 </br>Start P.九里 / C.石原',
    '2024-07-30': 'vs Baystars , 6-3 </br>Start P.玉村 / C.坂倉',
    '2024-07-31': 'vs Baystars , 2-1 </br>Start P.床田 / C.坂倉',
    '2024-08-01': 'vs Baystars , 2-1 </br>Start P.大瀬良 / C.會澤',
    '2024-08-02': 'vs Dragons , 1-0 </br>Start P.野村 / C.石原',
    '2024-08-03': 'vs Dragons , 4-1 </br>Start P.森下 / C.會澤',
    '2024-08-04': 'vs Dragons , 6-4 </br>Start P.九里 / C.坂倉',
    '2024-08-06': 'vs Giants , 0-5 </br>Start P.アドゥワ / C.坂倉',
    '2024-08-07': 'vs Giants , 3-3 </br>Start P.床田 / C.坂倉',
    '2024-08-08': 'vs Giants , 5-0 </br>Start P.大瀬良 / C.會澤',
    '2024-08-09': 'vs Tigers , 3-6 </br>Start P.森 / C.坂倉',
    '2024-08-10': 'vs Tigers , 1-5 </br>Start P.森下 / C.會澤',
    '2024-08-11': 'vs Tigers , 4-0 </br>Start P.九里 / C.坂倉',
    '2024-08-12': 'vs Baystars , 10-3 </br>Start P.玉村 / C.石原',
    '2024-08-13': 'vs Baystars , 0-6 </br>Start P.野村 / C.石原',
    '2024-08-14': 'vs Baystars , 4-3 </br>Start P.床田 / C.坂倉',
    '2024-08-17': 'vs Swallows , 6-3 </br>Start P.大瀬良 / C.會澤',
    '2024-08-18': 'vs Swallows , 2-8 </br>Start P.九里 / C.石原',
    '2024-08-20': 'vs Giants , 3-8 </br>Start P.森下 / C.會澤',
    '2024-08-21': 'vs Giants , 4-1 </br>Start P.床田 / C.坂倉',
    '2024-08-22': 'vs Giants , 1-2 </br>Start P.アドゥワ / C.坂倉',
    '2024-08-23': 'vs Tigers , 1-3 </br>Start P.玉村 / C.石原',
    '2024-08-24': 'vs Tigers , 2-1 </br>Start P.大瀬良 / C.會澤',
    '2024-08-25': 'vs Tigers , 5-7 </br>Start P.森 / C.石原',
    '2024-08-27': 'vs Dragons , 2-1 </br>Start P.森下 / C.會澤',
    '2024-08-28': 'vs Dragons , 1-2 </br>Start P.床田 / C.坂倉',
    '2024-08-29': 'vs Dragons , 5-1 </br>Start P.九里 / C.坂倉',
    '2024-08-31': 'vs Swallows , 7-0 </br>Start P.大瀬良 / C.會澤',
    '2024-09-01': 'vs Swallows , 5-1 </br>Start P.玉村 / C.坂倉',
    '2024-09-03': 'vs Baystars , 5-1 </br>Start P.森下 / C.會澤',
    '2024-09-04': 'vs Baystars , 6-1 </br>Start P.アドゥワ / C.坂倉',
    '2024-09-05': 'vs Baystars , 4-3 </br>Start P.床田 / C.石原',
    '2024-09-06': 'vs Dragons , 0-3 </br>Start P.大瀬良 / C.會澤',
    '2024-09-07': 'vs Dragons , 2-1 </br>Start P.九里 / C.石原',
    '2024-09-08': 'vs Dragons , 3-4 </br>Start P.玉村 / C.石原',
    '2024-09-10': 'vs Giants , 1-6 </br>Start P.森下 / C.會澤',
    '2024-09-11': 'vs Giants , 2-9 </br>Start P.アドゥワ / C.石原',
    '2024-09-12': 'vs Giants , 0-5 </br>Start P.床田 / C.坂倉',
    '2024-09-13': 'vs Tigers , 7-3 </br>Start P.大瀬良 / C.會澤',
    '2024-09-14': 'vs Tigers , 4-3 </br>Start P.森 / C.坂倉',
    '2024-09-15': 'vs Baystars , 10-2 </br>Start P.常廣 / C.坂倉',
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
