var squareLength = 18;
var _colorRange = ['#ECEFF2', '#fcc800'];

// 2024
var datas24 = {
    '2024-03-29': -1,
    '2024-03-30': -1,
    '2024-03-31': 1,
    '2024-04-02': -1,
    '2024-04-03': 1,
    '2024-04-04': -1,
    '2024-04-05': 1,
    '2024-04-06': 1,
    '2024-04-07': -1,
    '2024-04-09': 1,
    '2024-04-10': -1,
    '2024-04-11': -1,
    '2024-04-12': 0,
    '2024-04-13': -1,
    '2024-04-14': 1,
    '2024-04-16': 0,
    '2024-04-17': 1,
    '2024-04-18': 1,
    '2024-04-19': 1,
    '2024-04-20': 1,
    '2024-04-21': 1,
    '2024-04-23': 0,
    '2024-04-24': 1,
    '2024-04-26': -1,
    '2024-04-27': 1,
    '2024-04-28': 1,
    '2024-04-30': 1,
    '2024-05-01': 0,
    '2024-05-03': -1,
    '2024-05-04': -1,
    '2024-05-05': 1,
    '2024-05-07': -1,
    '2024-05-08': -1,
    '2024-05-10': 1,
    '2024-05-11': -1,
    '2024-05-12': 1,
    '2024-05-14': -1,
    '2024-05-15': 1,
    '2024-05-16': 1,
    '2024-05-17': -1,
    '2024-05-18': 1,
    '2024-05-19': 1,
    '2024-05-21': -1,
    '2024-05-22': 1,
    '2024-05-23': 1,
    '2024-05-24': -1,
    '2024-05-25': 1,
    '2024-05-26': -1,
    '2024-05-29': -1,
    '2024-05-30': -1,
    '2024-05-31': -1,
    '2024-06-01': -1,
    '2024-06-02': 1,
    '2024-06-04': -1,
    '2024-06-05': -1,
    '2024-06-06': -1,
    '2024-06-07': 1,
    '2024-06-08': 1,
    '2024-06-09': 1,
    '2024-06-11': -1,
    '2024-06-12': -1,
    '2024-06-13': 1,
    '2024-06-14': -1,
    '2024-06-15': -1,
    '2024-06-16': 1,
    '2024-06-18': 1,
    '2024-06-21': 1,
    '2024-06-22': -1,
    '2024-06-25': -1,
    '2024-06-26': 0,
    '2024-06-27': 1,
    '2024-06-29': -1,
    '2024-06-30': -1,
    '2024-07-02': 1,
    '2024-07-03': 1,
    '2024-07-05': -1,
    '2024-07-06': 1,
    '2024-07-07': 1,
    '2024-07-09': 1,
    '2024-07-10': 1,
    '2024-07-12': -1,
    '2024-07-13': -1,
    '2024-07-14': 1,
    '2024-07-15': 1,
    '2024-07-16': -1,
    '2024-07-17': -1,
    '2024-07-19': -1,
    '2024-07-20': -1,
    '2024-07-21': 1,
    '2024-07-21': 1,
    '2024-07-21': 1,
    '2024-07-26': 1,
    '2024-07-27': 1,
    '2024-07-28': 1,
    '2024-07-30': 1,
    '2024-07-31': 1,
    '2024-08-01': 1,
    '2024-08-02': 1,
    '2024-08-03': -1,
    '2024-08-04': 1,
    '2024-08-06': -1,
    '2024-08-07': -1,
    '2024-08-08': 1,
    '2024-08-09': -1,
    '2024-08-10': -1,
    '2024-08-11': 1,
    '2024-08-12': -1,
    '2024-08-13': 1,
    //@@NEXTGAME@@
};
var score24 = {
    '2024-03-29': 'vs Giants , 4-0 </br>Start P.青柳 / C.坂本',
    '2024-03-30': 'vs Giants , 5-0 </br>Start P.大竹 / C.坂本',
    '2024-03-31': 'vs Giants , 0-5 </br>Start P.才木 / C.梅野',
    '2024-04-02': 'vs Baystars , 3-5 </br>Start P.村上 / C.坂本',
    '2024-04-03': 'vs Baystars , 5-2 </br>Start P.伊藤 / C.梅野',
    '2024-04-04': 'vs Baystars , 2-3 </br>Start P.西 / C.梅野',
    '2024-04-05': 'vs Swallows , 6-7 </br>Start P.青柳 / C.坂本',
    '2024-04-06': 'vs Swallows , 3-4 </br>Start P.大竹 / C.坂本',
    '2024-04-07': 'vs Swallows , 3-1 </br>Start P.才木 / C.梅野',
    '2024-04-09': 'vs Carp , 1-0 </br>Start P.村上 / C.坂本',
    '2024-04-10': 'vs Carp , 2-6 </br>Start P.伊藤 / C.梅野',
    '2024-04-11': 'vs Carp , 0-1 </br>Start P.西 / C.梅野',
    '2024-04-12': 'vs Dragons , 2-2 </br>Start P.青柳 / C.坂本',
    '2024-04-13': 'vs Dragons , 5-2 </br>Start P.大竹 / C.坂本',
    '2024-04-14': 'vs Dragons , 1-2 </br>Start P.才木 / C.梅野',
    '2024-04-16': 'vs Giants , 1-1 </br>Start P.村上 / C.坂本',
    '2024-04-17': 'vs Giants , 2-0 </br>Start P.伊藤 / C.梅野',
    '2024-04-18': 'vs Giants , 2-1 </br>Start P.西 / C.梅野',
    '2024-04-19': 'vs Dragons , 7-0 </br>Start P.青柳 / C.坂本',
    '2024-04-20': 'vs Dragons , 15-2 </br>Start P.大竹 / C.坂本',
    '2024-04-21': 'vs Dragons , 3-0 </br>Start P.才木 / C.梅野',
    '2024-04-23': 'vs Baystars , 1-1 </br>Start P.村上 / C.坂本',
    '2024-04-24': 'vs Baystars , 3-5 </br>Start P.伊藤 / C.梅野',
    '2024-04-26': 'vs Swallows , 2-8 </br>Start P.青柳 / C.坂本',
    '2024-04-27': 'vs Swallows , 5-4 </br>Start P.大竹 / C.坂本',
    '2024-04-28': 'vs Swallows , 4-3 </br>Start P.才木 / C.梅野',
    '2024-04-30': 'vs Carp , 1-7 </br>Start P.村上 / C.坂本',
    '2024-05-01': 'vs Carp , 2-2 </br>Start P.伊藤 / C.梅野',
    '2024-05-03': 'vs Giants , 8-5 </br>Start P.門別 / C.梅野',
    '2024-05-04': 'vs Giants , 2-1 </br>Start P.西 / C.坂本',
    '2024-05-05': 'vs Giants , 2-4 </br>Start P.才木 / C.梅野',
    '2024-05-07': 'vs Carp , 0-2 </br>Start P.村上 / C.坂本',
    '2024-05-08': 'vs Carp , 1-3 </br>Start P.大竹 / C.坂本',
    '2024-05-10': 'vs Baystars , 3-4 </br>Start P.青柳 / C.坂本',
    '2024-05-11': 'vs Baystars , 11-9 </br>Start P.伊藤 / C.梅野',
    '2024-05-12': 'vs Baystars , 0-1 </br>Start P.才木 / C.梅野',
    '2024-05-14': 'vs Dragons , 4-2 </br>Start P.村上 / C.坂本',
    '2024-05-15': 'vs Dragons , 0-1 </br>Start P.大竹 / C.坂本',
    '2024-05-16': 'vs Dragons , 4-9 </br>Start P.西 / C.梅野',
    '2024-05-17': 'vs Swallows , 2-4 </br>Start P.青柳 / C.坂本',
    '2024-05-18': 'vs Swallows , 1-0 </br>Start P.ビーズリー / C.梅野',
    '2024-05-19': 'vs Swallows , 7-2 </br>Start P.才木 / C.梅野',
    '2024-05-21': 'vs Carp , 6-2 </br>Start P.村上 / C.坂本',
    '2024-05-22': 'vs Carp , 1-2 </br>Start P.大竹 / C.坂本',
    '2024-05-23': 'vs Carp , 1-2 </br>Start P.西 / C.梅野',
    '2024-05-24': 'vs Giants , 0-1 </br>Start P.及川 / C.坂本',
    '2024-05-25': 'vs Giants , 3-0 </br>Start P.ビーズリー / C.梅野',
    '2024-05-26': 'vs Giants , 1-2 </br>Start P.才木 / C.梅野',
    '2024-05-29': 'vs Fighters , 2-8 </br>Start P.大竹 / C.坂本',
    '2024-05-30': 'vs Fighters , 0-6 </br>Start P.西 / C.梅野',
    '2024-05-31': 'vs Marines , 5-4 </br>Start P.青柳 / C.坂本',
    '2024-06-01': 'vs Marines , 3-2 </br>Start P.ビーズリー / C.梅野',
    '2024-06-02': 'vs Marines , 0-1 </br>Start P.才木 / C.梅野',
    '2024-06-04': 'vs Eagles , 1-3 </br>Start P.村上 / C.梅野',
    '2024-06-05': 'vs Eagles , 2-3 </br>Start P.大竹 / C.坂本',
    '2024-06-06': 'vs Eagles , 1-4 </br>Start P.西 / C.梅野',
    '2024-06-07': 'vs Lions , 5-1 </br>Start P.伊藤 / C.坂本',
    '2024-06-08': 'vs Lions , 4-1 </br>Start P.ビーズリー / C.梅野',
    '2024-06-09': 'vs Lions , 3-0 </br>Start P.才木 / C.梅野',
    '2024-06-11': 'vs Buffaloes , 4-0 </br>Start P.村上 / C.梅野',
    '2024-06-12': 'vs Buffaloes , 4-0 </br>Start P.大竹 / C.坂本',
    '2024-06-13': 'vs Buffaloes , 0-5 </br>Start P.西 / C.梅野',
    '2024-06-14': 'vs Hawks , 2-0 </br>Start P.伊藤 / C.坂本',
    '2024-06-15': 'vs Hawks , 6-2 </br>Start P.ビーズリー / C.梅野',
    '2024-06-16': 'vs Hawks , 1-4 </br>Start P.才木 / C.梅野',
    '2024-06-18': 'vs Fighters , 2-1 </br>Start P.村上 / C.梅野',
    '2024-06-21': 'vs Baystars , 1-0 </br>Start P.西 / C.梅野',
    '2024-06-22': 'vs Baystars , 2-5 </br>Start P.伊藤 / C.坂本',
    '2024-06-25': 'vs Dragons , 0-1 </br>Start P.才木 / C.梅野',
    '2024-06-26': 'vs Dragons , 1-1 </br>Start P.大竹 / C.坂本',
    '2024-06-27': 'vs Dragons , 8-1 </br>Start P.村上 / C.梅野',
    '2024-06-29': 'vs Swallows , 6-1 </br>Start P.伊藤 / C.坂本',
    '2024-06-30': 'vs Swallows , 6-5 </br>Start P.西 / C.梅野',
    '2024-07-02': 'vs Carp , 0-3 </br>Start P.才木 / C.梅野',
    '2024-07-03': 'vs Carp , 1-2 </br>Start P.大竹 / C.坂本',
    '2024-07-05': 'vs Baystars , 1-2 </br>Start P.ビーズリー / C.梅野',
    '2024-07-06': 'vs Baystars , 2-1 </br>Start P.伊藤 / C.坂本',
    '2024-07-07': 'vs Baystars , 6-5 </br>Start P.西 / C.梅野',
    '2024-07-09': 'vs Swallows , 2-1 </br>Start P.才木 / C.梅野',
    '2024-07-10': 'vs Swallows , 4-1 </br>Start P.大竹 / C.坂本',
    '2024-07-12': 'vs Dragons , 3-0 </br>Start P.村上 / C.梅野',
    '2024-07-13': 'vs Dragons , 10-8 </br>Start P.伊藤 / C.坂本',
    '2024-07-14': 'vs Dragons , 2-6 </br>Start P.西 / C.梅野',
    '2024-07-15': 'vs Giants , 0-2 </br>Start P.ビーズリー / C.梅野',
    '2024-07-16': 'vs Giants , 2-1 </br>Start P.才木 / C.梅野',
    '2024-07-17': 'vs Giants , 4-3 </br>Start P.大竹 / C.坂本',
    '2024-07-19': 'vs Carp , 0-1 </br>Start P.村上 / C.坂本',
    '2024-07-20': 'vs Carp , 0-1 </br>Start P.及川 / C.梅野',
    '2024-07-21': 'vs Carp , 12-3 </br>Start P.西 / C.梅野',
    '2024-07-21': 'vs Carp , 12-3 </br>Start P.西 / C.梅野',
    '2024-07-21': 'vs Carp , 12-3 </br>Start P.西 / C.梅野',
    '2024-07-26': 'vs Dragons , 5-1 </br>Start P.村上 / C.坂本',
    '2024-07-27': 'vs Dragons , 7-3 </br>Start P.大竹 / C.坂本',
    '2024-07-28': 'vs Dragons , 4-3 </br>Start P.西 / C.梅野',
    '2024-07-30': 'vs Giants , 5-1 </br>Start P.才木 / C.梅野',
    '2024-07-31': 'vs Giants , 9-6 </br>Start P.及川 / C.坂本',
    '2024-08-01': 'vs Giants , 9-2 </br>Start P.ビーズリー / C.梅野',
    '2024-08-02': 'vs Baystars , 2-4 </br>Start P.村上 / C.坂本',
    '2024-08-03': 'vs Baystars , 10-4 </br>Start P.大竹 / C.坂本',
    '2024-08-04': 'vs Baystars , 0-4 </br>Start P.西 / C.梅野',
    '2024-08-06': 'vs Swallows , 5-4 </br>Start P.才木 / C.梅野',
    '2024-08-07': 'vs Swallows , 4-0 </br>Start P.及川 / C.坂本',
    '2024-08-08': 'vs Swallows , 3-6 </br>Start P.ビーズリー / C.梅野',
    '2024-08-09': 'vs Carp , 3-6 </br>Start P.村上 / C.坂本',
    '2024-08-10': 'vs Carp , 1-5 </br>Start P.大竹 / C.坂本',
    '2024-08-11': 'vs Carp , 4-0 </br>Start P.高橋 / C.梅野',
    '2024-08-12': 'vs Giants , 1-0 </br>Start P.西 / C.梅野',
    '2024-08-13': 'vs Giants , 5-8 </br>Start P.才木 / C.梅野',
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
  .startDate('2024-03-29')
  .endDate('2024-10-08')
  .selector('#calmap24')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap24();  // render the chart
