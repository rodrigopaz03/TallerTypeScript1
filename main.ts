// main.ts
import { series } from './data';
import { Serie } from './Serie';

const tableBody: HTMLElement = document.getElementById('seriesTableBody')!;
const tableseries: HTMLElement = document.getElementById('series')!;

function mostrarSeries(series: Serie[]) {

    series.forEach((serie) => {
    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `;
    tableBody?.appendChild(row);

    const averageSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0) / series.length;

  
    const trAverage = document.createElement("tr");
    trAverage.innerHTML = `<td colspan="4" style="text-align: center; font-weight: bold;">
                            Seasons average: ${averageSeasons.toFixed(0)}
                           </td>`;
   
    tableseries.appendChild(trAverage);


}); }

mostrarSeries(series);