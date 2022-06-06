// Call the dataTables jQuery plugin
const output_svg = document.getElementById('DTSoccerGames');

function csv_data(dataPath) {
	const request = new XMLHttpRequest(); // HTTPでファイルを読み込む
	request.addEventListener('load', (event) => { // ロードさせ実行
		const response = event.target.responseText; // 受け取ったテキストを返す
    var tmp = response.split("\n");
    var cols = ["day","spot","score","vs", "result", "area", "wc"];
    const divcaption2 = document.createElement("caption");
    divcaption2.setAttribute("id", "dt22gamesvcaption");
    divcaption2.style.captionSide = "top";
    divcaption2.style.fontSize = "1.4rem";
    divcaption2.style.fontWeight = "300";
    divcaption2.style.lineHeight = "1.2";
    divcaption2.classList.add("pt-0");
    divcaption2.classList.add("pb-0");
    divcaption2.textContent = "";
    output_svg.appendChild(divcaption2);

    const divthead2 = document.createElement("thead");
    output_svg.appendChild(divthead2);
    const divtheadr2 = document.createElement("tr");
    divthead2.appendChild(divtheadr2);
    for (var j = 0; j < cols.length; j++) {
        let divth = document.createElement("th");
        divth.textContent = cols[j];
        divtheadr2.appendChild(divth);
    }
  
    var records = [];
    const divtbody2 = document.createElement("tbody");
    output_svg.appendChild(divtbody2);
    for (var i = 0; i < tmp.length-2; i++) {
      let divtr = document.createElement("tr");
      divtbody2.appendChild(divtr);
      var row_data = tmp[i+1];
        records[i] = row_data.split(",");
        for (var j=0; j<cols.length; j++) {
          let divtd = document.createElement("td");
          divtd.textContent = String(records[i][j]);
          divtr.appendChild(divtd);
        }
    }
  
    $(document).ready(function() {
        $('#DTSoccerGames').DataTable({
          order: [[ 0, "desc" ]],
          columnDefs: [
            { targets: 0 },
            { targets: 1 },
            { targets: 2 },
            { targets: 3 },
            { targets: 4 },
            { targets: 5 },
            { targets: 6 },
          ],
          columns: [
            null,
            null,
            {
              render: function(arg) { 
                // console.log(arg);
                if (arg.includes("PK")) {
                  _k = arg.split("PK");
                  // return `<span class="badge badge-warning">${arg}</span>`;
                  return `${_k[0]}<br><span class="badge badge-info">PK ${_k[1]}</span>`;
                } else {
                  return `${arg}`;
                }
              },
            },
            null,
            // {
            //   render: function(arg) { return `<span class="badge badge-warning">${arg}</span>`;}
            // },
            { 
              // data: "win-or-lose",
              render: function(arg) {
                if (arg=="Win") {
                  return `<span class="badge badge-primary">${arg}</span>`;
                } else if (arg=="Lose") {
                  return `<span class="badge badge-secondary">${arg}</span>`;
                } else if (arg=="Draw") {
                  return `<span class="badge badge-warning">${arg}</span>`;
                } else {
                  return arg;
                }
              }
            },
            {
              render: function(arg) {
                if (arg=="アジア") {
                  return `<span class="badge" style="background-color: rgb(170,221,221);">${arg}</span>`;
                } else if (arg=="アフリカ") {
                  return `<span class="badge" style="background-color: rgb(170,221,170);">${arg}</span>`;
                } else if (arg=="オセアニア") {
                  return `<span class="badge" style="background-color: rgb(255,255,187);">${arg}</span>`;
                } else if (arg=="欧州") {
                  return `<span class="badge" style="background-color: rgb(255,187,221);">${arg}</span>`;
                } else if (arg=="北中米カリブ海") {
                  return `<span class="badge" style="background-color: rgb(153,221,255);">${arg}</span>`;
                } else if (arg=="南米") {
                  return `<span class="badge" style="background-color: rgb(170,187,238);">${arg}</span>`;
                } else {
                  return `<span class="badge" style="background-color: rgb(204,204,204);">${arg}</span>`;
                }
              }
            },
            {
              render: function(arg) {
                if (arg=="W杯本戦") {
                  return `<span class="badge badge-success">${arg}</span>`;
                } else if (arg=="W杯予選") {
                  return `<span class="badge badge-danger">${arg}</span>`;
                } else {
                  return `${arg}`;
                }
             }
            },
          ],
          // dom: 'frtiQlp',
          dom: '<"float-left"f><"float-right"i>rt<"float-left"p>',
          searching: true,
          search: {
            regex: true,
            // search: "05/29" // @@KEYWORD@@
          },
          paging: true,
          info: true,
          // language: {
          //   searchPlaceholder: "search keyword"
          // }
          lengthMenu: [ 50, 30, 50 ],
          mark: false,
        }).on('search.dt', function() {
          var table = $('#DTSoccerGames').DataTable();
  
          var data = table.columns( [4] , {filter:'applied'}).data();
          var wld = [0, 0, 0];
  
          for (let i=0; i<data[0].length; i++) {
            if (data[0][i]=='Win') {
              wld[0] += 1;
            } else if (data[0][i]=='Lose') {
              wld[1] += 1;
            } else if (data[0][i]=='Draw') {
              wld[2] += 1;
            }
          }
          document.getElementById('dt22gamesvcaption').textContent = ` ${wld[0]}勝 ${wld[1]}敗 ${wld[2]}分`;
        })
    });
  
	});
	request.open('GET', dataPath, true); // csvのパスを指定
	request.send();
}
csv_data('../assets/data/csv/soccer_japan_upd.csv'); // csvのパス

function search_keywordv(keyword) {
  var areas = document.getElementsByClassName('area');
  for (var i=0; i<areas.length; i++) {
    console.log(areas[i].textContent);
    areas[i].classList.add('badge-secondary');
    areas[i].style.backgroundColor = null;
  }
  var table = $('#DTSoccerGames').DataTable();
  table.columns(5).search( keyword ).draw();
  if (keyword=="欧州") {
    var badge = document.getElementById('filter_eu');
    badge.classList.remove('badge-secondary');
    badge.style.backgroundColor = "rgb(255,187,221)";
  } else if (keyword=="北中米カリブ海") {
    var badge = document.getElementById('filter_na');
    badge.classList.remove('badge-secondary');
    badge.style.backgroundColor = "rgb(153,221,255)";
  } else if (keyword=="南米") {
    var badge = document.getElementById('filter_sa');
    badge.classList.remove('badge-secondary');
    badge.style.backgroundColor = "rgb(170,187,238)";
  } else if (keyword=="アジア") {
    var badge = document.getElementById('filter_asia');
    badge.classList.remove('badge-secondary');
    badge.style.backgroundColor = "rgb(170,221,221)";
  } else if (keyword=="アフリカ") {
    var badge = document.getElementById('filter_af');
    badge.classList.remove('badge-secondary');
    badge.style.backgroundColor = "rgb(170,221,170)";
  } else if (keyword=="オセアニア") {
    var badge = document.getElementById('filter_oce');
    badge.classList.remove('badge-secondary');
    badge.style.backgroundColor = "rgb(255,255,187)";
  } else {
    var badge = document.getElementById('filter_no');
    badge.classList.remove('badge-secondary');
    badge.style.backgroundColor = "aquamarine";
  }
};

// {
//   var fileurl = "https://raw.githubusercontent.com/kg1-thub/kg1-thub.github.io/master/assets/data/csv/catcher_stats22.csv";
//   fetch(fileurl)
//   .then(res => res.blob()) // Gets the response and returns it as a blob
//   .then(blob => {
//       var file = blob;
//       var reader = new FileReader();
//       reader.readAsText(file, 'Shift_JIS');
//       reader.onload = function(event) {
//           var textdata = event.target.result;
//           var tmp = textdata.split("\n");
//           // var cols = tmp[0].split(",");
//           // var cols = ["wls","pitcher","innings","at_bats","hits","strikeouts","walks","runs","earned_runs","catcher","day_of_game","vs_team,starting,series"];
//           var cols = ["勝敗S","投手","イニング","at_bats","hits","strikeouts","walks","失点","自責点","捕手","月日","対戦","出場","series"];
//           var records = [];
//           for (var i = 0; i < tmp.length-2; i++) {
//               var row_data = tmp[i+1];
//               records[i] = row_data.split(",");
//           }
//           makeCSV(records, cols);
//       };
//       reader.onerror = function() {
//           alert("エラー：ファイルをロードできません。");
//       };
//   });
// }
