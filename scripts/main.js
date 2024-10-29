// main.ts
import { series } from './data';
var seriesTable = document.getElementById('series');
var seriesTbody = document.createElement('tbody');
function mostrarSeries(series) {
    series.forEach(function (serie) {
        var trEelement = document.createElement('tr');
        trEelement.innerHTML = "\n        <td>".concat(serie.id, "</td>\n        <td>").concat(serie.name, "</td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>\n    ");
        seriesTbody === null || seriesTbody === void 0 ? void 0 : seriesTbody.appendChild(trEelement);
    });
    seriesTable.appendChild(seriesTbody);
}
mostrarSeries(series);
