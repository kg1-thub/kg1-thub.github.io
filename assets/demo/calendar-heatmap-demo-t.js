var squareLength = 18;
var _colorRange = ['#ECEFF2', '#fcc800'];

// 2025
var datas25 = {
    '2025-03-28': 1,
    '2025-03-29': 1,
    '2025-03-30': -1,
    '2025-04-01': -1,
    '2025-04-02': 0,
    '2025-04-03': -1,
    '2025-04-04': 1,
    '2025-04-05': 1,
    '2025-04-06': 1,
    '2025-04-08': -1,
    '2025-04-09': -1,
    '2025-04-11': 1,
    '2025-04-12': -1,
    '2025-04-15': 1,
    '2025-04-17': 1,
    '2025-04-18': -1,
    '2025-04-19': -1,
    '2025-04-20': 1,
    '2025-04-22': 1,
    '2025-04-23': 1,
    '2025-04-24': 1,
    '2025-04-25': 1,
    '2025-04-26': 1,
    '2025-04-27': 0,
    '2025-04-27': -1,
    '2025-04-29': -1,
    '2025-04-30': -1,
    '2025-05-01': -1,
    '2025-05-02': 1,
    '2025-05-03': 1,
    '2025-05-04': -1,
    '2025-05-05': 1,
    '2025-05-06': 1,
    '2025-05-07': -1,
    '2025-05-10': 1,
    '2025-05-11': 1,
    '2025-05-13': 0,
    '2025-05-15': -1,
    '2025-05-16': -1,
    '2025-05-17': 1,
    '2025-05-18': 1,
    '2025-05-20': 1,
    '2025-05-21': -1,
    '2025-05-22': -1,
    '2025-05-23': 1,
    '2025-05-24': -1,
    //@@NEXTGAME@@
};
var score25 = {
    '2025-03-28': 'vs Carp , 0-4 </br>Start P.村上 / C.坂本',
    '2025-03-29': 'vs Carp , 2-3 </br>Start P.富田 / C.坂本',
    '2025-03-30': 'vs Carp , 2-0 </br>Start P.門別 / C.梅野',
    '2025-04-01': 'vs Baystars , 1-7 </br>Start P.才木 / C.坂本',
    '2025-04-02': 'vs Baystars , 6-6 </br>Start P.ビーズリー / C.梅野',
    '2025-04-03': 'vs Baystars , 2-5 </br>Start P.デュプランティエ / C.榮枝',
    '2025-04-04': 'vs Giants , 2-7 </br>Start P.村上 / C.坂本',
    '2025-04-05': 'vs Giants , 3-4 </br>Start P.富田 / C.坂本',
    '2025-04-06': 'vs Giants , 0-1 </br>Start P.門別 / C.梅野',
    '2025-04-08': 'vs Swallows , 0-1 </br>Start P.才木 / C.梅野',
    '2025-04-09': 'vs Swallows , 3-5 </br>Start P.ビーズリー / C.梅野',
    '2025-04-11': 'vs Dragons , 6-3 </br>Start P.村上 / C.坂本',
    '2025-04-12': 'vs Dragons , 2-3 </br>Start P.西 / C.坂本',
    '2025-04-15': 'vs Swallows , 1-5 </br>Start P.才木 / C.梅野',
    '2025-04-17': 'vs Swallows , 5-7 </br>Start P.ビーズリー / C.梅野',
    '2025-04-18': 'vs Carp , 2-5 </br>Start P.村上 / C.坂本',
    '2025-04-19': 'vs Carp , 0-3 </br>Start P.デュプランティエ / C.坂本',
    '2025-04-20': 'vs Carp , 8-1 </br>Start P.伊原 / C.坂本',
    '2025-04-22': 'vs Baystars , 2-4 </br>Start P.才木 / C.梅野',
    '2025-04-23': 'vs Baystars , 2-3 </br>Start P.門別 / C.梅野',
    '2025-04-24': 'vs Baystars , 2-4 </br>Start P.富田 / C.坂本',
    '2025-04-25': 'vs Giants , 4-1 </br>Start P.村上 / C.坂本',
    '2025-04-26': 'vs Giants , 6-2 </br>Start P.デュプランティエ / C.坂本',
    '2025-04-27': 'vs Giants , 1-2 </br>Start P.0.47 / C.坂本',
    '2025-04-27': 'vs Giants , 1-2 </br>Start P.伊原 / C.坂本',
    '2025-04-29': 'vs Dragons , 4-1 </br>Start P.才木 / C.梅野',
    '2025-04-30': 'vs Dragons , 5-4 </br>Start P.門別 / C.坂本',
    '2025-05-01': 'vs Dragons , 3-2 </br>Start P.大竹 / C.坂本',
    '2025-05-02': 'vs Swallows , 4-0 </br>Start P.村上 / C.坂本',
    '2025-05-03': 'vs Swallows , 7-1 </br>Start P.デュプランティエ / C.坂本',
    '2025-05-04': 'vs Swallows , 2-5 </br>Start P.伊原 / C.坂本',
    '2025-05-05': 'vs Giants , 1-10 </br>Start P.富田 / C.坂本',
    '2025-05-06': 'vs Giants , 1-7 </br>Start P.才木 / C.梅野',
    '2025-05-07': 'vs Giants , 6-4 </br>Start P.門別 / C.梅野',
    '2025-05-10': 'vs Dragons , 2-0 </br>Start P.村上 / C.坂本',
    '2025-05-11': 'vs Dragons , 1-0 </br>Start P.伊原 / C.坂本',
    '2025-05-13': 'vs Baystars , 1-1 </br>Start P.才木 / C.梅野',
    '2025-05-15': 'vs Baystars , 1-0 </br>Start P.デュプランティエ / C.坂本',
    '2025-05-16': 'vs Carp , 2-4 </br>Start P.村上 / C.坂本',
    '2025-05-17': 'vs Carp , 5-2 </br>Start P.大竹 / C.坂本',
    '2025-05-18': 'vs Carp , 3-1 </br>Start P.伊原 / C.坂本',
    '2025-05-20': 'vs Giants , 4-0 </br>Start P.才木 / C.梅野',
    '2025-05-21': 'vs Giants , 4-5 </br>Start P.ビーズリー / C.梅野',
    '2025-05-22': 'vs Giants , 2-3 </br>Start P.デュプランティエ / C.坂本',
    '2025-05-23': 'vs Dragons , 0-3 </br>Start P.村上 / C.坂本',
    '2025-05-24': 'vs Dragons , 5-4 </br>Start P.大竹 / C.坂本',
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
  .selector('#calmap25t')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap25();  // render the chart
