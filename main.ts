import { series } from './data';
import { Serie } from './Serie';

let seriesTable: HTMLElement = document.getElementById('series')!;
let seriesTbody: HTMLElement = document.createElement('tbody');

function mostrarSeries(series: Serie[]):void {

    
    series.forEach((serie) => {
    let trEelement: HTMLElement = document.createElement('tr');
    trEelement.innerHTML = `
        <td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `;
    seriesTbody.appendChild(trEelement);

}); 

    seriesTable.appendChild(seriesTbody);

}

mostrarSeries(series);