var squareLength = 22;
var _colorRange = ['#EEEEEE', '#008b8b'];
var _colorRangep = ['#EEEEEE', '#bd0026'];

var datas26 = {
'2026-03-26': 1,
'2026-03-27': 0,
'2026-03-28': 0,
'2026-03-30': 1,
'2026-03-31': 1,
'2026-04-01': 0,
'2026-04-03': 4,
'2026-04-04': 2,
'2026-04-05': 4,
'2026-04-06': 4,
'2026-04-07': 2,
'2026-04-08': 0,
'2026-04-10': 1,
//@@TOOLTIP_DATE@@
};
var score26 = {
    '2026-03-26': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .333',
    '2026-03-27': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .167',
    '2026-03-28': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .125',
    '2026-03-30': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .167',
    '2026-03-31': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .200',
    '2026-04-01': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .167',
    '2026-04-03': '(Regular Season)</br><span><strong>1 HR / 0 SB</strong></span></br>2 Hits / 4 RBI / AVG .217',
    '2026-04-04': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>2 Hits / 0 RBI / AVG .241',
    '2026-04-05': '(Regular Season)</br><span><strong>1 HR / 0 SB</strong></span></br>2 Hits / 2 RBI / AVG .273',
    '2026-04-06': '(Regular Season)</br><span><strong>1 HR / 0 SB</strong></span></br>2 Hits / 1 RBI / AVG .282',
    '2026-04-07': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 1 RBI / AVG .286',
    '2026-04-08': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .267',
    '2026-04-10': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .265',
    //@@TOOLTIP@@
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
  .endDate('2026-11-02')
  .selector('#shomap26')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('830px')
  .colorRange(_colorRange);
heatmap26();  // render the chart

var datas26p = {
'2026-03-31': 4,
'2026-04-08': 2,
//@@TOOLTIP_DATE_P@@
};
var score26p = {
    '2026-03-31': '(Regular Season)</br>6.0 IP / 87 NP / 0 R</br>WIN',
    '2026-04-08': '(Regular Season)</br>6.0 IP / 96 NP / 1 R</br>---',
    //@@TOOLTIP_P@@
};
var chartData26p = [];
for (var d in datas26p) {
    chartData26p.push({
        date: moment(d, 'YYYY-MM-DD').startOf('day').toDate(),
        count: datas26p[d],
        score: score26p[d],
    });
};
var heatmap26p = calendarHeatmap()
  .data(chartData26p)
  .startDate('2026-03-23')
  .endDate('2026-11-02')
  .selector('#shomap26p')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('830px')
  .colorRange(_colorRangep);
heatmap26p();  // render the chart
