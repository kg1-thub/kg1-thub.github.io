$(document).ready(function () {
    // CSVファイルを読み込む関数
    function loadCSV() {
        Papa.parse("your-file.csv", {
            download: true,
            header: true,  // ヘッダーがあると仮定
            complete: function (results) {
                var data = results.data;

                // ヘッダー部分を作成
                var headerKeys = Object.keys(data[0]);
                var headerHtml = "";
                headerKeys.forEach(function (key) {
                    headerHtml += "<th>" + key + "</th>";
                });
                $("#csvHeader").html(headerHtml);

                // データ部分を作成
                var bodyHtml = "";
                data.forEach(function (row) {
                    bodyHtml += "<tr>";
                    headerKeys.forEach(function (key) {
                        bodyHtml += "<td>" + row[key] + "</td>";
                    });
                    bodyHtml += "</tr>";
                });
                $("#csvBody").html(bodyHtml);

                // DataTablesの初期化
                $('#csvTable').DataTable();
            }
        });
    }

    // CSVの読み込みを開始
    loadCSV();
});
