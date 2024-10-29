// main.ts
import { series } from './data';
var tableBody = document.getElementById('seriesTableBody');
var tableseries = document.getElementById('series');
function mostrarSeries(series) {
    series.forEach(function (serie) {
        var row = document.createElement('tr');
        row.innerHTML = "\n        <td>".concat(serie.id, "</td>\n        <td>").concat(serie.name, "</td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>\n    ");
        tableBody === null || tableBody === void 0 ? void 0 : tableBody.appendChild(row);
        var averageSeasons = series.reduce(function (acc, serie) { return acc + serie.seasons; }, 0) / series.length;
        var trAverage = document.createElement("tr");
        trAverage.innerHTML = "<td colspan=\"4\" style=\"text-align: center; font-weight: bold;\">\n                            Seasons average: ".concat(averageSeasons.toFixed(0), "\n                           </td>");
        tableseries.appendChild(trAverage);
    });
}
mostrarSeries(series);
