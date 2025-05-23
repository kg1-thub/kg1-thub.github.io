// Call the dataTables jQuery plugin
function makeCSV(records, columns, year, keyword) {
  const divtable = document.getElementById(`dt${year}games`);
  const divcaption = document.getElementById(`dt${year}gamescaption`);
  divcaption.style.captionSide = "top";
  divcaption.style.fontSize = "1.4rem";
  divcaption.style.fontWeight = "300";
  divcaption.style.lineHeight = "1.2";
  divcaption.classList.add("pt-0");
  divcaption.classList.add("pb-0");

  const divthead = document.createElement("thead");
  divtable.appendChild(divthead);
  const divtheadr = document.createElement("tr");
  divthead.appendChild(divtheadr);
  let divth = document.createElement("th");
  divth.textContent = 'seq';
  divtheadr.appendChild(divth);
  for (var j = 0; j < columns.length; j++) {
      let divth = document.createElement("th");
      divth.textContent = columns[j];
      divtheadr.appendChild(divth);
  }

  const divtbody = document.createElement("tbody");
  divtable.appendChild(divtbody);
  for (var i = 0; i < records.length; i++) {
    console.log(records);
      let divtr = document.createElement("tr");
      divtbody.appendChild(divtr);
      let divtd = document.createElement("td");
      divtd.textContent = String(i);
      divtr.appendChild(divtd);
      for (var j = 0; j < columns.length; j++) {
          let divtd = document.createElement("td");
          divtd.textContent = records[i][j];
          divtr.appendChild(divtd);
      }
  }

  if (year == '25') {
    $(document).ready(function() {
      $(`#dt${year}games`).DataTable({
        order: [[ 0, "asc" ]],
        columnDefs: [
          { visible: false, targets: 0 },
          { visible: true, targets: 1 },
          { visible: true, targets: 2 },
          { visible: true, targets: 3 },
          { visible: true, targets: 4 },
          { visible: true, targets: 5 },
          { visible: true, targets: 6 },
          { visible: true, targets: 7 },
          { visible: true, targets: 8 },
          { visible: true, targets: 9 },
          { visible: true, targets: 10 },
          { visible: true, targets: 11 },
          { visible: true, targets: 12 },
          { visible: true, targets: 13 },
          { visible: true, targets: 14 },
          { visible: true, targets: 15 },
          { visible: true, targets: 16 },
          { visible: true, targets: 17 },
          { visible: true, targets: 18 },
          { visible: true, targets: 19 },
          { visible: true, targets: 20 },
          { visible: true, targets: 21 },
          { visible: true, targets: 22 },
        ],
        // dom: 'frtiQlp',
        dom: '<"float-left"f>rt<"float-left"p>',
        searching: true,
        search: {
          regex: true,
          search: keyword
        },
        paging: true,
        info: false,
        lengthMenu: [ 10, 30, 50 ],
        mark: true,
      })
      .on('search.dt', function() {
        var table = $(`#dt${year}games`).DataTable();
        var data = table.columns( [4, 6, 11, 15, 10] , {filter:'applied'}).data();
        var ab = 0;
        var h = 0;
        var rbi = 0;
        var sb = 0;
        var hr = 0
        for (let i=0; i<data[0].length; i++) {
          ab  += parseInt(data[0][i]);
          h   += parseInt(data[1][i]);
          rbi += parseInt(data[2][i]);
          sb  += parseInt(data[3][i]);
          hr  += parseInt(data[4][i]);
        }
        document.getElementById(`dt${year}gamescaption`).textContent = ` ${hr} HR / ${sb} SB / AVG .${Math.round(h/ab*1000)} / ${h} HITS / ${rbi} RBI`;
      })
    });
  }
};


function csvLoad(year, keyword, team_initial="") {
  if (year == "25"){
    var cols = ["Date","Team","OPP","AB","R","H","TB","2B","3B","HR","RBI","BB","IBB","SO","SB","CS","AVG","OBP","SLG","HBP","SAC","SF"];
  }
  // wls,pitcher,innings,pitches,at_bats,hits,homeruns,strikeouts,walks,hit_by_pitch,balks,runs,earned_runs,catcher,day_of_game,vs_team,starting,series
  var fileurl = `https://raw.githubusercontent.com/kg1-thub/kg1-thub.github.io/master/sho/sho25.csv`;
  fetch(fileurl)
  .then(res => res.blob()) // Gets the response and returns it as a blob
  .then(blob => {
      console.log("LOAD TABLE");
      var file = blob;
      var reader = new FileReader();
      reader.readAsText(file, 'Shift_JIS');
      reader.onload = function(event) {
          var textdata = event.target.result;
          var tmp = textdata.split("\n");
          var records = [];
          for (var i = 0; i < tmp.length-2; i++) {
              var row_data = tmp[i+1];
              records[i] = row_data.split(",");
          }
          makeCSV(records, cols, year, keyword);
      };
      reader.onerror = function() {
          alert("エラー：ファイルをロードできません。");
      };
  });
};

