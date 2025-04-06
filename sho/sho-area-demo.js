var sho25_data = {'hits': [0,
2,
3,
5,
6,
6,
6,
7,
10,
11,
11,
11,
//@@HITS@@
  ], 
  'hrs': [0,
0,
1,
2,
2,
2,
2,
2,
3,
3,
3,
3,
//@@HRS@@
  ],
  'sbs': [0,
0,
0,
0,
0,
1,
2,
2,
2,
2,
2,
2,
//@@SBS@@
  ], 
  'rbis': [0,
0,
1,
2,
2,
2,
2,
2,
3,
3,
3,
3,
//@@RBIS@@
  ], 
  'labels': ['Start',
'2025-03-18',
'2025-03-19',
'2025-03-27',
'2025-03-28',
'2025-03-29',
'2025-03-31',
'2025-04-01',
'2025-04-02',
'2025-04-04',
'2025-04-05',
'2025-04-06',
//@@TODAY@@
  ],
}

// Annotation
const illabel22 = {
  type: 'line',
  scaleID: 'x',
  borderWidth: 0,
  borderColor: 'rgba(255,182,193,0)',
  value: 61,
  label: {
    // rotation: 270,
    backgroundColor: 'pink',
    color: 'black',
    content: 'INTERLEAGUE PLAY',
    enabled: true,
    position: 'end',
    font: {
      size: 12
    }
  }
};

const ilperiod22 = {
  type: 'box',
  backgroundColor: 'rgba(255,182,193,0.35)',
  borderColor: 'rgba(0,150,0,0)',
  borderWidth: 1,
  cornerRadius: 4,
  xMin: 51,
  xMax: 69,
};

const closed24 = {
  type: 'line',
  scaleID: 'x',
  borderWidth: 2,
  borderColor: 'rgba(0,128,0,0.3)',
  value: 60,
  label: {
    // rotation: 270,
    // display: (ctx) => ctx.hovered,
    backgroundColor: 'rgba(0,0,0,0.0)',
    color: 'green',
    content: ["MLB has closed Investigation", "into fraud by Ippei Mizuhara."],
    padding: 1,
    enabled: true,
    position: 'start',
    textAlign: 'left',
    font: {
      size: 9
    }
  },
  // enter(ctx, event) {
  //   ctx.hovered = true;
  //   ctx.hoverPosition = (event.x / ctx.chart.chartArea.width * 100) + '%';
  //   ctx.chart.update();
  // },
  // leave(ctx, event) {
  //   ctx.hovered = false;
  //   ctx.chart.update();
  // }
};
const shoday24 = {
  type: 'line',
  scaleID: 'x',
  borderWidth: 2,
  borderColor: 'rgba(0,128,0,0.3)',
  value: 45,
  label: {
    // rotation: 270,
    backgroundColor: 'rgba(0,0,0,0.0)',
    color: 'green',
    content: ["Shohei Ohtani Day."],
    padding: 1,
    enabled: true,
    position: 'end',
    textAlign: 'right',
    font: {
      size: 9
    }
  }
};
const break24 = {
  type: 'line',
  scaleID: 'x',
  borderWidth: 2,
  borderColor: 'rgba(0,128,0,0.3)',
  value: 94,
  label: {
    // rotation: 270,
    backgroundColor: 'rgba(0,0,0,0.0)',
    color: 'green',
    content: ["All-Star Game break."],
    padding: 1,
    enabled: true,
    position: 'start',
    textAlign: 'left',
    font: {
      size: 9
    }
  }
};
const clinch24 = {
  type: 'line',
  scaleID: 'x',
  borderWidth: 2,
  borderColor: 'rgba(0,128,0,0.3)',
  value: 156,
  label: {
    // rotation: 270,
    backgroundColor: 'rgba(0,0,0,0.0)',
    color: 'green',
    content: ["DODGERS CLINCH NL WEST"],
    padding: 1,
    enabled: true,
    position: 'start',
    textAlign: 'start',
    font: {
      size: 9
    }
  }
};
const bar40 = {
  type: 'line',
  scaleID: 'y',
  borderWidth: 2,
  borderColor: 'rgba(0,0,51,0.3)',
  value: 40,
  label: {
    // rotation: 270,
    backgroundColor: 'rgba(0,0,255,1)',
    color: 'white',
    content: ["BAR 40"],
    padding: 1,
    enabled: true,
    position: 'center',
    textAlign: 'center',
    font: {
      size: 9
    }
  }
};
const bar50 = {
  type: 'line',
  scaleID: 'y',
  borderWidth: 2,
  borderColor: 'rgba(0,0,51,0.3)',
  value: 50,
  label: {
    // rotation: 270,
    backgroundColor: 'blue',
    color: 'white',
    content: ["BAR 50"],
    padding: 1,
    enabled: true,
    position: 'center',
    textAlign: 'center',
    font: {
      size: 9
    }
  }
};

const club40x2 = {
  type: 'point',
  xValue: 126,
  yValue: 40,
  radius: 5,
  backgroundColor: 'rgba(255, 99, 132, 0.25)',
};
const club50x2 = {
  type: 'point',
  xValue: 150,
  yValue: 51,
  radius: 5,
  backgroundColor: 'rgba(255, 99, 132, 0.25)'
};
const decoypitch = {
  type: 'point',
  xValue: 130,
  yValue: 42,
  radius: 5,
  backgroundColor: 'rgba(255, 99, 132, 0.25)'
};

const label_club40x2 = {
  type: 'label',
  init: true,
  content: 'Joined 40/40 club.',
  backgroundColor: 'rgba(245, 245, 245, 0.5)',
  content: (ctx) => 'Maximum value is ' + maxValue(ctx).toFixed(2),
  font: {
    size: 16
  },
  padding: {
    top: 6,
    left: 6,
    right: 6,
    bottom: 12
  },
  position: {
    x: 150,
    y: 'end'
  },
  xValue: (ctx) => maxLabel(ctx),
  yAdjust: -6,
  yValue: (ctx) => maxValue(ctx)
};
// Area Chart 2025
var ctx_sho25hrs = document.getElementById("sho25hrs");
var sho25hrs = new Chart(ctx_sho25hrs, {
  type: 'line',
  data: {
    labels: sho25_data.labels,
    datasets: [
      {
        label: "HOMERUN",
        hidden: false,
        fill: 'none',
        lineTension: 0,
        borderColor: "navy",
        borderWidth: 2,
        pointRadius: 1,
        data: sho25_data.hrs,
      },
      {
        label: "STOLEN BASE",
        hidden: false,
        fill: 'none',
        lineTension: 0,
        borderColor: "purple",
        borderWidth: 2,
        pointRadius: 1,
        data: sho25_data.sbs,
      }
    ],
  },
  options: {
    plugins: {
      autocplors: false,
      annotation: {
        annotations: {
          // club50x2,
          // club40x2,
          // // label_club40x2,
          // decoypitch,
          // closed24,
          // shoday24,
          // break24,
          // clinch24,
          // bar40,
          // bar50,
          // zero,
          // ilperiod22,
          // illabel22,
        }
      },
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 12
        }
      }
    },
    responsive: false,
  }
});

var ctx_sho25hits = document.getElementById("sho25hits");
var sho25hits = new Chart(ctx_sho25hits, {
  type: 'line',
  data: {
    labels: sho25_data.labels,
    datasets: [
      {
        label: "HIT",
        hidden: false,
        fill: 'origin',
        lineTension: 0,
        borderColor: "blue",
        borderWidth: 2,
        pointRadius: 1,
        data: sho25_data.hits,
      }
    ],
  },
  options: {
    plugins: {
      autocplors: false,
      annotation: {
        annotations: {
          // zero,
          // ilperiod22,
          // illabel22,
        }
      },
      legend: {
        display: false
        // position: 'right',
        // labels: {
        //   boxWidth: 12
        // }
      }
    },
    responsive: false,
  }
});

var ctx_sho25rbis = document.getElementById("sho25rbis");
var sho25rbis = new Chart(ctx_sho25rbis, {
  type: 'line',
  data: {
    labels: sho25_data.labels,
    datasets: [
      {
        label: "RBI",
        hidden: false,
        fill: 'origin',
        lineTension: 0,
        borderColor: "green",
        borderWidth: 2,
        pointRadius: 1,
        data: sho25_data.rbis,
      }
    ],
  },
  options: {
    plugins: {
      autocplors: false,
      annotation: {
        annotations: {
          // zero,
          // ilperiod22,
          // illabel22,
        }
      },
      legend: {
        display: false,
        // position: 'right',
        // labels: {
        //   boxWidth: 12
        // }
      }
    },
    responsive: false,
  }
});
