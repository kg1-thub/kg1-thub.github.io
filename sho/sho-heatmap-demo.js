var squareLength = 22;
var _colorRange = ['#EEEEEE', '#008b8b'];

var datas25 = {
'2025-03-18': 1,
'2025-03-19': 3,
'2025-03-27': 3,
'2025-03-28': 1,
'2025-03-29': 2,
'2025-03-31': 2,
//@@TOOLTIP_DATE@@
};
var score25 = {
'2025-03-18': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>2 Hits / 0 RBI / AVG .400',
'2025-03-19': '(Regular Season)</br><span><strong>1 HR / 0 SB</strong></span></br>1 Hits / 1 RBI / AVG .375',
    '2025-03-27': '(Regular Season)</br><span><strong>1 HR / 0 SB</strong></span></br>2 Hits / 1 RBI / AVG .417',
    '2025-03-28': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .375',
    '2025-03-29': '(Regular Season)</br><span><strong>0 HR / 1 SB</strong></span></br>0 Hits / 0 RBI / AVG .333',
    '2025-03-31': '(Regular Season)</br><span><strong>0 HR / 1 SB</strong></span></br>0 Hits / 0 RBI / AVG .286',
    //@@TOOLTIP@@
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
  .startDate('2025-03-18')
  .endDate('2025-10-31')
  .selector('#shomap25')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('830px')
  .colorRange(_colorRange);
heatmap25();  // render the chart
