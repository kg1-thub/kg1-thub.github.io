var wcup22_data = {
  // Group A
  'Qatar': [0,0,0,0], 'Ecuador': [0,3,4,4], 'Senegal': [0,0,3,6],  'Netherlands': [0,3,4,7],
  // Group B
  'England': [0,3,4,7], 'Iran': [0,0,3,3], 'USA': [0,1,2,5],  'Wales': [0,1,1,1],
  // Group C
  'Argentina': [0,0,3,6], 'SaudiArabia': [0,3,3,3], 'Mexico': [0,1,1,4],  'Poland': [0,1,4,4],
  // Group D
  'France': [0,3,6,6], 'Austraria': [0,0,3,6], 'Denmark': [0,1,1,1],  'Tunisia': [0,1,1,4],
  // Group E
  'Spain': [0,3,4,4], 'CostaRica': [0,0,3,3], 'Germany': [0,0,1,4],  'Japan': [0,3,3,6],
  // Group F
  'Belgium': [0,3,3,4], 'Canada': [0,0,0,0], 'Morocco': [0,1,4,7],  'Croatia': [0,1,4,5],
  // Group G
  'Brazil': [0,3,6,6], 'Serbia': [0,0,1,1], 'Switzerland': [0,3,3,6],  'Cameroon': [0,0,3,4],
  // Group H
  'Portugal': [0,3,6,6], 'Ghana': [0,0,3,3], 'Uruguay': [0,1,1,4],  'Korea': [0,1,1,4],
  // label
  'labels': ['Start', 'GS1', 'GS2', 'GS3'],
}

var _option = {
  scales: {
    y: {
      max: 9,
    }
  },
  plugins: {
    autocplors: false,
    annotation: {
      annotations: {
        // zero,
      }
    },
    legend: {
      display: false,
    }
  },
  responsive: true,
};


// Area Chart 2022
var ctx_wcup22gra = document.getElementById("wcup22gra");
var wcup22gra = new Chart(ctx_wcup22gra, {
  type: 'line',
  data: {
    labels: wcup22_data.labels,
    datasets: [
      {
        label: "Qatar",
        borderColor: "maroon",
        data: wcup22_data.Qatar,
      },
      {
        label: "Ecuador",
        borderColor: "blue",
        data: wcup22_data.Ecuador,
      },
      {
        label: "Senegal",
        borderColor: "green",
        data: wcup22_data.Senegal,
      },
      {
        label: "Netherlands",
        borderColor: "orange",
        data: wcup22_data.Netherlands,
      },
    ],
  },
  options: _option
});

var ctx_wcup22grb = document.getElementById("wcup22grb");
var wcup22grb = new Chart(ctx_wcup22grb, {
  type: 'line',
  data: {
    labels: wcup22_data.labels,
    datasets: [
      {
        label: "England",
        borderColor: "red",
        data: wcup22_data.England,
      },
      {
        label: "Iran",
        borderColor: "lime",
        data: wcup22_data.Iran,
      },
      {
        label: "USA",
        borderColor: "navy",
        data: wcup22_data.USA,
      },
      {
        label: "Wales",
        borderColor: "green",
        data: wcup22_data.Wales,
      },
    ],
  },
  options: _option
});


var ctx_wcup22grc = document.getElementById("wcup22grc");
var wcup22grc = new Chart(ctx_wcup22grc, {
  type: 'line',
  data: {
    labels: wcup22_data.labels,
    datasets: [
      {
        label: "Argentina",
        borderColor: "lightskyblue",
        data: wcup22_data.Argentina,
      },
      {
        label: "SaudiArabia",
        borderColor: "darkgreen",
        data: wcup22_data.SaudiArabia,
      },
      {
        label: "Mexico",
        borderColor: "black",
        data: wcup22_data.Mexico,
      },
      {
        label: "Poland",
        borderColor: "red",
        data: wcup22_data.Poland,
      },
    ],
  },
  options: _option
});


var ctx_wcup22grd = document.getElementById("wcup22grd");
var wcup22grd = new Chart(ctx_wcup22grd, {
  type: 'line',
  data: {
    labels: wcup22_data.labels,
    datasets: [
      {
        label: "France",
        borderColor: "navy",
        data: wcup22_data.France,
      },
      {
        label: "Austraria",
        borderColor: "yellow",
        data: wcup22_data.Austraria,
      },
      {
        label: "Denmark",
        borderColor: "red",
        data: wcup22_data.Denmark,
      },
      {
        label: "Tunisia",
        borderColor: "orangered",
        data: wcup22_data.Tunisia,
      },
    ],
  },
  options: _option
});


var ctx_wcup22gre = document.getElementById("wcup22gre");
var wcup22gre = new Chart(ctx_wcup22gre, {
  type: 'line',
  data: {
    labels: wcup22_data.labels,
    datasets: [
      {
        label: "Spain",
        borderColor: "orange",
        data: wcup22_data.Spain,
      },
      {
        label: "CostaRica",
        borderColor: "red",
        data: wcup22_data.CostaRica,
      },
      {
        label: "Germany",
        borderColor: "black",
        data: wcup22_data.Germany,
      },
      {
        label: "Japan",
        borderColor: "mediumblue",
        data: wcup22_data.Japan,
      },
    ],
  },
  options: _option
});


var ctx_wcup22grf = document.getElementById("wcup22grf");
var wcup22grf = new Chart(ctx_wcup22grf, {
  type: 'line',
  data: {
    labels: wcup22_data.labels,
    datasets: [
      {
        label: "Belgium",
        borderColor: "black",
        data: wcup22_data.Belgium,
      },
      {
        label: "Canada",
        borderColor: "red",
        data: wcup22_data.Canada,
      },
      {
        label: "Morocco",
        borderColor: "green",
        data: wcup22_data.Morocco,
      },
      {
        label: "Croatia",
        borderColor: "blue",
        data: wcup22_data.Croatia,
      },
    ],
  },
  options: _option
});


var ctx_wcup22grg = document.getElementById("wcup22grg");
var wcup22grg = new Chart(ctx_wcup22grg, {
  type: 'line',
  data: {
    labels: wcup22_data.labels,
    datasets: [
      {
        label: "Brazil",
        borderColor: "yellow",
        data: wcup22_data.Brazil,
      },
      {
        label: "Serbia",
        borderColor: "blue",
        data: wcup22_data.Serbia,
      },
      {
        label: "Switzerland",
        borderColor: "red",
        data: wcup22_data.Switzerland,
      },
      {
        label: "Cameroon",
        borderColor: "green",
        data: wcup22_data.Cameroon,
      },
    ],
  },
  options: _option
});


var ctx_wcup22grh = document.getElementById("wcup22grh");
var wcup22grh = new Chart(ctx_wcup22grh, {
  type: 'line',
  data: {
    labels: wcup22_data.labels,
    datasets: [
      {
        label: "Portugal",
        borderColor: "green",
        data: wcup22_data.Portugal,
      },
      {
        label: "Ghana",
        borderColor: "yellow",
        data: wcup22_data.Ghana,
      },
      {
        label: "Uruguay",
        borderColor: "lightskyblue",
        data: wcup22_data.Uruguay,
      },
      {
        label: "Korea",
        borderColor: "red",
        data: wcup22_data.Korea,
      },
    ],
  },
  options: _option
});

