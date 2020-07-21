// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart 2018
var ctx18 = document.getElementById("myBarChart18");
var myLineChart = new Chart(ctx18, {
  type: 'bar',
  data: {
    labels: ["3・4月", "5月", "6月", "7月", "8月", "9・10月"],
    datasets: [
      {
        label: "小林",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        data: [12, 7, 9, 2, 9, 6],
      },
      {
        label: "大城",
        backgroundColor: "#dc3545",
        borderColor: "#dc3545",
        data: [2, 2, 1, 3, 3, 3],
      },
      {
        label: "宇佐見",
        backgroundColor: "#ffc107",
        borderColor: "#ffc107",
        data: [0, 0, 0, 7, 1, 1],
      },
      {
        label: "河野",
        backgroundColor: "#28a745",
        borderColor: "#28a745",
        data: [0, 0, 0, 0, 0, 0],
      }
    ],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        stacked: true
      }],
      yAxes: [{
        ticks: {
          min: 0,
          // max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        },
        stacked: true
      }],
    },
    legend: {
      display: true,
      position: 'right'
    }
  }
});

// Bar Chart 2019
var ctx19 = document.getElementById("myBarChart19");
var myLineChart = new Chart(ctx19, {
  type: 'bar',
  data: {
    labels: ["3・4月", "5月", "6月", "7月", "8月", "9月"],
    datasets: [
      {
        label: "小林",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        data: [8, 2, 7, 7, 10, 7],
      },
      {
        label: "炭谷",
        backgroundColor: "#dc3545",
        borderColor: "#dc3545",
        data: [4, 4, 7, 4, 0, 1],
      },
      {
        label: "大城",
        backgroundColor: "#ffc107",
        borderColor: "#ffc107",
        data: [4, 3, 1, 2, 5, 1],
      },
      {
        label: "その他",
        backgroundColor: "#28a745",
        borderColor: "#28a745",
        data: [0, 0, 0, 0, 0, 0],
      }
    ],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        stacked: true
      }],
      yAxes: [{
        ticks: {
          min: 0,
          // max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        },
        stacked: true
      }],
    },
    legend: {
      display: true,
      position: 'right'
    }
  }
});
// Bar Chart 2020
var ctx20 = document.getElementById("myBarChart20");
var myLineChart20 = new Chart(ctx20, {
  type: 'bar',
  data: {
    labels: ["6月", "7月", "8月", "9月", "10月", "11月"],
    datasets: [
      {
        label: "小林",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        data: [2, 0],
      },
      {
        label: "炭谷",
        backgroundColor: "#dc3545",
        borderColor: "#dc3545",
        data: [4, 3],
      },
      {
        label: "大城",
        backgroundColor: "#ffc107",
        borderColor: "#ffc107",
        data: [1, 7],
      },
      {
        label: "その他",
        backgroundColor: "#28a745",
        borderColor: "#28a745",
        data: [0, 0],
      }
    ],
  },
  options: {
    responsive: true,
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        stacked: true
      }],
      yAxes: [{
        ticks: {
          min: 0,
          // max: 15000,
          // maxTicksLimit: 5
        },
        gridLines: {
          display: true
        },
        stacked: true
      }],
    },
    legend: {
      display: true,
      position: 'right'
    }
  }
});
