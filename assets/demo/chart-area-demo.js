var ctx24_data = {
  'Giants':  [0, 1, 2, 1, 0,-1, 0,-1,-2,-1, 0, 0, 1, 2, 3, 4, 4, 3, 2, 2, 1, 1, 2, 1, 2, 1, 2, 3, 2, 1, 0, 1, 2, 1,
     0, 1, 2, 3, 4, 3, 4, 5, 5, 4, 3, 2, 2, 1, 1, 2, 1, 2, 1, 2, 3,  4,  3,  4, 5, 4, 5, 4, 3, 2, 1, 0,-1, 0, 1, 1,
     1, 0,-1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 2, 3,  4,  5,//wl_Giants
  ],
  'Tigers':  [0,-1,-2,-1,-2,-1,-2,-1, 0,-1, 0,-1,-2,-2,-3,-2,-2,-1, 0, 1, 2, 3, 3, 4, 4, 3, 4, 5, 5, 6, 6, 5, 4, 5,
     5, 4, 3, 4, 3, 4, 3, 4, 5, 4, 5, 6, 5, 6, 7, 6, 7, 6, 6, 5, 4,  3,  2,  3, 2, 1, 0, 1, 2, 3, 2, 1, 2, 1, 0, 1,
     2, 3, 2, 2, 1, 1, 2, 2, 1, 0, 1, 2, 1, 0, 1,  2,  3,//wl_Tigers
  ],
  'Baystars':[0, 1, 2, 1, 2, 1, 2, 3, 4, 3, 2, 1, 1, 2, 1, 0,-1,-2,-2,-3,-2,-1,-1,-2,-2,-1,-2,-3,-4,-3,-2,-1,-2,-1,
     0, 0,-1,-2,-1,-2,-3,-4,-4,-3,-2,-3,-2,-1, 0,-1,-2,-3,-2,-3,-4, -3, -2, -3,-2,-3,-4,-5,-6,-5,-4,-3,-2,-1, 0, 1,
     1, 0, 1, 1, 0, 0, 1, 2, 3, 2, 3, 2, 3, 4, 3,  2,  3,//wl_Baystars
  ],
  'Swallows':[0, 1, 1, 2, 1, 1, 0,-1,-2,-1,-2,-2,-3,-4,-3,-2,-3,-4,-3,-2,-3,-4,-5,-5,-4,-3,-4,-5,-4,-3,-2,-1,-1,-2,
    -3,-3,-2,-3,-4,-3,-4,-3,-3,-2,-3,-4,-5,-6,-7,-6,-7,-8,-9,-9,-9,-10,-11,-10,-9,-8,-7,-8,-7,-6,-7,-6,-7,-6,-7,-6,
    -6,-5,-4,-5,-6,-7,-8,-8,-7,-6,-7,-6,-7,-8,-9,-10,-11,//wl_Swallows
  ],
  'Dragons': [0,-1,-1,-2,-1, 0,-1, 0, 1, 2, 3, 4, 4, 4, 5, 4, 5, 6, 5, 4, 3, 2, 1, 2, 1, 1, 0, 0, 1, 0,-1,-2,-2,-1,
     0,-1,-2,-3,-2,-2,-1,-2,-3,-4,-5,-4,-4,-3,-3,-4,-3,-2,-1,-2,-3, -4, -3, -2,-3,-4,-3,-4,-5,-4,-3,-4,-5,-4,-5,-6,
    -6,-5,-6,-5,-4,-4,-5,-6,-7,-6,-5,-6,-6,-5,-4, -3, -4,//wl_Dragons
  ],
  'Carp':    [0,-1,-2,-1, 0, 0, 1, 0,-1,-2,-3,-2,-1,-2,-3,-4,-3,-2,-2,-2,-1,-1, 0, 0,-1,-1, 0, 0, 0,-1,-1,-2,-1,-2,
    -2,-1, 0, 1, 0, 0, 1, 0, 0, 1, 2, 3, 4, 3, 2, 3, 4, 5, 6, 7, 6,  5,  4,  3, 2, 3, 4, 5, 4, 5, 6, 5, 6, 7, 8, 7,
     7, 6, 7, 6, 7, 8, 9, 8, 9, 8, 7, 6, 7, 6, 5,  4,  3,//wl_Carp
  ],
  'labels':[
    'Start','03/29','03/30','03/31','04/02','04/03','04/04','04/05','04/06','04/07','04/09','04/10','04/11','04/12',
    '04/13','04/14','04/16','04/17','04/18','04/19','04/20','04/21','04/23','04/24','04/25','04/26','04/27','04/28',
    '04/29','04/30','05/01','05/03','05/04','05/05','05/06','05/07','05/08','05/10','05/11','05/12','05/14','05/15',
    '05/16','05/17','05/18','05/19','05/21','05/22','05/23','05/24','05/25','05/26','05/28','05/29','05/30','05/31',
    '06/01','06/02','06/04','06/05','06/06','06/07','06/08','06/09','06/11','06/12','06/13','06/14','06/15','06/16',
    '06/18','06/21','06/22','06/23','06/25','06/26','06/27','06/28','06/29','06/30','07/02','07/03','07/04','07/05',
    '07/06','07/07','07/09','07/10','07/11','07/12','07/13','07/14',
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

const illabel24 = {
  type: 'line',
  scaleID: 'x',
  borderWidth: 0,
  borderColor: 'rgba(255,182,193,0)',
  value: 56,
  label: {
    // rotation: 270,
    // backgroundColor: 'pink',
    backgroundColor: 'rgba(0,0,0,0.0)',
    color: 'black',
    content: 'INTERLEAGUE',
    enabled: true,
    position: 'start',
    font: {
      size: 10
    }
  }
};

const ilperiod24 = {
  type: 'box',
  backgroundColor: 'rgba(255,182,193,0.35)',
  borderColor: 'rgba(0,150,0,0)',
  borderWidth: 1,
  cornerRadius: 4,
  xMin: 51,
  xMax: 70,
};

// Area Chart 2024
var ctx24 = document.getElementById("myAreaChart24");
var myLineChart24 = new Chart(ctx24, {
  type: 'line',
  data: {
    labels: ctx24_data.labels,
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
        data: ctx24_data.Giants,
      }, // Giants
      {
        label: "Tigers",
        hidden: false,
        fill: 'origin',
        lineTension: 0,
        backgroundColor: "rgba(255,215,0,0.05)",
        borderColor: "#F1EA49",
        borderWidth: 5,
        pointRadius: 0.3,
        pointBackgroundColor: "#F1EA49",
        pointBorderColor: "#F1EA49",
        pointHoverRadius: 0.3,
        pointHoverBackgroundColor: "#F1EA49",
        pointHitRadius: 50,
        pointborderWidth: 5,
        data: ctx24_data.Tigers,
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
        data: ctx24_data.Baystars,
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
        data: ctx24_data.Swallows,
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
        data: ctx24_data.Dragons,
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
        data: ctx24_data.Carp,
      }, // Carp
    ],
  },
  options: {
    plugins: {
      autocplors: false,
      annotation: {
        annotations: {
          zero,
          ilperiod24,
          illabel24,
          // champ24
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
