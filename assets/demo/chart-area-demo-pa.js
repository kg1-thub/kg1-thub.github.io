var ctx26p_data = {
  'Hawks':    [0, 1, 2, 3, 4, 5, 4, 3, 4, 5, 4, 3, 4, 4, 5, 6, 5, 4, 5, 4, 5,
     4, 3, 2, 3, 3, 2, 2, 3, 2, 2, 3, 4, 3, 2, 3, 2, 3,//wl_Hawks
  ],
  'Fighters': [0,-1,-2,-3,-2,-3,-2,-1, 0, 1, 0, 1, 2, 2, 1, 0, 1, 0,-1,-2,-1,
    -2,-1, 0,-1,-2,-3,-4,-3,-4,-3,-2,-3,-2,-3,-4,-3,-4,//wl_Fighters
  ],
  'Marines':  [0, 1, 2, 1, 0, 1, 0, 1, 0,-1,-2,-3,-4,-3,-4,-5,-6,-5,-4,-5,-6,
    -5,-4,-5,-5,-5,-4,-4,-3,-2,-2,-3,-4,-3,-4,-5,-6,-7,//wl_Marines
  ],
  'Eagles':   [0, 1, 0,-1,-2,-3,-2,-1, 0, 0, 1, 0,-1,-1, 0, 1, 2, 3, 2, 3, 4,
     3, 2, 1, 2, 2, 1, 0,-1,-2,-2,-3,-4,-3,-2,-1,-2,-3,//wl_Eagles
  ],
  'Buffaloes':[0,-1, 0, 1, 0, 1, 2, 1, 0,-1, 0, 1, 2, 2, 1, 0, 1, 2, 3, 4, 3,
     4, 3, 4, 4, 5, 6, 7, 6, 7, 7, 6, 7, 6, 7, 8, 9,10,//wl_Buffaloes
  ],
  'Lions':    [0,-1,-2,-1, 0,-1,-2,-3,-4,-4,-3,-2,-3,-4,-3,-2,-3,-4,-5,-4,-5,
    -4,-3,-2,-3,-3,-2,-1,-2,-1,-2,-1, 0,-1, 0,-1, 0, 1,//wl_Lions
  ],
  'labels':[
    'Start','03/27','03/28','03/29',
    '03/31','04/01','04/02','04/03','04/04','04/05',
    '04/07','04/08','04/09','04/10','04/11','04/12',
    '04/14','04/15','04/16','04/17','04/18','04/19',
    '04/21','04/22','04/23','04/24','04/25','04/26',
    '04/28','04/29','04/30','05/01','05/02','05/03',
    '05/04','05/05','05/06','05/08',//wl_today
    'end'
  ],
};

// Annotation
const zero26p = {
  type: 'line',
  scaleID: 'y',
  borderWidth: 2,
  borderColor: 'gray',
  value: 0,
};

const illabel26p = {
  type: 'line',
  scaleID: 'x',
  borderWidth: 0,
  borderColor: 'rgba(255,182,193,0)',
  value: 65,
  label: {
    // rotation: 270,
    // backgroundColor: 'pink',
    backgroundColor: 'rgba(0,0,0,0.0)',
    color: 'black',
    content: ['INTERLEAGUE','PLAY'],
    enabled: true,
    position: 'start',
    font: {
      size: 10
    }
  }
};

const ilperiod26p = {
  type: 'box',
  backgroundColor: 'rgba(255,182,193,0.35)',
  borderColor: 'rgba(0,150,0,0)',
  borderWidth: 1,
  cornerRadius: 4,
  xMin: 56,
  xMax: 75,
};

const asbreak26p = {
  type: 'line',
  scaleID: 'x',
  borderWidth: 2,
  borderColor: 'rgba(0,128,0,0.7)',
  value: 98,
  label: {
    // rotation: 270,
    backgroundColor: 'rgba(0,0,0,0.0)',
    color: 'green',
    content: ['ALL-STAR GAME ', 'BREAK '],
    padding: 1,
    enabled: true,
    position: 'start',
    textAlign: 'right',
    font: {
      size: 10
    }
  }
};
const champ26p = {
  type: 'line',
  scaleID: 'x',
  borderWidth: 2,
  borderColor: 'rgba(0,128,0,0.7)',
  value: 153,
  label: {
    // rotation: 270,
    backgroundColor: 'rgba(0,0,0,0.0)',
    color: 'green',
    content: ['HAWKS CLINCH','PA-LEAGUE'],
    padding: 1,
    enabled: true,
    position: 'start',
    textAlign: 'center',
    font: {
      size: 10
    }
  }
};

// Area Chart 2026
var ctx26p = document.getElementById("myAreaChart26p");
var myLineChart26p = new Chart(ctx26p, {
  type: 'line',
  data: {
    labels: ctx26p_data.labels,
    datasets: [
      {
        label: "Hawks",
        hidden: false,
        fill: 'origin',
        lineTension: 0,
        backgroundColor: "rgba(100, 113, 148, 0.1)",
        borderColor: "#fcc800",
        borderWidth: 5,
        pointRadius: 0.3,
        pointBackgroundColor: "#fcc800",
        pointBorderColor: "#fcc800",
        pointHoverRadius: 0.3,
        pointHoverBackgroundColor: "#fcc800",
        pointHitRadius: 50,
        pointborderWidth: 5,
        data: ctx26p_data.Hawks,
      }, // Hawks
      {
        label: "Fighters",
        hidden: false,
        fill: 'origin',
        lineTension: 0,
        backgroundColor: "rgba(94, 154, 188, 0.05)",
        borderColor: "#17a2b8",
        borderWidth: 5,
        pointRadius: 0.3,
        pointBackgroundColor: "#17a2b8",
        pointBorderColor: "#17a2b8",
        pointHoverRadius: 0.3,
        pointHoverBackgroundColor: "#17a2b8",
        pointHitRadius: 50,
        pointborderWidth: 5,
        data: ctx26p_data.Fighters,
      }, // Fighters
      {
        label: "Marines",
        hidden: false,
        fill: 'origin',
        lineTension: 0,
        backgroundColor: "rgba(105, 134, 168, 0.05)",
        borderColor: "#6c757d",
        borderWidth: 5,
        pointRadius: 0.3,
        pointBackgroundColor: "#6c757d",
        pointBorderColor: "#6c757d",
        pointHoverRadius: 0.3,
        pointHoverBackgroundColor: "#6c757d",
        pointHitRadius: 50,
        pointborderWidth: 5,
        data: ctx26p_data.Marines,
      }, // Marines
      {
        label: "Eagles",
        hidden: false,
        fill: 'origin',
        lineTension: 0,
        backgroundColor: "rgba(175, 96, 107, 0.05)",
        borderColor: "#870011",
        borderWidth: 5,
        pointRadius: 0.3,
        pointBackgroundColor: "#870011",
        pointBorderColor: "#870011",
        pointHoverRadius: 0.3,
        pointHoverBackgroundColor: "#870011",
        pointHitRadius: 50,
        pointborderWidth: 5,
        data: ctx26p_data.Eagles,
      }, // Eagles
      {
        label: "Buffaloes",
        hidden: false,
        fill: 'origin',
        lineTension: 0,
        backgroundColor: "rgba(100, 113, 148, 0.05)",
        borderColor: "#143D60",
        borderWidth: 5,
        pointRadius: 0.3,
        pointBackgroundColor: "#143D60",
        pointBorderColor: "#143D60",
        pointHoverRadius: 0.3,
        pointHoverBackgroundColor: "#143D60",
        pointHitRadius: 50,
        pointborderWidth: 5,
        data: ctx26p_data.Buffaloes,
      }, // Buffaloes
      {
        label: "Lions",
        hidden: false,
        fill: 'origin',
        lineTension: 0,
        backgroundColor: "rgba(108, 160, 178, 0.05)",
        borderColor: "#20c997",
        borderWidth: 5,
        pointRadius: 0.3,
        pointBackgroundColor: "#20c997",
        pointBorderColor: "#20c997",
        pointHoverRadius: 0.3,
        pointHoverBackgroundColor: "#20c997",
        pointHitRadius: 50,
        pointborderWidth: 5,
        data: ctx26p_data.Lions,
      }, // Lions
    ],
  },
  options: {
    plugins: {
      autocplors: false,
      annotation: {
        annotations: {
          zero26p,
          // ilperiod26p,
          // illabel26p,
          // asbreak26p,
          // champ26p
        },
      },
      legend: {
        position: 'right',
        labels: {
          boxWidth: 12
        }
      }
    },
    responsive: true,
  }
});
