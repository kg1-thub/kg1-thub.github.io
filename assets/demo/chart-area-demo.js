var ctx26_data = {
  'Giants':  [0, 1, 0,-1, 0, 1, 0,-1, 0, 1, 0, 1, 1, 2, 1, 0, 1, 1, 2, 3, 2,
     1,  2,  3,  3,  2,  3,  4,  3,  4,  3,  4,  3,  2,  1, 2,  1,  0, -1,  0,
     1,  2,//wl_Giants
  ],
  'Tigers':  [0,-1, 0, 1, 2, 1, 2, 3, 4, 3, 4, 3, 4, 5, 6, 7, 6, 6, 5, 6, 7,
     8,  7,  6,  6,  6,  6,  7,  6,  7,  8,  7,  8,  9,  8, 7,  8,  7,  6,  7,
     8,  7,//wl_Tigers
  ],
  'Baystars':[0,-1,-2,-3,-4,-3,-4,-3,-4,-5,-4,-5,-5,-5,-4,-3,-4,-4,-5,-4,-3,
    -2, -1,  0,  0,  1,  0, -1, -2, -1,  0, -1, -2, -1,  0, 0, -1,  0,  1,  0,
     1,  2,//wl_Baystars
  ],
  'Swallows':[0, 1, 2, 3, 4, 4, 5, 4, 5, 6, 5, 6, 5, 4, 5, 6, 7, 7, 8, 7, 8,
     9,  8,  9, 10,  9,  8,  7,  8,  7,  6,  7,  8,  7,  8, 7,  8,  9, 10,  9,
     8,  9,//wl_Swallows
  ],
  'Dragons': [0,-1,-2,-3,-4,-5,-4,-3,-4,-5,-6,-5,-5,-6,-7,-8,-7,-8,-8,-9,-10,
   -11,-12,-13,-13,-12,-11,-10, -9,-10,-11,-12,-11,-11,-10,-9,-10, -9, -8, -9,
   -10,-11,//wl_Dragons
  ],
  'Carp':    [0, 1, 2, 3, 2, 2, 1, 0,-1, 0, 1, 0, 0, 0,-1,-2,-3,-2,-2,-3,-4,
    -5, -4, -5, -6, -6, -6, -7, -6, -7, -6, -5, -6, -6, -7,-7, -6, -7, -8, -7,
    -8, -9,//wl_Carp
  ],
  'labels':[
    'Start','03/27','03/28','03/29',
    '03/31','04/01','04/02','04/03','04/04','04/05',
    '04/07','04/08','04/09','04/10','04/11','04/12',
    '04/14','04/15','04/16','04/17','04/18','04/19',
    '04/21','04/22','04/23','04/24','04/25','04/26',
    '04/28','04/29','04/30','05/01','05/02','05/03',
    '05/04','05/05','05/06','05/08','05/09','05/10',
    '05/12','05/13',//wl_today
    'end'
  ],
};

// Annotation
const zero = {
  type: 'line',
  scaleID: 'y',
  borderWidth: 2,
  borderColor: 'gray',
  value: 0,
};

const illabel26 = {
  type: 'line',
  scaleID: 'x',
  borderWidth: 0,
  borderColor: 'rgba(255,182,193,0)',
  value: 67,
  label: {
    // rotation: 270,
    // backgroundColor: 'pink',
    backgroundColor: 'rgba(0,0,0,0.0)',
    color: 'black',
    content: ['INTERLEAGUE','PLAY'],
    enabled: true,
    position: 'end',
    font: {
      size: 10
    }
  }
};

const ilperiod26 = {
  type: 'box',
  backgroundColor: 'rgba(255,182,193,0.35)',
  borderColor: 'rgba(0,150,0,0)',
  borderWidth: 1,
  cornerRadius: 4,
  xMin: 57,
  xMax: 76,
};

const asbreak26 = {
  type: 'line',
  scaleID: 'x',
  borderWidth: 2,
  borderColor: 'rgba(0,128,0,0.7)',
  value: 97,
  label: {
    // rotation: 270,
    backgroundColor: 'rgba(0,0,0,0.0)',
    color: 'green',
    content: [' ALL-STAR GAME', ' BREAK'],
    padding: 1,
    enabled: true,
    position: 'end',
    textAlign: 'left',
    font: {
      size: 10
    }
  }
};
const champ26 = {
  type: 'line',
  scaleID: 'x',
  borderWidth: 2,
  borderColor: 'rgba(0,128,0,0.7)',
  value: 135,
  label: {
    // rotation: 270,
    backgroundColor: 'rgba(0,0,0,0.0)',
    color: 'green',
    content: ['TIGERS CLINCH','CE-LEAGUE'],
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
var ctx26 = document.getElementById("myAreaChart26");
var myLineChart26 = new Chart(ctx26, {
  type: 'line',
  data: {
    labels: ctx26_data.labels,
    datasets: [
      {
        label: "Giants",
        hidden: false,
        fill: 'origin',
        lineTension: 0,
        backgroundColor: "rgba(255,140,0,0.1)",
        borderColor: "#EB9E16",
        borderWidth: 5,
        pointRadius: 0.3,
        pointBackgroundColor: "#EB9E16",
        pointBorderColor: "#EB9E16",
        pointHoverRadius: 0.3,
        pointHoverBackgroundColor: "#EB9E16",
        pointHitRadius: 50,
        pointborderWidth: 5,
        data: ctx26_data.Giants,
      }, // Giants
      {
        label: "Tigers",
        hidden: false,
        fill: 'origin',
        lineTension: 0,
        backgroundColor: "rgba(255,215,0,0.05)",
        borderColor: "#fcc800",
        borderWidth: 5,
        pointRadius: 0.3,
        pointBackgroundColor: "#fcc800",
        pointBorderColor: "#fcc800",
        pointHoverRadius: 0.3,
        pointHoverBackgroundColor: "#fcc800",
        pointHitRadius: 50,
        pointborderWidth: 5,
        data: ctx26_data.Tigers,
      }, // Tigers
      {
        label: "Baystars",
        hidden: false,
        fill: 'origin',
        lineTension: 0,
        backgroundColor: "rgba(135,206,250,0.05)",
        borderColor: "#3893D2",
        borderWidth: 5,
        pointRadius: 0.3,
        pointBackgroundColor: "#3893D2",
        pointBorderColor: "#3893D2",
        pointHoverRadius: 0.3,
        pointHoverBackgroundColor: "#3893D2",
        pointHitRadius: 50,
        pointborderWidth: 5,
        data: ctx26_data.Baystars,
      }, // Baystars
      {
        label: "Swallows",
        hidden: false,
        fill: 'origin',
        lineTension: 0,
        backgroundColor: "rgba(51,204,0,0.05)",
        borderColor: "#5DD95D",
        borderWidth: 5,
        pointRadius: 0.3,
        pointBackgroundColor: "#5DD95D",
        pointBorderColor: "#5DD95D",
        pointHoverRadius: 0.3,
        pointHoverBackgroundColor: "#5DD95D",
        pointHitRadius: 50,
        pointborderWidth: 5,
        data: ctx26_data.Swallows,
      }, // Swallows
      {
        label: "Dragons",
        hidden: false,
        fill: 'origin',
        lineTension: 0,
        backgroundColor: "rgba(0,0,128,0.05)",
        borderColor: "#6F3BC8",
        borderWidth: 5,
        pointRadius: 0.3,
        pointBackgroundColor: "#6F3BC8",
        pointBorderColor: "#6F3BC8",
        pointHoverRadius: 0.3,
        pointHoverBackgroundColor: "#6F3BC8",
        pointHitRadius: 50,
        pointborderWidth: 5,
        data: ctx26_data.Dragons,
      }, // Dragons
      {
        label: "Carp",
        hidden: false,
        fill: 'origin',
        lineTension: 0,
        backgroundColor: "rgba(255,0,0,0.05)",
        borderColor: "#EF3A38",
        borderWidth: 5,
        pointRadius: 0.3,
        pointBackgroundColor: "#EF3A38",
        pointBorderColor: "#EF3A38",
        pointHoverRadius: 0.3,
        pointHoverBackgroundColor: "#EF3A38",
        pointHitRadius: 50,
        pointborderWidth: 5,
        data: ctx26_data.Carp,
      }, // Carp
    ],
  },
  options: {
    plugins: {
      autocplors: false,
      annotation: {
        annotations: {
          zero,
          // ilperiod26,
          // illabel26,
          // asbreak26,
          // champ26
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
