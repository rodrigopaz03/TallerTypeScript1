import { series } from './data'; 

const seriesTableBody = document.getElementById('seriesTableBody');

series.forEach((serie) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `;
    seriesTableBody?.appendChild(row);  
});
