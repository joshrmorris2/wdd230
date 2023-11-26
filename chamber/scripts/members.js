const memUrl = 'data/members.json';
const cards = document.querySelector('#cards');
const spotlight = document.querySelector('#spotlights');



async function getMemberData() {
    const response = await fetch(memUrl);
    const data = await response.json();

    if (spotlight !== null) {

        const head = document.querySelector('head');
        let style = document.createElement('link');

        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', 'styles/card.css');
        head.appendChild(style);

        const filtered = data.members.filter(item => item.memlvl >= 3)
        displayMembers(filtered.slice(0, 3));
    } else {
        displayMembers(data.members);
    }
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let site = document.createElement('a');
        let level = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');

        name.textContent = `${member.name}`;
        image.setAttribute('src', member.img);
        image.setAttribute('alt', `${member.name} logo`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '');
        site.href = site.textContent = member.url;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;

        switch (member.memlvl) {
            case 1:
                level.textContent = 'NP Membership';
                break;
            case 2:
                level.textContent = 'Bronze Membership';
                break;
            case 3:
                level.textContent = 'Silver Membership';
                break;
            case 4:
                level.textContent = 'Gold Membership';
                break;
            default:
                level.textContent = 'No Membership';
        }

        card.append(image);
        card.append(name);
        card.append(site);
        card.append(level);
        card.append(address);
        card.append(phone);

        cards.appendChild(card);
    });
}

getMemberData();