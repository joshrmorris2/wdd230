const pricetable = document.querySelector('pricetable');

async function getPriceData() {
    const response = await fetch(pricetable);
    const data = await response.json();

    displayPriceTable(data.vehicles);
}

displayPriceTable = (vehicles) => {

    vehicles.forEach((member) => {
        let
    });
}