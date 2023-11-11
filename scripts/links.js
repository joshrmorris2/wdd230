const linksURL = "https://joshrmorris2.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons)
}

getLinks();

function displayLinks(lessons) {
    let list = document.querySelector('ul.activities');
    lessons.forEach(lesson => {
        //create list item
        let card = document.createElement('li');
        card.textContent = `${lesson}: `

        lessons.forEach(links => {
            let activity = document.createElement('a');

            activity.textContent = `${links.title}`;
            activity.setAttribute('href', links.url)

            card.appendChild(activity);
            card.appendChild(document.createTextNode(' | '));
        });

        if (card.lastChild) {
            card.removeChild(card.lastChild);
        }

        list.appendChild(card);
    });

}