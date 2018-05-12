const writeSection = (parentElement) => {
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }

    const location = window.location.hash.slice(1);
    const { heading, tagline, content, image } = copy[location];

    const section = document.createElement('section');

    const h1 = document.createElement('h1');
    h1.textContent = heading;
    section.appendChild(h1);

    const h2 = document.createElement('h2');
    h2.textContent = tagline;
    section.appendChild(h2);

    content.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        section.appendChild(p);
    });

    parentElement.appendChild(section);
};