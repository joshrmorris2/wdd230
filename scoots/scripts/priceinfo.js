const priceUrl = 'data/prices.json';
const pricetable = document.querySelector('#pricetable');

async function getPriceData() {
    const response = await fetch(priceUrl);
    const data = await response.json();

    displayPriceTable(data.vehicles);
}

displayPriceTable = (vehicles) => {
    vehicles.forEach((vehicle) => {
        let row = document.createElement('tr');
        let type = document.createElement('td');
        let seats = document.createElement('td');
        let walkhalf = document.createElement('td');
        let reshalf = document.createElement('td');
        let walkfull = document.createElement('td');
        let resfull = document.createElement('td');

        type.textContent = `${vehicle.make} ${vehicle.model} ${vehicle.type}`;
        seats.textContent = `${vehicle.seats}`;
        walkhalf.textContent = vehicle.halfday[0].walk;
        reshalf.textContent = vehicle.halfday[0].reserve;
        walkfull.textContent = vehicle.fullday[0].walk;
        resfull.textContent = vehicle.fullday[0].reserve;

        row.append(type,
            seats,
            walkhalf,
            reshalf,
            walkfull,
            resfull);

        pricetable.appendChild(row);
    });
}

getPriceData();