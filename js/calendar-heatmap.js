// https://github.com/DKirwan/calendar-heatmap
function calendarHeatmap() {
  // defaults
  var width = 600;
  var height = 135;
  // var viewBox = '0 0 ' + width * 1 + ' ' + height * 1;
  var legendWidth = 150;
  var selector = 'body';
  var SQUARE_LENGTH = 11;
  var SQUARE_PADDING = 2;
  var ROUNDED_RATIO = 0.3;
  var MONTH_LABEL_PADDING = 18;
  var DAY_LABEL_PADDING = 18;
  var monthOutlineEnabled = true;
  var now = moment().endOf('day').toDate();
  var yearAgo = moment().startOf('day').subtract(1, 'year').toDate();
  var startDate = null;
  var endDate = null;
  var counterMap= {};
  var data = [];
  var max = null;
  var MIN = -1.5;
  var colorRange = ['#D8E6E7', '#218380'];
  var tooltipEnabled = true;
  var tooltipUnit = 'contribution';
  var legendEnabled = true;
  var onClick = null;
  var weekStart = 1; //0 for Sunday, 1 for Monday
  var locale = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    days: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    week: {dow: weekStart},
    No: '',
    on: 'on',
    ZERO: 'Draw',
    Less: 'Lose',
    More: 'Win'
  };
  var v = Number(d3.version.split('.')[0]);

  // setters and getters
  chart.data = function (value) {
    if (!arguments.length) { return data; }
    data = value;

    counterMap= {};

    data.forEach(function (element, index) {
        var key= moment(element.date).format( 'YYYY-MM-DD' );
        var counter= counterMap[key] || 0;
        counterMap[key]= counter + element.count;
    });

    return chart;
  };

  chart.max = function (value) {
    if (!arguments.length) { return max; }
    max = value;
    return chart;
  };

  chart.min = function (value) {
    if (!arguments.length) { return min; }
    min = value;
    return chart;
  };

  chart.selector = function (value) {
    if (!arguments.length) { return selector; }
    selector = value;
    return chart;
  };

  chart.startDate = function (value) {
    if (!arguments.length) { return startDate; }
    yearAgo = moment(value, 'YYYY-MM-DD').startOf('day').toDate();
    now = moment(value, 'YYYY-MM-DD').endOf('day').add(1, 'year').toDate();
    return chart;
  };

  chart.endDate = function (value) {
    if (!arguments.length) { return endDate; }
    now = moment(value, 'YYYY-MM-DD').endOf('day').toDate();
    return chart;
  };

  chart.colorRange = function (value) {
    if (!arguments.length) { return colorRange; }
    colorRange = value;
    return chart;
  };

  chart.tooltipEnabled = function (value) {
    if (!arguments.length) { return tooltipEnabled; }
    tooltipEnabled = value;
    return chart;
  };

  chart.tooltipUnit = function (value) {
    if (!arguments.length) { return tooltipUnit; }
    tooltipUnit = value;
    return chart;
  };

  chart.legendEnabled = function (value) {
    if (!arguments.length) { return legendEnabled; }
    legendEnabled = value;
    return chart;
  };

  chart.onClick = function (value) {
    if (!arguments.length) { return onClick(); }
    onClick = value;
    return chart;
  };

  chart.squareLength = function (value) {
    if (!arguments.length) { return SQUARE_LENGTH; }
    SQUARE_LENGTH = value;
    return chart;
  };

  // chart.height = function (value) {
  //   if (!arguments.length) { return SQUARE_LENGTH * 10; }
  //   height = value;
  //   // viewBox = '0 0 ' + width * 2.0 + ' ' + height * 2.5;
  //   return chart;
  // };

  // chart.width = function (value) {
  //   if (!arguments.length) { return width; }
  //   width = value;
  //   return chart;
  // };

  // chart.viewBox = function (w, h) {
  //   viewBox = '0 0 ' + w + ' ' + h;
  //   return chart;
  // };

  chart.locale = function (value) {
    if (!arguments.length) { return locale; }
    locale = value;
    return chart;
  };

  function monthLabelHorizontalPosition({w0, w1}) {
    return DAY_LABEL_PADDING + (((w1 + 1) + w0) / 2) * z
  }

  function chart() {

    d3.select(chart.selector()).selectAll('svg.calendar-heatmap').remove(); // remove the existing chart, if it exists

    var dateRange = ((d3.time && d3.time.days) || d3.timeDays)(yearAgo, now); // generates an array of date objects within the specified range
    var monthRange = ((d3.time && d3.time.months) || d3.timeMonths)(moment(yearAgo).startOf('month').toDate(), now); // it ignores the first month if the 1st date is after the start of the month
    var firstDate = moment(dateRange[0]);
    if (chart.data().length == 0) {
      max = 0;
      min = 0;
    } else if (max === null) {
      max = d3.max(chart.data(), function (d) { return d.count; }); // max data value
      min = d3.min(chart.data(), function (d) { return d.count; }); // min data value
    }

    // color range
    var color = ((d3.scale && d3.scale.linear) || d3.scaleLinear)()
      .range(chart.colorRange())
      .domain([MIN, max]);

    var tooltip;
    var dayRects;

    drawChart();

    function drawChart() {
      var svg = d3.select(chart.selector())
        .style('position', 'relative')
        .append('svg')
        .attr('height', '190px')
        .attr('class', 'calendar-heatmap')
        .style('padding', '7px')
        .style('width', '680px')
        ;

      dayRects = svg.selectAll('.day-cell')
        .data(dateRange);  //  array of days for the last yr

      var enterSelection = dayRects.enter().append('rect')
        .attr('class', 'day-cell')
        .attr('width', SQUARE_LENGTH)
        .attr('height', SQUARE_LENGTH)
        .attr('fill', function(d) { return color(countForDate(d)); })
        .attr('x', function (d, i) {
          var cellDate = moment(d);
          var result = formatWeek(cellDate, d.getDay()) - firstDate.week() + (firstDate.weeksInYear() * (cellDate.weekYear() - firstDate.weekYear()));
          return result * (SQUARE_LENGTH + SQUARE_PADDING) + DAY_LABEL_PADDING;
        })
        .attr('y', function (d, i) {
          return MONTH_LABEL_PADDING + formatWeekday(d.getDay()) * (SQUARE_LENGTH + SQUARE_PADDING);
        })
        .attr('rx', SQUARE_LENGTH * ROUNDED_RATIO)
        .attr('ry', SQUARE_LENGTH * ROUNDED_RATIO);

      if (typeof onClick === 'function') {
        (v === 3 ? enterSelection : enterSelection.merge(dayRects)).on('click', function(d) {
          var count = countForDate(d);
          onClick({ date: d, count: count});
        });
      }

      if (chart.tooltipEnabled()) {
        (v === 3 ? enterSelection : enterSelection.merge(dayRects)).on('mouseover', function(d, i) {
          tooltip = d3.select(chart.selector())
            .append('div')
            .attr('class', 'day-cell-tooltip')
            .html(tooltipHTMLForDate(d))
            .style('left', function () { return Math.floor(i / 7) * SQUARE_LENGTH + 'px'; })
            .style('top', function () {
              return formatWeekday(d.getDay()) * (SQUARE_LENGTH + SQUARE_PADDING) + MONTH_LABEL_PADDING * 2 + 'px';
            });
        })
        .on('mouseout', function (d, i) {
          tooltip.remove();
        });
      }

      if (chart.legendEnabled()) {
        var colorRange = [color(0)];
        for (var i = 2; i > 0; i--) {
          colorRange.push(color(max / i));
        }

        console.log(colorRange.length,colorRange);
        var legendGroup = svg.append('g');
        legendGroup.selectAll('.calendar-heatmap-legend')
            .data(colorRange)
            .enter()
          .append('rect')
            .attr('class', 'calendar-heatmap-legend')
            .attr('width', SQUARE_LENGTH)
            .attr('height', SQUARE_LENGTH)
            // .attr('x', function (d, i) { return (width - legendWidth) + (i + 1) * 13; })
            .attr('x', function (d, i) { return (legendWidth*0.2) + (i + 1) * (SQUARE_LENGTH*1.1); })
            .attr('y', height + SQUARE_LENGTH*1.5)
            .attr('fill', function (d) { return d; });

        legendGroup.append('text')
          .attr('class', 'calendar-heatmap-legend-text calendar-heatmap-legend-text-less')
          .attr('x', width*0.07)
          .attr('y', height + SQUARE_LENGTH*2.2)
          .text(locale.Less);

        legendGroup.append('text')
          .attr('class', 'calendar-heatmap-legend-text calendar-heatmap-legend-text-zero')
          // .attr('x', (width - legendWidth + SQUARE_PADDING) + (colorRange.length) * 13*1.3)
          .attr('x', width*0.16)
          .attr('y', height + SQUARE_LENGTH*2.2)
          .text(locale.More);

          legendGroup.append('text')
          .attr('class', 'calendar-heatmap-legend-text calendar-heatmap-legend-text-more')
          // .attr('x', (width - legendWidth + SQUARE_PADDING) + (colorRange.length) * 13/2*1.3)
          .attr('x', width*0.11)
          .attr('y', height + SQUARE_LENGTH*2.2)
          .text(locale.ZERO);
      }

      dayRects.exit().remove();
      var monthLabels = svg.selectAll('.month')
          .data(monthRange)
          .enter().append('text')
          .attr('class', 'month-name')
          .text(function (d) {
            return locale.months[d.getMonth()];
          })
          .attr('x', function (d, i) {
            var matchIndex = 0;
            dateRange.find(function (element, index) {
              matchIndex = index;
              return moment(d).isSame(element, 'month') && moment(d).isSame(element, 'year');
            });
            return DAY_LABEL_PADDING + (SQUARE_LENGTH + SQUARE_PADDING) + Math.floor(matchIndex / 7) * (SQUARE_LENGTH + SQUARE_PADDING);
          })
          .attr('y', MONTH_LABEL_PADDING * 0.7);  // fix these to the top

      locale.days.forEach(function (day, index) {
        index = formatWeekday(index);
        if ((index + 1) % 2) {
          svg.append('text')
            .attr('class', 'day-initial')
            .attr('y', (MONTH_LABEL_PADDING - 7 + (SQUARE_LENGTH + SQUARE_PADDING) * (index + 1)))
            .attr('x', DAY_LABEL_PADDING - 7)
            .style('text-anchor', 'middle')
            .attr('dy', '2')
            .text(day);
        }
      });
    }

    function pluralizedTooltipUnit (count) {
      if ('string' === typeof tooltipUnit) {
        return (tooltipUnit + (count === 1 ? '' : 's'));
      }
      for (var i in tooltipUnit) {
        var _rule = tooltipUnit[i];
        var _min = _rule.min;
        var _max = _rule.max || _rule.min;
        _max = _max === 'Infinity' ? Infinity : _max;
        if (count >= _min && count <= _max) {
          return _rule.unit;
        }
      }
    }

    function tooltipHTMLForDate(d) {
      // var dateStr = moment(d).format('ddd, MMM Do YYYY');
      var dateStr = moment(d).format('MMM D, YYYY');
      var count = countForDate(d);
      console.log(dateStr, count);
      if (count == 1) {
        // return '<span><strong>' + (count ? count : locale.No) + ' ' + pluralizedTooltipUnit(count) + '</strong> ' + locale.on + ' ' + dateStr + '</span>';
        return '<span><strong>' + 'WIN ' + '</strong> ' + locale.on + ' ' + dateStr + '</span>';
      } else if (count == -1) {
        return '<span><strong>' + 'LOSE ' +'</strong> ' + locale.on + ' ' + dateStr + '</span>';
      } else if (count == 0) {
        return '<span><strong>' + 'DRAW ' + '</strong> ' + locale.on + ' ' + dateStr + '</span>';
      } else if (count == MIN) {
        return '<span><strong>' + 'no game ' + '</strong> ' + locale.on + ' ' + dateStr + '</span>';
      }
    }

    function countForDate(d) {
        var key= moment(d).format( 'YYYY-MM-DD' );
        // return counterMap[key] || 0;
        if (counterMap[key] == 0) {
            return counterMap[key];
        } else {
            return counterMap[key] || MIN;
        }
    }

    function formatWeekday(weekDay) {
      if (weekStart === 1) {
        if (weekDay === 0) {
          return 6;
        } else {
          return weekDay - 1;
        }
      }
      return weekDay;
    }

    function formatWeek(cellDate, weekDay) {
      if (weekStart === 1) {
        if (weekDay === 0) {
          return cellDate.week() - 1;
        } else {
          return cellDate.week();
        }
      }
      return cellDate.week();
    }

    var daysOfChart = chart.data().map(function (day) {
      return day.date.toDateString();
    });

  }

  return chart;
}


// polyfill for Array.find() method
/* jshint ignore:start */
if (!Array.prototype.find) {
  Array.prototype.find = function (predicate) {
    if (this === null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}
/* jshint ignore:end */
