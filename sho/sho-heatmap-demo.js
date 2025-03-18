var squareLength = 22;
var _colorRange = ['#FFFFFE', '#008b8b'];

var datas25 = {
'2025-03-18': 1,
//@@TOOLTIP_DATE@@
};
var score25 = {
    '2025-03-18': '(World Series) vs NYY</br><span><strong>0 HR / 0 SB</strong></span></br>2 Hits / 0 RBI / AVG .400',
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
  .endDate('2024-10-31')
  .selector('#shomap25')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('830px')
  .colorRange(_colorRange);
heatmap24();  // render the chart
